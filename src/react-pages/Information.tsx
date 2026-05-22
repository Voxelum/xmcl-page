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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-card border border-border text-foreground hover:bg-[#ea4c3c] hover:border-[#ea4c3c] hover:text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all -translate-x-1/2"
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
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-border hover:border-[#ea4c3c] transition-all duration-300 hover:scale-110">
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
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-card border border-border text-foreground hover:bg-[#ea4c3c] hover:border-[#ea4c3c] hover:text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-x-1/2"
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
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl relative z-10">
          
          {/* Hero Section */}
          <motion.header 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="relative inline-block mb-8">
              <img
                src="https://github.com/Voxelum/x-minecraft-launcher/raw/master/xmcl-electron-app/icons/dark@256x256.png"
                alt="XMCL Logo"
                className="w-28 h-28 md:w-36 md:h-36 rounded-3xl shadow-2xl relative z-10 border-4 border-border"
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground">
              X Minecraft Launcher
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('information.launcher_created_by')}{' '}
              <a href="https://github.com/ci010" target="_blank" rel="noopener noreferrer" className="text-[#ea4c3c] hover:text-[#ea4c3c]/85 font-semibold">
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
                <div className="flex items-center gap-2 px-5 py-3 bg-card rounded-2xl border border-border">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-2xl font-bold text-foreground">{(repoStats.stargazers_count / 1000).toFixed(1)}K</span>
                  <span className="text-sm text-muted-foreground">Stars</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-card rounded-2xl border border-border">
                  <Users className="w-5 h-5 text-[#ea4c3c]" />
                  <span className="text-2xl font-bold text-foreground">{contributors.length}+</span>
                  <span className="text-sm text-muted-foreground">Contributors</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-card rounded-2xl border border-border">
                  <Code className="w-5 h-5 text-green-500" />
                  <span className="text-2xl font-bold text-foreground">{repoStats.forks_count}</span>
                  <span className="text-sm text-muted-foreground">Forks</span>
                </div>
              </motion.div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://xmcl.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ea4c3c] text-white rounded-2xl font-bold text-lg hover:bg-[#d63e2c] transition-all hover:scale-105"
              >
                <DownloadSimple className="w-5 h-5" />
                Download
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Voxelum/x-minecraft-launcher"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground rounded-2xl font-bold text-lg hover:bg-accent transition-all border border-border"
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Lightning className="w-7 h-7 text-[#ea4c3c]" />
              Quick Install
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#ea4c3c]/10">
                    <Code className="w-5 h-5 text-[#ea4c3c]" />
                  </div>
                  <span className="font-bold text-foreground">Windows (Winget)</span>
                </div>
                <div className="relative">
                  <div className="bg-background border border-border p-3 rounded-xl font-mono text-sm text-green-600 dark:text-green-400 pr-12 overflow-x-auto">
                    <code>{wingetCommand}</code>
                  </div>
                  <CopyButton text={wingetCommand} />
                </div>
              </div>
              <div className="p-5 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#ea4c3c]/10">
                    <Cpu className="w-5 h-5 text-[#ea4c3c]" />
                  </div>
                  <span className="font-bold text-foreground">macOS (Homebrew)</span>
                </div>
                <div className="relative">
                  <div className="bg-background border border-border p-3 rounded-xl font-mono text-sm text-green-600 dark:text-green-400 pr-12 overflow-x-auto">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Sparkle className="w-7 h-7 text-[#ea4c3c]" />
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
                  className={`group p-5 bg-card rounded-2xl border border-border hover:border-[#ea4c3c] transition-all duration-300
                    ${feature.size === 'large' ? 'sm:col-span-2' : ''}
                  `}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ea4c3c]/10 p-2.5 mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-full h-full text-[#ea4c3c]" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Users className="w-7 h-7 text-[#ea4c3c]" />
              {t('information.contributors.title')}
            </h2>
            <div className="p-6 bg-card rounded-2xl border border-border">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Heart className="w-7 h-7 text-[#ea4c3c]" />
              {t('information.sponsors.title')}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-[#ea4c3c] transition-all group"
                >
                  <img src={sponsor.logo} alt={sponsor.name} className="w-12 h-12 rounded-xl group-hover:scale-110 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground truncate">{sponsor.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{sponsor.desc}</p>
                  </div>
                  <ArrowSquareOut className="w-4 h-4 text-[#ea4c3c] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
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
