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
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-500/30 hidden md:block" style={{ left: '23px' }} />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 z-10 hidden md:flex items-center justify-center">
        <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
          ${isStable
            ? 'bg-green-500 shadow-lg shadow-green-500/30'
            : 'bg-amber-500 shadow-lg shadow-amber-500/30'
          }
          ${isFirst ? 'scale-110 ring-4 ring-white/20' : ''}
        `}>
          {isFirst && (
            <div className="absolute inset-0 rounded-2xl animate-ping bg-white/20" />
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
            bg-white/80 dark:bg-white/[0.03]
            border-slate-200/50 dark:border-white/10
            hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5
            ${isExpanded ? 'ring-2 ring-indigo-500/20' : ''}
            ${isFirst ? 'ring-2 ring-indigo-500/30 shadow-xl shadow-indigo-500/10' : ''}
          `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Latest badge */}
          {isFirst && (
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-bl-xl">
              LATEST
            </div>
          )}

          {/* Glow effect */}
          <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative p-5 md:p-6">
            {/* Header - Always visible */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Title and badges row */}
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white truncate">
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
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {formatRelativeTime(release.published_at)}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md">
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
                  className="h-9 w-9 rounded-xl text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/20"
                  title="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(release.html_url, '_blank')}
                  className="h-9 w-9 rounded-xl text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/20"
                >
                  <GithubLogo className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-9 w-9 rounded-xl transition-all ${isExpanded ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600' : 'text-slate-400'}`}
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
                  <div className="pt-5 mt-5 border-t border-slate-200 dark:border-white/10">
                    {/* Quick download section */}
                    {release.assets.length > 0 && (
                      <div className="mb-5 p-4 bg-slate-50 dark:bg-white/5 rounded-xl">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                          <Package className="w-4 h-4" />
                          Quick Download
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {release.assets.slice(0, 4).map((asset, i) => (
                            <a
                              key={i}
                              href={asset.browser_download_url}
                              onClick={e => e.stopPropagation()}
                              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-white/10 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-slate-200 dark:border-white/10"
                            >
                              <DownloadSimple className="w-3.5 h-3.5" />
                              {asset.name.length > 30 ? asset.name.slice(0, 27) + '...' : asset.name}
                            </a>
                          ))}
                          {release.assets.length > 4 && (
                            <span className="text-xs text-slate-400 self-center">+{release.assets.length - 4} more</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Changelog content */}
                    <div className={`prose dark:prose-invert prose-sm max-w-none
                      prose-headings:text-indigo-900 dark:prose-headings:text-indigo-100 prose-headings:font-bold
                      prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
                      prose-ul:list-disc prose-ul:pl-5
                      prose-li:text-slate-600 dark:prose-li:text-slate-300
                      prose-code:bg-slate-100 dark:prose-code:bg-black/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-indigo-600 dark:prose-code:text-indigo-300 prose-code:font-mono prose-code:text-[0.85em] prose-code:before:content-none prose-code:after:content-none
                      text-slate-600 dark:text-slate-300 leading-relaxed
                    `}>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {cleanBody || '*No changelog provided*'}
                      </ReactMarkdown>
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
        <div className="hidden md:block w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 animate-pulse flex-shrink-0" />
        <Card className="flex-1 p-6 bg-white/50 dark:bg-white/5 border-transparent">
          <div className="h-7 w-2/3 bg-slate-200 dark:bg-slate-800 rounded animate-pulse mb-4" />
          <div className="flex gap-4">
            <div className="h-5 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
            <div className="h-5 w-20 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
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
      <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0b] text-foreground transition-colors duration-500 overflow-x-hidden">
        
        {/* Ambient Background - decorative only, no blur */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full" />
          <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full" />
          <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] bg-green-500/5 dark:bg-green-500/10 rounded-full" />
        </div>

        <main className="container mx-auto px-4 pb-32 relative z-10">
          
          {/* Header Section */}
          <div className="pt-24 pb-8 md:pt-32 md:pb-12 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-white/10 shadow-sm">
                <Sparkle className="w-3.5 h-3.5 mr-2 fill-current" />
                <span>What's New</span>
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">
                {t('changelog.title') || "Changelog"}
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
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
            <div suppressHydrationWarning className="flex flex-col sm:flex-row gap-3 p-3 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-none">
              {/* Search */}
              <div className="relative flex-1 group">
                <MagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search releases..."
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-10 h-11 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Filter buttons */}
              <div className="flex gap-1 p-1 bg-slate-100 dark:bg-white/5 rounded-xl">
                {([
                  { key: 'all', label: 'All', icon: null },
                  { key: 'stable', label: 'Stable', icon: Check },
                ] as const).map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      filter === f.key
                        ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-md'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10'
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
                      <Info className="w-16 h-16 mx-auto mb-6 text-slate-300 dark:text-slate-700" />
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No releases found</h3>
                      <p className="text-slate-500 dark:text-slate-400">Try adjusting your filters or search query</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Load More trigger */}
                <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
                  {isFetchingNextPage && (
                    <div className="flex items-center gap-3 text-indigo-500 font-medium">
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
              className="fixed bottom-8 right-8 p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-xl shadow-indigo-500/30 transition-colors z-50"
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
