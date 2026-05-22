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

const MOCK_RELEASES = [
  {
    tag_name: "v2.6.5",
    assets: [
      {
        id: 1,
        name: "xmcl-setup-2.6.5.exe",
        browser_download_url: "https://github.com/Voxelum/x-minecraft-launcher/releases/download/v2.6.5/xmcl-setup-2.6.5.exe",
        size: 58000000,
        download_count: 145200
      },
      {
        id: 2,
        name: "xmcl-2.6.5.dmg",
        browser_download_url: "https://github.com/Voxelum/x-minecraft-launcher/releases/download/v2.6.5/xmcl-2.6.5.dmg",
        size: 61000000,
        download_count: 48900
      },
      {
        id: 3,
        name: "xmcl-2.6.5.AppImage",
        browser_download_url: "https://github.com/Voxelum/x-minecraft-launcher/releases/download/v2.6.5/xmcl-2.6.5.AppImage",
        size: 72000000,
        download_count: 12400
      },
      {
        id: 4,
        name: "xmcl-2.6.5.deb",
        browser_download_url: "https://github.com/Voxelum/x-minecraft-launcher/releases/download/v2.6.5/xmcl-2.6.5.deb",
        size: 55000000,
        download_count: 9800
      }
    ]
  }
];

const InteractiveDownloadSection = memo(() => {
  const { t } = useTranslation();
  const [selectedOS, setSelectedOS] = useState('windows');
  const [copiedBrew, setCopiedBrew] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Fetch latest release from GitHub
  const { data: releases, isLoading, error } = useQuery({
    queryKey: ['github-releases'],
    queryFn: async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher/releases');
        if (!response.ok) {
          console.warn(`GitHub API returned status ${response.status}. Using fallback releases.`);
          return MOCK_RELEASES;
        }
        return response.json();
      } catch (e) {
        console.warn('Failed to fetch releases, using fallback:', e);
        return MOCK_RELEASES;
      }
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
            ? 'bg-primary text-white shadow-none scale-105 animate-none'
            : 'bg-card text-muted-foreground hover:bg-accent hover:text-foreground border border-border'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl md:text-2xl">{icon}</span>
        <span className="text-base md:text-lg">{name}</span>
        {isSelected && (
          <motion.div
            className="absolute inset-0 bg-primary/10 rounded-xl"
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
        <Card className="p-8 hover:border-primary transition-all duration-300 relative overflow-hidden bg-card border border-border rounded-2xl shadow-none">
          <div className="text-center relative z-10">
            <motion.div 
              className="text-5xl mb-6 text-primary"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {icon}
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              {title}
            </h3>
            
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              {description}
            </p>
            
            <div className="flex justify-between text-sm text-muted-foreground mb-6 bg-background border border-border rounded-lg p-3">
              <span>{size} {t('downloadSection.sizeMB')}</span>
              <span>{downloads} {t('downloadSection.downloadCount')}</span>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => window.open(downloadUrl, '_blank')}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-medium shadow-none hover:shadow-none transition-all duration-300 rounded-lg border-0"
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
      <section className="py-20 px-4 relative overflow-hidden bg-background">
        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-muted-foreground text-lg">{t('downloadMessages.loadingReleases')}</p>
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
      className="py-12 md:py-20 px-4 relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('downloadSection.title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
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
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-primary/10 text-primary border border-primary/20 rounded-lg">
              {t('downloadSection.version')} {latestRelease.tag_name}
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4 bg-card border-border text-foreground rounded-lg">
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
          <div className="bg-card rounded-2xl p-3 shadow-none border border-border">
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
                className="bg-card border-border text-foreground hover:bg-accent hover:text-foreground py-3 px-6 text-lg font-medium rounded-lg"
              >
                <ArrowSquareOut className="w-5 h-5 mr-3" />
                {t('downloadSection.releaseNotes')}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher/releases', '_blank')}
                className="bg-card border-border text-foreground hover:bg-accent hover:text-foreground py-3 px-6 text-lg font-medium rounded-lg"
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