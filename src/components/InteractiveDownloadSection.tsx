import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DownloadSimple, GithubLogo, ArrowSquareOut, MonitorPlay, Terminal, DeviceMobile } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/hooks/useTranslation';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

interface GitHubAsset {
  id: number;
  name: string;
  browser_download_url: string;
  size: number;
  download_count: number;
  isExternal?: boolean;
}

interface DownloadCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  downloadUrl: string;
  size: number;
  downloads: number;
  index: number;
}

const InteractiveDownloadSection = memo(() => {
  const { t } = useTranslation();
  const [selectedOS, setSelectedOS] = useState('windows');
  const [copiedBrew, setCopiedBrew] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Fetch latest release from GitHub
  const { data: releases, isLoading, error } = useQuery({
    queryKey: ['github-releases'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher/releases');
      if (!response.ok) throw new Error('Failed to fetch releases');
      return response.json();
    },
    staleTime: 60000, // 1 minute cache
  });

  const latestRelease = releases?.[0];

  const handleBrewCopy = () => {
    const commands = `brew tap voxelum/brew\nbrew install --cask xmcl`;
    navigator.clipboard.writeText(commands);
    setCopiedBrew(true);
    toast.success(t('downloadMessages.brewCommands'));
    setTimeout(() => setCopiedBrew(false), 2000);
  };

  const getFilteredAssetsByPlatform = (assets: GitHubAsset[]) => {
    if (!assets) return { windows: [], macos: [], linux: [] };
    
    return {
      windows: assets.filter(asset => {
        const name = asset.name.toLowerCase();
        return (name.includes('.exe') || name.includes('setup') || name.includes('.zip')) && 
               asset.size > 1024 * 1024 && 
               !name.includes('blockmap') && 
               !name.includes('.sha256') &&
               !name.includes('.sha256sum') &&
               !name.includes('.sig');
      }).slice(0, 2),
      
      macos: assets.filter(asset => {
        const name = asset.name.toLowerCase();
        return (name.includes('.dmg') || name.includes('.pkg')) && 
               asset.size > 1024 * 1024 &&
               !name.includes('blockmap') && 
               !name.includes('.sha256') &&
               !name.includes('.sha256sum') &&
               !name.includes('.sig');
      }).slice(0, 1),
      
      linux: [
        ...assets.filter(asset => {
          const name = asset.name.toLowerCase();
          return (name.includes('.deb') || name.includes('.rpm') || name.includes('.appimage')) && 
                 asset.size > 1024 * 1024 &&
                 !name.includes('blockmap') && 
                 !name.includes('.sha256') &&
                 !name.includes('.sha256sum') &&
                 !name.includes('.sig');
        }).slice(0, 3),
        {
          id: 999,
          name: 'AUR Package',
          browser_download_url: 'https://aur.archlinux.org/packages/xmcl-launcher',
          size: 0,
          download_count: 0,
          isExternal: true
        },
        {
          id: 998,
          name: 'Flathub',
          browser_download_url: 'https://flathub.org/apps/app.xmcl.voxelum',
          size: 0,
          download_count: 0,
          isExternal: true
        }
      ]
    };
  };

  const OSButton = ({ id, name, icon, isSelected, onClick }: {
    id: string;
    name: string;
    icon: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
  }) => {
    return (
      <motion.button
        onClick={onClick}
        className={`relative px-4 py-3 md:px-8 md:py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 md:gap-3 overflow-hidden ${
          isSelected
            ? 'bg-blue-600 text-white shadow-xl scale-105'
            : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 border border-slate-200/50 dark:border-slate-700/50'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl md:text-2xl">{icon}</span>
        <span className="text-base md:text-lg">{name}</span>
        {isSelected && (
          <motion.div
            className="absolute inset-0 bg-blue-600/20 rounded-xl"
            layoutId="selectedOS"
          />
        )}
      </motion.button>
    );
  };

  const DownloadCard = ({ title, description, icon, downloadUrl, size, downloads, index }: DownloadCardProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative group"
      >
        <Card className="p-8 hover:shadow-xl transition-all duration-500 relative overflow-hidden bg-white/90 dark:bg-slate-800/90 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-sm">
          <div className="text-center relative z-10">
            <motion.div 
              className="text-5xl mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {icon}
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
              {title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
              {description}
            </p>
            
            <div className="flex justify-between text-sm text-slate-500 mb-6 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
              <span>{size} {t('downloadSection.sizeMB')}</span>
              <span>{downloads} {t('downloadSection.downloadCount')}</span>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => window.open(downloadUrl, '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <DownloadSimple className="w-5 h-5 mr-3" />
                {t('downloadSection.download')}
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-slate-600 dark:text-slate-400 text-lg">{t('downloadMessages.loadingReleases')}</p>
        </div>
      </section>
    );
  }

  if (error || !latestRelease) {
    let errorMsg = t('common.error');
    if (error?.message?.includes('rate limit')) {
      errorMsg = 'Превышен лимит API GitHub. Пожалуйста, попробуйте позже.';
    } else if (!latestRelease) {
      errorMsg = 'Релизы не найдены.';
    }
    return (
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <p className="text-red-600 dark:text-red-400 text-lg">{errorMsg}</p>
        </div>
      </section>
    );
  }

  const platformAssets = getFilteredAssetsByPlatform(latestRelease.assets);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('downloadSection.title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('downloadSection.subtitle')}
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center gap-6 mb-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-blue-100 dark:bg-blue-900/30">
              {t('downloadSection.version')} {latestRelease.tag_name}
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              {t('downloadMessages.releasedOn')} {new Date(latestRelease.published_at).toLocaleDateString()}
            </Badge>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-3 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex gap-3">
              <OSButton
                id="windows"
                name="Windows"
                icon={<MonitorPlay />}
                isSelected={selectedOS === 'windows'}
                onClick={() => {
                  setSelectedOS('windows');
                  toast.success(`${t('osSwitch.switchedTo')} Windows`);
                }}
              />
              <OSButton
                id="macos"
                name="macOS"
                icon={<DeviceMobile />}
                isSelected={selectedOS === 'macos'}
                onClick={() => {
                  setSelectedOS('macos');
                  toast.success(`${t('osSwitch.switchedTo')} macOS`);
                }}
              />
              <OSButton
                id="linux"
                name="Linux"
                icon={<Terminal />}
                isSelected={selectedOS === 'linux'}
                onClick={() => {
                  setSelectedOS('linux');
                  toast.success(`${t('osSwitch.switchedTo')} Linux`);
                }}
              />
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedOS === 'windows' && (
            <motion.div
              key="windows"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {platformAssets.windows.map((asset, index) => (
                <DownloadCard
                  key={asset.id}
                  title={asset.name.includes('.exe') ? 'Windows Installer' : 'Windows Archive'}
                  description={asset.name}
                  icon={<MonitorPlay />}
                  downloadUrl={asset.browser_download_url}
                  size={Math.round(asset.size / 1024 / 1024)}
                  downloads={asset.download_count}
                  index={index}
                />
              ))}
            </motion.div>
          )}

          {selectedOS === 'macos' && (
            <motion.div
              key="macos"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {platformAssets.macos.map((asset, index) => (
                <DownloadCard
                  key={asset.id}
                  title="macOS Package"
                  description={asset.name}
                  icon={<DeviceMobile />}
                  downloadUrl={asset.browser_download_url}
                  size={Math.round(asset.size / 1024 / 1024)}
                  downloads={asset.download_count}
                  index={index}
                />
              ))}

              <DownloadCard
                key="homebrew"
                title="Homebrew"
                description="Install via CLI"
                icon={<Terminal />}
                downloadUrl="#"
                size={0}
                downloads={0}
                index={0}
              />
            </motion.div>
          )}

          {selectedOS === 'linux' && (
            <motion.div
              key="linux"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {platformAssets.linux.map((asset, index) => {
                let packageType = 'Linux Package';
                let icon = <Terminal />;
                
                if (asset.isExternal) {
                  if (asset.name.includes('AUR')) {
                    packageType = 'AUR Package';
                    icon = <ArrowSquareOut />;
                  } else if (asset.name.includes('Flathub')) {
                    packageType = 'Flathub';
                    icon = <ArrowSquareOut />;
                  }
                } else {
                  if (asset.name.includes('.deb')) packageType = 'Debian Package';
                  else if (asset.name.includes('.rpm')) packageType = 'RPM Package';
                  else if (asset.name.includes('.appimage')) packageType = 'AppImage';
                }
                
                return (
                  <DownloadCard
                    key={asset.id}
                    title={packageType}
                    description={asset.isExternal ? `Install via ${packageType}` : asset.name}
                    icon={icon}
                    downloadUrl={asset.browser_download_url}
                    size={asset.isExternal ? 0 : Math.round(asset.size / 1024 / 1024)}
                    downloads={asset.download_count}
                    index={index}
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => window.open(latestRelease.html_url, '_blank')}
                className="bg-white/80 dark:bg-slate-800/80 border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-700 py-3 px-6 text-lg font-medium rounded-lg"
              >
                <ArrowSquareOut className="w-5 h-5 mr-3" />
                {t('downloadSection.releaseNotes')}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher/releases', '_blank')}
                className="bg-white/80 dark:bg-slate-800/80 border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-700 py-3 px-6 text-lg font-medium rounded-lg"
              >
                <GithubLogo className="w-5 h-5 mr-3" />
                {t('downloadMessages.viewAllReleases')}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default InteractiveDownloadSection;