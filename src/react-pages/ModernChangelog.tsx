import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Tag, GithubLogo, DownloadSimple, CaretDown, CaretUp,
  ArrowSquareOut, MagnifyingGlass, Rocket, Copy, Check, Info, Sparkle, FunnelSimple,
  Clock, ArrowUp, Package, Lightning
} from '@phosphor-icons/react';
import { PageTransition } from '@/components/PageTransition';
import { useTranslation } from '@/hooks/useTranslation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index < 5 ? index * 0.05 : 0 }}
      className="group relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" style={{ left: '23px' }} />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 z-10 hidden md:flex items-center justify-center">
        <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
          ${isStable
            ? 'bg-green-500 shadow-lg shadow-green-500/30'
            : 'bg-amber-500 shadow-lg shadow-amber-500/30'
          }
          ${isFirst ? 'scale-110 ring-4 ring-primary/20' : ''}
        `}>
          {isFirst && (
            <div className="absolute inset-0 rounded-2xl animate-ping bg-primary/20" />
          )}
          {isStable ? (
            <Rocket className="w-5 h-5 text-white" />
          ) : (
            <Lightning className="w-5 h-5 text-white" />
          )}
        </div>
      </div>

      {/* Card */}
      <div className="md:ml-20">
        <Card 
          className={`relative overflow-hidden transition-all duration-300 cursor-pointer
            bg-card border-border
            hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5
            ${isExpanded ? 'ring-2 ring-primary/20' : ''}
            ${isFirst ? 'ring-2 ring-primary/30 shadow-xl shadow-primary/10' : ''}
          `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Latest badge */}
          {isFirst && (
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-bl-xl">
              LATEST
            </div>
          )}

          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative p-5 md:p-6">
            {/* Header - Always visible */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Title and badges row */}
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground truncate">
                    {release.name || release.tag_name}
                  </h2>
                  {isStable ? (
                    <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 px-2 py-0.5">
                      <Check className="w-3 h-3 mr-1" />
                      Stable
                    </Badge>
                  ) : (
                    <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 px-2 py-0.5">
                      <Lightning className="w-3 h-3 mr-1" />
                      Pre-release
                    </Badge>
                  )}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {formatRelativeTime(release.published_at)}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs bg-muted px-2 py-0.5 rounded-md">
                    <Tag className="w-3 h-3" />
                    {release.tag_name}
                  </span>
                  {downloads > 0 && (
                    <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
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
                  className="h-9 w-9 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10"
                  title="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(release.html_url, '_blank')}
                  className="h-9 w-9 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10"
                >
                  <GithubLogo className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-9 w-9 rounded-xl transition-all ${isExpanded ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}
                >
                  <CaretDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
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
                  <div className="pt-5 mt-5 border-t border-border">
                    {/* Quick download section */}
                    {release.assets.length > 0 && (
                      <div className="mb-5 p-4 bg-muted rounded-xl">
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Package className="w-4 h-4" />
                          Quick Download
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {release.assets.slice(0, 4).map((asset, i) => (
                            <a
                              key={i}
                              href={asset.browser_download_url}
                              onClick={e => e.stopPropagation()}
                              className="inline-flex items-center gap-2 px-3 py-1.5 bg-card rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors border border-border"
                            >
                              <DownloadSimple className="w-3.5 h-3.5" />
                              {asset.name.length > 30 ? asset.name.slice(0, 27) + '...' : asset.name}
                            </a>
                          ))}
                          {release.assets.length > 4 && (
                            <span className="text-xs text-muted-foreground self-center">+{release.assets.length - 4} more</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Changelog content */}
                    <div className="prose-sm">
                      <MarkdownRenderer content={cleanBody || '*No changelog provided*'} />
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
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-card text-primary border border-border shadow-sm">
                <Sparkle className="w-3.5 h-3.5 mr-2 fill-current" />
                <span>What's New</span>
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
                {t('changelog.title') || "Changelog"}
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('changelog.subtitle') || "Track every update, improvement, and fix. Click on any release to see the full details."}
              </p>
            </motion.div>
          </div>

          {/* Controls Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-10"
          >
            <div suppressHydrationWarning className="flex flex-col sm:flex-row gap-3 p-3 bg-card rounded-2xl border border-border shadow-lg">
              {/* Search */}
              <div className="relative flex-1 group">
                <MagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Search releases..."
                  className="w-full bg-background border border-border rounded-xl pl-10 h-11 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-muted-foreground text-foreground"
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
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      filter === f.key
                        ? 'bg-primary text-primary-foreground shadow-md'
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
              <div className="text-center py-20">
                <Info className="w-16 h-16 mx-auto mb-6 text-red-400" />
                <p className="text-red-500 mb-4">Failed to load releases</p>
                <Button variant="outline" onClick={() => window.location.reload()}>Retry</Button>
              </div>
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
                      className="text-center py-20"
                    >
                      <Info className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">No releases found</h3>
                      <p className="text-muted-foreground">Try adjusting your filters or search query</p>
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
              className="fixed bottom-8 right-8 p-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-xl shadow-primary/30 transition-colors z-50"
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
