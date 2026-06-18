import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Tag, GithubLogo, DownloadSimple, CaretDown, CaretUp,
  ArrowSquareOut, MagnifyingGlass, Rocket, Copy, Check, Info, Sparkle, FunnelSimple,
  Clock, ArrowUp, Package, Lightning, Laptop, AppleLogo, MonitorPlay, CheckCircle
} from '@phosphor-icons/react';
import { PageTransition } from '@/components/PageTransition';
import { useTranslation } from '@/hooks/useTranslation';
import { AppShell } from '@/components/AppShell';
import { motion, AnimatePresence } from 'framer-motion';
import MarkdownRenderer from '@/components/MarkdownRenderer';

// --- Types ---
interface Asset {
  name: string;
  download_count: number;
  browser_download_url: string;
}

interface Release {
  id: number;
  name: string;
  tag_name: string;
  published_at: string;
  html_url: string;
  prerelease: boolean;
  body: string;
  assets: Asset[];
}

type FilterType = 'all' | 'stable';

// --- Helpers ---
const stripDownloadsSection = (md: string) => {
  if (!md) return '';
  let clean = md.replace(/(^|\n)#{1,6}\s*Downloads[\s\S]*/i, '');
  clean = clean.replace(/(\*\*Full Changelog\*\*.*)/g, '');
  return clean.trim();
};

const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
};

const formatRelativeTime = (iso: string) => {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
};

const formatCount = (n: number) => (n >= 1_000_000 ? `${(n/1_000_000).toFixed(1)}M` : n >= 1_000 ? `${(n/1_000).toFixed(1)}K` : `${n}`);

const getAssetIcon = (name: string) => {
  const lowercaseName = name.toLowerCase();
  if (lowercaseName.endsWith('.exe') || lowercaseName.includes('windows') || lowercaseName.includes('win')) {
    return <Laptop className="w-4 h-4 text-blue-500" />;
  }
  if (lowercaseName.endsWith('.dmg') || lowercaseName.endsWith('.pkg') || lowercaseName.includes('mac') || lowercaseName.includes('darwin')) {
    return <AppleLogo className="w-4 h-4 text-slate-500" />;
  }
  if (lowercaseName.endsWith('.deb') || lowercaseName.endsWith('.rpm') || lowercaseName.endsWith('.appimage') || lowercaseName.includes('linux')) {
    return <MonitorPlay className="w-4 h-4 text-orange-500" />;
  }
  return <Package className="w-4 h-4 text-muted-foreground" />;
};

// --- Components ---

const ReleaseCard = React.memo(({ release, index, isFirst }: { release: Release; index: number; isFirst: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const rawBody = release.body || '';
  const cleanBody = stripDownloadsSection(rawBody);
  const downloads = release.assets?.reduce((s, a) => s + (a.download_count || 0), 0) || 0;

  const handleCopy = () => {
    navigator.clipboard.writeText(release.html_url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isStable = !release.prerelease;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index < 5 ? index * 0.05 : 0 }}
      className="group relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" style={{ left: '23px' }} />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 z-10 hidden md:flex items-center justify-center">
        <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border
          ${isStable
            ? 'bg-green-500/10 border-green-500/30 text-green-500'
            : 'bg-amber-500/10 border-amber-500/30 text-amber-500'
          }
          ${isFirst ? 'scale-110 ring-4 ring-primary/10 border-primary/45' : ''}
        `}>
          {isStable ? (
            <Rocket className="w-5 h-5" />
          ) : (
            <Lightning className="w-5 h-5" />
          )}
        </div>
      </div>

      {/* Card */}
      <div className="md:ml-20">
        <Card 
          className={`relative overflow-hidden transition-all duration-300 cursor-pointer
            bg-card border-border/80 hover:border-primary/45
            ${isStable ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-amber-500'}
            ${isExpanded ? 'ring-2 ring-primary/10 shadow-md' : 'hover:shadow-md'}
            ${isFirst ? 'ring-2 ring-primary/20 shadow-lg shadow-primary/5' : ''}
          `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Latest badge */}
          {isFirst && (
            <div className="absolute top-0 right-0 px-3.5 py-1 bg-primary text-white text-[10px] font-bold tracking-wider rounded-bl-xl">
              LATEST RELEASE
            </div>
          )}

          <div className="relative p-5 md:p-6">
            {/* Header - Always visible */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Title and badges row */}
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {release.name || release.tag_name}
                  </h2>
                  {isStable ? (
                    <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 px-2.5 py-0.5 rounded-full font-semibold text-xs border-0">
                      Stable
                    </Badge>
                  ) : (
                    <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 px-2.5 py-0.5 rounded-full font-semibold text-xs border-0">
                      Pre-release
                    </Badge>
                  )}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-muted-foreground/75" />
                    {formatRelativeTime(release.published_at)}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs bg-muted border border-border px-2 py-0.5 rounded-md text-foreground/80">
                    <Tag className="w-3 h-3 text-muted-foreground/75" />
                    {release.tag_name}
                  </span>
                  {downloads > 0 && (
                    <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400 font-medium">
                      <DownloadSimple className="w-4 h-4" />
                      {formatCount(downloads)} downloads
                    </span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopy}
                  className="h-10 w-10 rounded-xl text-muted-foreground hover:text-primary hover:bg-muted border border-transparent hover:border-border transition-all"
                  title="Copy link"
                >
                  {copied ? <Check className="w-4.5 h-4.5 text-green-500" /> : <Copy className="w-4.5 h-4.5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(release.html_url, '_blank')}
                  className="h-10 w-10 rounded-xl text-muted-foreground hover:text-primary hover:bg-muted border border-transparent hover:border-border transition-all"
                  title="View on GitHub"
                >
                  <GithubLogo className="w-4.5 h-4.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 rounded-xl border border-transparent hover:border-border transition-all ${isExpanded ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}
                >
                  <CaretDown className={`w-4.5 h-4.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            </div>

            {/* Expandable content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 mt-6 border-t border-border/60">
                    {/* Changelog content */}
                    <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-bold">
                      <MarkdownRenderer content={cleanBody || '*No description provided for this release.*'} />
                    </div>

                    {/* View Release on GitHub button */}
                    <div className="mt-8 pt-6 border-t border-border/40 flex justify-center" onClick={e => e.stopPropagation()}>
                      <Button
                        onClick={() => window.open(release.html_url, '_blank')}
                        className="bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 px-6 py-2.5 rounded-xl flex items-center gap-2 border-0 font-semibold transition-all duration-200"
                      >
                        <GithubLogo className="w-5 h-5" />
                        <span>View Release on GitHub</span>
                        <ArrowSquareOut className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </div>
    </motion.div>
  );
});
ReleaseCard.displayName = 'ReleaseCard';

const LoadingState = () => (
  <div className="space-y-6 max-w-4xl mx-auto mt-8">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="flex gap-6">
        <div className="hidden md:block w-12 h-12 rounded-2xl bg-muted animate-pulse flex-shrink-0" />
        <Card className="flex-1 p-6 bg-card border border-border">
          <div className="h-7 w-2/3 bg-muted rounded animate-pulse mb-4" />
          <div className="flex gap-4">
            <div className="h-5 w-24 bg-muted rounded animate-pulse" />
            <div className="h-5 w-20 bg-muted rounded animate-pulse" />
          </div>
        </Card>
      </div>
    ))}
  </div>
);

// --- Main Page Component ---

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

const ModernChangelogContent: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['releases', filter, debouncedSearch],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await fetch(`https://api.github.com/repos/Voxelum/x-minecraft-launcher/releases?per_page=15&page=${pageParam}`);
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json() as Promise<Release[]>;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 15 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 10,
  });

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const releases = useMemo(() => {
    const all = data?.pages.flatMap(p => p) || [];
    return all.filter(r => {
      if (filter === 'stable' && r.prerelease) return false;

      if (debouncedSearch) {
        const q = debouncedSearch.toLowerCase();
        return r.name?.toLowerCase().includes(q) || r.tag_name.toLowerCase().includes(q) || r.body?.toLowerCase().includes(q);
      }
      return true;
    });
  }, [data, filter, debouncedSearch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <main className="container mx-auto px-4 pb-32 relative z-10">
          
          {/* Header Section */}
          <div className="pt-24 pb-8 md:pt-32 md:pb-12 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-card text-primary border border-border shadow-sm font-semibold">
                <Sparkle className="w-3.5 h-3.5 mr-2 fill-current" />
                <span>What's New</span>
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground tracking-tight">
                {t('changelog.title') || "Changelog"}
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('changelog.subtitle') || "Track every update, improvement, and fix. Click on any release to see the full details."}
              </p>
            </motion.div>
          </div>

          {/* Mini Dashboard Stats */}
          {releases.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
            >
              <div className="p-4 bg-card border border-border/80 rounded-2xl text-center shadow-sm">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Latest Version</span>
                <span className="text-lg font-extrabold text-foreground">{releases[0]?.tag_name || '...'}</span>
              </div>
              <div className="p-4 bg-card border border-border/80 rounded-2xl text-center shadow-sm">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Status</span>
                <span className="text-lg font-extrabold text-green-600 dark:text-green-400 flex items-center justify-center gap-1.5">
                  <CheckCircle className="w-5 h-5 fill-current" />
                  All Operational
                </span>
              </div>
              <div className="p-4 bg-card border border-border/80 rounded-2xl text-center shadow-sm col-span-2 sm:col-span-1">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Source Code</span>
                <a 
                  href="https://github.com/Voxelum/x-minecraft-launcher" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-extrabold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Voxelum/XMCL
                  <ArrowSquareOut className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

          {/* Controls Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-10"
          >
            <div suppressHydrationWarning className="flex flex-col sm:flex-row gap-3 p-3 bg-card rounded-2xl border border-border shadow-md">
              {/* Search */}
              <div className="relative flex-1 group">
                <MagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Search releases..."
                  className="w-full bg-background border border-border rounded-xl pl-10 h-11 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-muted-foreground text-foreground focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Filter buttons */}
              <div className="flex gap-1 p-1 bg-muted rounded-xl">
                {([
                  { key: 'all', label: 'All', icon: null },
                  { key: 'stable', label: 'Stable', icon: Check },
                ] as const).map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      filter === f.key
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-background'
                    }`}
                  >
                    {f.icon && <f.icon className="w-3.5 h-3.5" />}
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Releases List */}
          <div className="max-w-4xl mx-auto">
            {status === 'pending' ? (
              <LoadingState />
            ) : status === 'error' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-6 bg-card border border-border rounded-2xl max-w-2xl mx-auto shadow-xl"
              >
                <GithubLogo className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
                <h3 className="text-2xl font-bold text-foreground mb-3">GitHub API Rate Limit Exceeded</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  It seems you have visited our website too frequently, triggering the GitHub API rate limit. If you want to download launcher files or view updates, please check our official GitHub page!
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Button variant="outline" className="border-border hover:bg-muted text-foreground" onClick={() => window.location.reload()}>
                    Retry Loading
                  </Button>
                  <Button className="bg-primary hover:bg-primary/95 text-white shadow-md shadow-primary/20 border-0" onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher/releases', '_blank')}>
                    View on GitHub
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <AnimatePresence mode="popLayout">
                  {releases.length > 0 ? (
                    releases.map((release, index) => (
                      <ReleaseCard 
                        key={release.id} 
                        release={release} 
                        index={index} 
                        isFirst={index === 0 && filter === 'all' && !searchQuery}
                      />
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-20 bg-card border border-border rounded-2xl shadow-sm"
                    >
                      <Info className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-bold text-foreground mb-1">No releases found</h3>
                      <p className="text-sm text-muted-foreground">Try adjusting your filters or search query</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Load More trigger */}
                <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
                  {isFetchingNextPage && (
                    <div className="flex items-center gap-3 text-primary font-medium">
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Loading more...
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-4 bg-primary hover:bg-primary/90 text-white rounded-2xl shadow-lg transition-colors z-50 cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default function ModernChangelog() {
  return (
    <AppShell>
      <ModernChangelogContent />
    </AppShell>
  );
}
