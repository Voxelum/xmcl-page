import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  GithubLogo, ChatCircle, Heart, Coffee, House, BookOpen,
  FileText, Bug, DownloadSimple, Lightning, Shield, ArrowRight
} from '@phosphor-icons/react';
import { useTranslation } from '@/hooks/useTranslation';
// Reverted back to the custom Link component to fix the CommonJS import error
import { Link } from '@/components/Link';
import { motion } from 'framer-motion';

interface FooterProps {
  onDownloadClick: () => void;
}

const sponsors = [
  {
    name: 'SignPath',
    role: 'Code Signing',
    url: 'https://signpath.io',
    logo: '/PhotoXMCL/signpath.png'
  },
  {
    name: 'Deno Deploy',
    role: 'Serverless Platform',
    url: 'https://deno.com/deploy',
    logo: '/PhotoXMCL/deno.gif'
  },
  {
    name: 'Tencent EdgeOne',
    role: 'CDN & Security',
    url: 'https://edgeone.tencent.com',
    logo: '/PhotoXMCL/tencent.png'
  },
];

const socialLinks = [
  { icon: GithubLogo, href: 'https://github.com/voxelum/x-minecraft-launcher', label: 'GitHub' },
  { icon: ChatCircle, href: 'https://discord.gg/W5XVwYY7GQ', label: 'Discord' },
  { icon: Heart, href: 'https://afdian.com/@ci010', label: 'Afdian' },
  { icon: Coffee, href: 'https://ko-fi.com/ci010', label: 'Ko-fi' },
];

const features = [
  { icon: Lightning, label: 'highPerformance' },
  { icon: Shield, label: 'secure' },
];

const AnimatedLink = React.memo(({
  icon: Icon,
  label,
  href,
  to,
  isExternal = false,
  delay = 0
}: {
  icon: any;
  label: string;
  href?: string;
  to?: string;
  isExternal?: boolean;
  delay?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <motion.div
      className="group relative overflow-hidden list-none"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <div className={`p-1.5 rounded-md transition-colors duration-300 ${isHovered ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10' : 'text-slate-400 dark:text-slate-500'}`}>
            <Icon className="w-4 h-4" />
          </div>

          <span className={`text-sm font-medium transition-colors duration-300 ${isHovered ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}>
            {label}
          </span>
        </div>

        {isExternal && (
          <ArrowRight
            className={`w-3.5 h-3.5 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0 text-indigo-500' : 'opacity-0 -translate-x-2'}`}
          />
        )}
      </div>
    </motion.div>
  );

  if (to) {
    return <Link to={to} className="block w-full">{content}</Link>;
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
        aria-label={`${label} (opens in new tab)`}
      >
        {content}
      </a>
    );
  }

  return <>{content}</>;
});

AnimatedLink.displayName = "AnimatedLink";

const LinksSection = React.memo(({ title, links, delay = 0 }: {
  title: string;
  links: any[];
  delay?: number;
}) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider px-2">
        {title}
      </h3>

      <nav aria-label={title}>
        <ul className="space-y-1">
          {links.map((link, index) => (
            <li key={link.label}>
              <AnimatedLink
                icon={link.icon}
                label={link.label}
                href={link.href}
                to={link.to}
                isExternal={!!link.href}
                delay={delay + 0.1 + index * 0.1}
              />
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
});

LinksSection.displayName = "LinksSection";

export const Footer = React.memo(({ onDownloadClick }: FooterProps) => {
  const { t } = useTranslation();
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const releaseResponse = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher/releases/latest');
        if (releaseResponse.ok) {
          const releaseData = await releaseResponse.json();
          setLatestVersion(releaseData.tag_name);
        }
      } catch (error) {
        console.error('Error fetching repository data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, []);

  const quickLinks = React.useMemo(() => [
    { icon: House, label: t('nav.home'), to: '/' },
    { icon: BookOpen, label: t('nav.guide'), to: '/guide' },
    { icon: FileText, label: t('nav.changelog'), to: '/changelog' },
    { icon: Bug, label: t('nav.issues'), to: '/issues' },
  ], [t]);

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0a0a0b] text-foreground overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">

          {/* Brand Column */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center bg-white dark:bg-white/5 shadow-sm border border-slate-200 dark:border-white/10"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/PhotoXMCL/logo.png"
                  alt="X Minecraft Launcher logo"
                  width="40"
                  height="40"
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </motion.div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  X Minecraft Launcher
                </h2>
                <div className="flex items-center gap-2 mt-2">
                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                    {loading ? t('common.loading') : (latestVersion || t('lastVersion'))}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-md">
              {t('modernCrossplatformDescription') || "A modern, open source Minecraft launcher."}
              <br className="hidden sm:block" />
              {t('home.comprehensiveSolution') || "Designed for performance and extensibility."}
            </p>

            <div className="flex flex-wrap gap-2" aria-label="Key features">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 text-xs font-medium"
                >
                  <feature.icon className="w-3.5 h-3.5" />
                  {t(`footer.features.${feature.label}`)}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild className="h-11 px-6 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all bg-indigo-600 hover:bg-indigo-700 text-white border-0">
                <Link to="/#download-section" onClick={onDownloadClick}>
                  <DownloadSimple className="w-4 h-4 mr-2" />
                  {t('footer.downloadXMCL')}
                </Link>
              </Button>
              <Button variant="outline" className="h-11 px-6 rounded-xl border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200" onClick={() => window.open('https://github.com/voxelum/x-minecraft-launcher/releases', '_blank')}>
                <GithubLogo className="w-4 h-4 mr-2" />
                {t('footer.viewReleases')}
              </Button>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 lg:pl-12">
            <LinksSection
              title={t('footer.quickLinks')}
              links={quickLinks}
              delay={0.2}
            />
            <LinksSection
              title={t('footer.community')}
              links={socialLinks}
              delay={0.4}
            />
          </div>
        </div>

        {/* Sponsors Section */}
        <motion.div
          className="border-t border-slate-200 dark:border-white/10 pt-12 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
              {t('sponsoredBy')}
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-80 hover:opacity-100 transition-opacity">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
                aria-label={`Visit ${sponsor.name} website`}
              >
                <div className="h-12 w-auto flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      height="48"
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xl font-bold text-slate-400 group-hover:text-indigo-500 transition-colors">
                      {sponsor.name}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 dark:border-white/5 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-slate-500 dark:text-slate-400 text-center md:text-left">
            <p>© {new Date().getFullYear()} X Minecraft Launcher. {t('footer.allRightsReserved')}.</p>
          </div>

          <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400">
             <div className="flex items-center gap-1.5">
               <span>{t('footer.madeWith')}</span>
               <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
               <span>{t('footer.openSource')}</span>
             </div>

             <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />

             <div className="flex gap-4">
                <span>{t('footer.launcherBy')} <span className="font-medium text-slate-700 dark:text-slate-200">CIO10</span></span>
                <span>{t('footer.websiteBy')} <span className="font-medium text-slate-700 dark:text-slate-200">Baneronetwo</span></span>
             </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
