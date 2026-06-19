import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { useQuery } from '@tanstack/react-query';
import { Star, DownloadSimple, GitBranch, Pulse, ArrowRight, Lightning, ArrowSquareOut, TrendUp, Package, GithubLogo } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/components/Link';

interface HeroSectionProps {
  onDownloadClick: () => void;
}

export const HeroSection = ({ onDownloadClick }: HeroSectionProps) => {
  const { t } = useTranslation();

  // Fetch GitHub repository data
  const { data: repoData, isLoading: repoLoading } = useQuery({
    queryKey: ['github-repo-stats'],
    queryFn: async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher');
        if (!response.ok) {
          console.warn(`GitHub API returned status ${response.status} for repo stats. Using fallback stats.`);
          return { stargazers_count: 1420, forks_count: 181, open_issues_count: 129 };
        }
        return response.json();
      } catch (e) {
        console.warn('Failed to fetch GitHub repo stats, using fallback:', e);
        return { stargazers_count: 1420, forks_count: 181, open_issues_count: 129 };
      }
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
    refetchOnWindowFocus: false,
  });

  // Fetch releases data for download count
  const { data: releasesData, isLoading: releasesLoading } = useQuery({
    queryKey: ['github-releases-stats'],
    queryFn: async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher/releases');
        if (!response.ok) {
          console.warn(`GitHub API returned status ${response.status} for releases stats. Using fallback.`);
          return [{ assets: [{ download_count: 1850000 }] }];
        }
        return response.json();
      } catch (e) {
        console.warn('Failed to fetch GitHub releases for stats, using fallback:', e);
        return [{ assets: [{ download_count: 1850000 }] }];
      }
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
    refetchOnWindowFocus: false,
  });

  // Calculate total downloads from all releases
  const totalDownloads = releasesData?.reduce((acc: number, release: any) => {
    return acc + (release.assets?.reduce((assetAcc: number, asset: any) => {
      return assetAcc + (asset.download_count || 0);
    }, 0) || 0);
  }, 0) || 0;

  // Format large numbers
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const isLoading = repoLoading || releasesLoading;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-10 sm:py-20 relative overflow-hidden bg-background">
      {/* Animated Background - Flat style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 bg-primary/10 rounded-full border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium text-primary">
                {t('home.openSourceStatus')}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-primary">
                {t('home.heroTitle')}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed font-light mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('home.heroSubtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/download">
                  <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden bg-primary hover:bg-primary/90 text-white font-bold shadow hover:shadow-md transition-all duration-300 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-lg border-0">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <DownloadSimple className="w-5 h-5 group-hover:animate-bounce" />
                      {t('home.getStarted')}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onDownloadClick}
                  className="w-full sm:w-auto border-border bg-card hover:bg-accent px-6 py-5 md:px-8 md:py-6 text-base md:text-lg text-foreground rounded-lg transition-colors shadow-none"
                >
                  {t('home.learnMore')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="flex flex-wrap gap-2 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Badge variant="outline" className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm bg-card border-border text-foreground rounded-lg">
                <Package className="w-3 h-3 md:w-4 md:h-4 mr-1 text-primary" />
                {t('home.crossPlatform')}
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm bg-card border-border text-foreground rounded-lg">
                <Lightning className="w-3 h-3 md:w-4 md:h-4 mr-1 text-yellow-500" />
                {t('home.highPerformance')}
              </Badge>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Downloads Card */}
            <motion.div
              className="bg-card rounded-xl p-6 border border-border transition-colors duration-300 shadow-none"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <DownloadSimple className="w-8 h-8 text-primary" />
                <TrendUp className="w-5 h-5 text-slate-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {isLoading ? (
                  <div className="w-16 h-8 bg-muted rounded animate-pulse"></div>
                ) : (
                  formatNumber(totalDownloads)
                )}
              </div>
              <div className="text-sm text-muted-foreground">{t('home.downloads')}</div>
            </motion.div>

            {/* Stars Card */}
            <motion.div
              className="bg-card rounded-xl p-6 border border-border transition-colors duration-300 shadow-none"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <Star className="w-8 h-8 text-yellow-500" />
                <ArrowSquareOut className="w-5 h-5 text-slate-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {isLoading ? (
                  <div className="w-16 h-8 bg-muted rounded animate-pulse"></div>
                ) : (
                  formatNumber(repoData?.stargazers_count || 0)
                )}
              </div>
              <div className="text-sm text-muted-foreground">{t('home.stars')}</div>
            </motion.div>

            {/* Forks Card */}
            <motion.div
              className="bg-card rounded-xl p-6 border border-border transition-colors duration-300 shadow-none"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <GitBranch className="w-8 h-8 text-purple-500" />
                <Pulse className="w-5 h-5 text-slate-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {isLoading ? (
                  <div className="w-16 h-8 bg-muted rounded animate-pulse"></div>
                ) : (
                  formatNumber(repoData?.forks_count || 0)
                )}
              </div>
              <div className="text-sm text-muted-foreground">{t('home.forks')}</div>
            </motion.div>

            {/* Issues Card */}
            <motion.div
              className="bg-card rounded-xl p-6 border border-border transition-colors duration-300 shadow-none"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <Pulse className="w-8 h-8 text-primary" />
                <ArrowSquareOut className="w-5 h-5 text-slate-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {isLoading ? (
                  <div className="w-16 h-8 bg-muted rounded animate-pulse"></div>
                ) : (
                  repoData?.open_issues_count || 0
                )}
              </div>
              <div className="text-sm text-muted-foreground">{t('home.issues')}</div>
            </motion.div>
          </motion.div>
        </div>

        {/* GitHub Link */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="https://github.com/Voxelum/x-minecraft-launcher"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border text-foreground hover:bg-accent transition-colors shadow-sm"
          >
            <GithubLogo className="w-5 h-5" />
            {t('home.viewOnGitHub')}
            <ArrowSquareOut className="w-4 h-4 text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

