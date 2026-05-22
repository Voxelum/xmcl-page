import React, { useState, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useQuery } from '@tanstack/react-query';
import {
  DownloadSimple, Globe, Shield, Users, Package, HardDrive,
  UserCheck, Code, Sparkle, Star, CaretRight, Lightning, ShieldCheck,
  Cpu, Database, GlobeSimple, Heart, GithubLogo, ArrowSquareOut,
  Copy, Check, CaretLeft, ArrowRight
} from '@phosphor-icons/react';
import { AppShell } from '@/components/AppShell';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Contributor {
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
}

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
    </button>
  );
};

// Feature card data with different sizes for bento grid
const features = [
  {
    icon: DownloadSimple,
    title: 'Smart Downloads',
    desc: 'Auto-download Minecraft, Forge, Fabric, Quilt, OptiFine, and JVM from official or third-party mirrors.',
    gradient: 'bg-blue-500',
    size: 'large' // spans 2 columns
  },
  {
    icon: HardDrive,
    title: 'Disk Optimization',
    desc: 'Hard/symbolic links keep your disk usage minimal. No duplicate mods!',
    gradient: 'bg-green-500',
    size: 'normal'
  },
  {
    icon: GlobeSimple,
    title: 'Cross Platform',
    desc: 'Windows 10/11, macOS, and Linux support.',
    gradient: 'bg-purple-500',
    size: 'normal'
  },
  {
    icon: Users,
    title: 'Multi-Account',
    desc: 'Microsoft, Mojang, ely.by, and littleskin.cn support.',
    gradient: 'bg-amber-500',
    size: 'normal'
  },
  {
    icon: Globe,
    title: 'P2P Multiplayer',
    desc: 'Play LAN games with friends anywhere in the world!',
    gradient: 'bg-red-500',
    size: 'large'
  },
  {
    icon: ShieldCheck,
    title: 'Code Signed',
    desc: 'APPX installer with no SmartScreen warnings.',
    gradient: 'bg-indigo-500',
    size: 'normal'
  },
  {
    icon: Database,
    title: 'Instance Manager',
    desc: 'Unlimited instances with different configs.',
    gradient: 'bg-pink-500',
    size: 'normal'
  },
  {
    icon: Heart,
    title: 'Open Source',
    desc: 'Community driven with active development.',
    gradient: 'bg-rose-500',
    size: 'normal'
  }
];

const ContributorCarousel = ({ contributors }: { contributors: Contributor[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-slate-900/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2"
      >
        <CaretLeft className="w-5 h-5" />
      </button>
      
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-2 -mx-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {contributors.map((contributor) => (
          <a
            key={contributor.login}
            href={contributor.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 group/item"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-transparent hover:border-indigo-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/20">
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end justify-center pb-2">
                <span className="text-xs text-white font-medium truncate px-1">{contributor.login}</span>
              </div>
            </div>
            <div className="mt-2 text-center">
              <span className="text-xs text-slate-500 dark:text-slate-400">{contributor.contributions}</span>
            </div>
          </a>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-slate-900/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-x-1/2"
      >
        <CaretRight className="w-5 h-5" />
      </button>
    </div>
  );
};

const InformationContent: React.FC = () => {
  const { t } = useTranslation();

  const { data: contributors = [] } = useQuery({
    queryKey: ['contributors'],
    queryFn: async () => {
      const res = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher/contributors?per_page=30');
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
    staleTime: 10 * 60 * 1000,
  });

  const { data: repoStats } = useQuery({
    queryKey: ['repo-stats'],
    queryFn: async () => {
      const res = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher');
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
    staleTime: 10 * 60 * 1000,
  });

  const wingetCommand = 'winget install CI010.XMinecraftLauncher';
  const brewCommand = 'brew install --cask --no-quarantine voxelum/xmcl';

  const sponsors = [
    { name: 'SignPath', logo: 'https://avatars.githubusercontent.com/u/34448643', url: 'https://signpath.io/', desc: 'Free code signing' },
    { name: 'Deno Deploy', logo: 'https://avatars.githubusercontent.com/u/42048915', url: 'https://deno.com/deploy', desc: 'Serverless hosting' },
    { name: 'EdgeOne', logo: 'https://edgeone.ai/logo.png', url: 'https://edgeone.ai/', desc: 'CDN & Security' },
  ];

  return (
    <>
      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "X Minecraft Launcher",
          "applicationCategory": "GameApplication",
          "operatingSystem": "Windows, macOS, Linux",
          "offers": { "@type": "Offer", "price": "0" }
        })
      }} />
      
      <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0b] transition-colors duration-300 relative overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl relative z-10">
          
          {/* Hero Section */}
          <motion.header 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-indigo-500 rounded-3xl blur-3xl opacity-40 scale-150" />
              <img
                src="https://github.com/Voxelum/x-minecraft-launcher/raw/master/xmcl-electron-app/icons/dark@256x256.png"
                alt="XMCL Logo"
                className="w-28 h-28 md:w-36 md:h-36 rounded-3xl shadow-2xl relative z-10 border-4 border-white/20"
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 dark:text-white">
              X Minecraft Launcher
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              {t('information.launcher_created_by')}{' '}
              <a href="https://github.com/ci010" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 font-semibold">
                CI010
              </a>
            </p>

            {/* Stats */}
            {repoStats && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-10"
              >
                <div className="flex items-center gap-2 px-5 py-3 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/10">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{(repoStats.stargazers_count / 1000).toFixed(1)}K</span>
                  <span className="text-sm text-slate-500">Stars</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/10">
                  <Users className="w-5 h-5 text-indigo-500" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{contributors.length}+</span>
                  <span className="text-sm text-slate-500">Contributors</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/10">
                  <Code className="w-5 h-5 text-green-500" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{repoStats.forks_count}</span>
                  <span className="text-sm text-slate-500">Forks</span>
                </div>
              </motion.div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://xmcl.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/25 hover:scale-105"
              >
                <DownloadSimple className="w-5 h-5" />
                Download
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Voxelum/x-minecraft-launcher"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-white/10 text-slate-900 dark:text-white rounded-2xl font-bold text-lg hover:bg-white dark:hover:bg-white/20 transition-all border border-slate-200 dark:border-white/10"
              >
                <GithubLogo className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </motion.header>

          {/* Quick Install */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <Lightning className="w-7 h-7 text-yellow-500" />
              Quick Install
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Code className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">Windows (Winget)</span>
                </div>
                <div className="relative">
                  <div className="bg-slate-900 p-3 rounded-xl font-mono text-sm text-green-400 pr-12 overflow-x-auto">
                    <code>{wingetCommand}</code>
                  </div>
                  <CopyButton text={wingetCommand} />
                </div>
              </div>
              <div className="p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Cpu className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">macOS (Homebrew)</span>
                </div>
                <div className="relative">
                  <div className="bg-slate-900 p-3 rounded-xl font-mono text-sm text-green-400 pr-12 overflow-x-auto">
                    <code>{brewCommand}</code>
                  </div>
                  <CopyButton text={brewCommand} />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Features Bento Grid */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <Sparkle className="w-7 h-7 text-purple-500" />
              {t('information.features.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5
                    ${feature.size === 'large' ? 'sm:col-span-2' : ''}
                  `}
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contributors */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <Users className="w-7 h-7 text-indigo-500" />
              {t('information.contributors.title')}
            </h2>
            <div className="p-6 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/10">
              <ContributorCarousel contributors={contributors} />
            </div>
          </motion.section>

          {/* Sponsors */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <Heart className="w-7 h-7 text-pink-500" />
              {t('information.sponsors.title')}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/10 hover:border-indigo-500/30 transition-all hover:shadow-xl group"
                >
                  <img src={sponsor.logo} alt={sponsor.name} className="w-12 h-12 rounded-xl group-hover:scale-110 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 dark:text-white truncate">{sponsor.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{sponsor.desc}</p>
                  </div>
                  <ArrowSquareOut className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default function Information() {
  return (
    <AppShell>
      <InformationContent />
    </AppShell>
  );
}
