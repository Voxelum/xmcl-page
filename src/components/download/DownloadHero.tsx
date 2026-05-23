import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, DownloadSimple, Laptop, AppleLogo, MonitorPlay } from '@phosphor-icons/react';
import type { GitHubRelease } from './types';

interface DownloadHeroProps {
  latestRelease: GitHubRelease | undefined;
  detectedOS: 'windows' | 'macos' | 'linux';
  onDownload: () => void;
}

export const DownloadHero: React.FC<DownloadHeroProps> = ({ latestRelease, detectedOS, onDownload }) => {
  const { t } = useTranslation();

  const getOSIcon = () => {
    switch (detectedOS) {
      case 'windows': return <Laptop className="w-6 h-6 mr-2" />;
      case 'macos': return <AppleLogo className="w-6 h-6 mr-2" />;
      case 'linux': return <MonitorPlay className="w-6 h-6 mr-2" />;
    }
  };

  const getOSName = () => {
    switch (detectedOS) {
      case 'windows': return 'Windows';
      case 'macos': return 'macOS';
      case 'linux': return 'Linux';
    }
  };

  if (!latestRelease) return null;

  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden bg-background text-foreground">
      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 md:mb-6 py-1.5 px-3 md:py-2 md:px-4 bg-[#ea4c3c]/10 border border-[#ea4c3c]/20 hover:bg-[#ea4c3c]/10 text-[#ea4c3c] text-xs md:text-sm">
            {t('downloadMessages.version')} {latestRelease.tag_name}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tight transform-gpu">
            <span className="text-foreground">
              {t('downloadMessages.downloadTitle')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            {t('downloadMessages.downloadDescription')}
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              onClick={onDownload}
              className="h-14 px-8 md:h-16 md:px-10 text-base md:text-lg bg-[#ea4c3c] hover:bg-[#d63e2c] border-0 shadow-none rounded-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-white font-bold"
            >
              {getOSIcon()}
              {t('downloadMessages.download')} {getOSName()}
              <DownloadSimple className="w-5 h-5 ml-3" />
            </Button>
            
            <span className="text-sm text-muted-foreground">
              {t('downloadMessages.releasedOn')} {new Date(latestRelease.published_at).toLocaleDateString()}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
