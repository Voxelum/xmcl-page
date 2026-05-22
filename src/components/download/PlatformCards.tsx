import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Laptop, AppleLogo, Monitor, DownloadSimple, ArrowSquareOut, LinuxLogo } from '@phosphor-icons/react';
import type { PlatformAssets, GitHubAsset } from './types';

interface PlatformCardsProps {
  platformAssets: PlatformAssets;
  onDownload: (url: string) => void;
}

export const PlatformCards: React.FC<PlatformCardsProps> = ({ platformAssets, onDownload }) => {
  const { t } = useTranslation();

  const renderAssetGroup = (title: string, assets: GitHubAsset[]) => {
    if (assets.length === 0) return null;
    return (
      <div className="mb-4 last:mb-0">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">{title}</h4>
        <div className="space-y-2">
          {assets.map((asset) => (
            <Button
              key={asset.id}
              variant="ghost"
              className="w-full justify-between bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white group/btn h-auto py-2"
              onClick={() => onDownload(asset.browser_download_url)}
            >
              <div className="flex flex-col items-start truncate mr-2">
                <span className="truncate w-full font-medium">{asset.name}</span>
                <span className="text-xs text-slate-500">{(asset.size / 1024 / 1024).toFixed(1)} MB</span>
              </div>
              <DownloadSimple className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity shrink-0" />
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const renderExternalLink = (name: string, url: string, description: string) => (
    <Button
      variant="ghost"
      className="w-full justify-between bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white group/btn h-auto py-2"
      onClick={() => window.open(url, '_blank')}
    >
        <div className="flex flex-col items-start truncate mr-2">
            <span className="truncate w-full font-medium">{name}</span>
            <span className="text-xs text-slate-500">{description}</span>
        </div>
        <ArrowSquareOut className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity shrink-0" />
    </Button>
  );

  return (
    <section className="py-10 md:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16 text-slate-200">
           {t('downloadMessages.otherPlatforms') || 'Other Platforms'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Windows Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-white/5 group-hover:border-blue-500/50 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-blue-400">
                <Laptop className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Windows</h3>
              <p className="text-slate-400 mb-8 h-6">{t('downloadMessages.windowsDescription') || 'Windows 10/11'}</p>
              
              <div className="space-y-4">
                {renderAssetGroup(t('downloadMessages.windowsInstallers') || 'x64 / Installers', platformAssets.windows.x64)}
                {renderAssetGroup(t('downloadMessages.otherOption') || 'App Store / Other', platformAssets.windows.app)}
              </div>
            </div>
          </motion.div>

          {/* macOS Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-white/5 group-hover:border-slate-500/50 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-slate-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-slate-200">
                <AppleLogo className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">macOS</h3>
              <p className="text-slate-400 mb-8 h-6">{t('downloadMessages.macosDescription') || 'macOS 11.0+'}</p>
              
              <div className="space-y-4">
                 {renderAssetGroup(t('downloadMessages.appleSilicon') || 'Apple Silicon (M1/M2)', platformAssets.macos.arm64)}
                 {renderAssetGroup(t('downloadMessages.intel') || 'Intel (x64)', platformAssets.macos.x64)}
              </div>
            </div>
          </motion.div>

          {/* Linux Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-white/5 group-hover:border-orange-500/50 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-orange-400">
                <LinuxLogo className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Linux</h3>
              <p className="text-slate-400 mb-8 h-6">{t('downloadMessages.linuxDescription') || 'Debian, RPM, AppImage'}</p>
              
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {renderAssetGroup('x64', platformAssets.linux.x64)}
                {renderAssetGroup('ARM64', platformAssets.linux.arm64)}
                
                <div className="mb-4 last:mb-0">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">{t('downloadMessages.packageManagers') || 'Package Managers'}</h4>
                    <div className="space-y-2">
                        {renderExternalLink('Flathub', 'https://flathub.org/en/apps/app.xmcl.voxelum', 'Install via Flathub')}
                        {renderExternalLink('AUR', 'https://aur.archlinux.org/packages/xmcl-launcher', 'Install via AUR')}
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
