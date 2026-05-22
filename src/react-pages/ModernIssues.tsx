import React, { useState, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { PageTransition } from '@/components/PageTransition';
import { useTranslation } from '@/hooks/useTranslation';
import { useGitHubApi } from '@/hooks/useGitHubApi';
import { Virtuoso } from 'react-virtuoso';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {
  MagnifyingGlass,
  GithubLogo,
  ArrowSquareOut,
  ChatCircle,
  Calendar,
  User,
  Warning,
  CheckCircle,
  Plus,
  Bug,
  Lightbulb,
  Lightning,
  GitBranch,
  Eye,
  ArrowUpRight,
  FunnelSimple,
  CaretDown,
  SquaresFour,
  List as ListIcon
} from '@phosphor-icons/react';
import { AppShell } from '@/components/AppShell';

// Memoized Components for Performance

const StateIcon = memo(({ state }: { state: string }) => (
  state === 'open' ?
    <Warning className="w-4 h-4 text-emerald-500" /> :
    <CheckCircle className="w-4 h-4 text-violet-500" />
));

const IssueTypeIcon = memo(({ labels }: { labels: any[] }) => {
  const hasLabel = (name: string) => labels.some(label => 
    label.name.toLowerCase().includes(name)
  );
  
  if (hasLabel('bug')) return <Bug className="w-4 h-4 text-red-500" />;
  if (hasLabel('enhancement') || hasLabel('feature')) return <Lightbulb className="w-4 h-4 text-amber-500" />;
  if (hasLabel('performance')) return <Lightning className="w-4 h-4 text-blue-500" />;
  return <GitBranch className="w-4 h-4 text-slate-500" />;
});

const MarkdownContent = memo(({ content }: { content: string }) => {
  if (!content) return null;
  
  return (
    <div className="prose prose-invert prose-sm max-w-none text-slate-300">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({node, ...props}) => <a {...props} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" />,
          img: ({node, ...props}) => <img {...props} className="max-w-full rounded-lg my-2" loading="lazy" />,
          pre: ({node, ...props}) => <pre {...props} className="bg-slate-900/50 p-3 rounded-lg overflow-x-auto" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
});

const StatsDashboard = memo(({ stats }: { stats: any }) => {
  const { t } = useTranslation();
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 rounded-lg">
            <Warning className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{t('issues.openIssues')}</p>
            <p className="text-2xl font-bold text-white">{stats.openIssues}</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-violet-500/10 border border-violet-500/20 p-4 rounded-xl flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-violet-500/20 rounded-lg">
            <CheckCircle className="w-5 h-5 text-violet-500" />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{t('issues.closedIssues')}</p>
            <p className="text-2xl font-bold text-white">{stats.closedIssues}</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <SquaresFour className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{t('issues.allIssues')}</p>
            <p className="text-2xl font-bold text-white">{stats.openIssues + stats.closedIssues}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

const IssueCard = memo(({ issue, expanded, onToggleExpand, t }: any) => {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 bg-slate-800/40 border border-slate-700/50 hover:border-violet-500/30 hover:bg-slate-700/40 transition-all duration-300 rounded-xl overflow-hidden group"
    >
      <div className="p-4 md:p-5">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <StateIcon state={issue.state} />
                <span className="text-slate-400 text-xs">#{issue.number}</span>
                <span className="text-slate-500 text-xs">•</span>
                <span className="text-slate-400 text-xs">{new Date(issue.created_at).toLocaleDateString()}</span>
              </div>
              <h3 className="font-semibold text-white text-lg leading-tight group-hover:text-violet-300 transition-colors mb-2">
                {issue.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                <IssueTypeIcon labels={issue.labels} />
                {issue.labels.slice(0, 4).map((label: any) => (
                  <Badge
                    key={label.id}
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0.5 h-5"
                    style={{
                      backgroundColor: `#${label.color}15`,
                      borderColor: `#${label.color}40`,
                      color: `#${label.color}`,
                      borderWidth: '1px'
                    }}
                  >
                    {label.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-2 shrink-0">
              <Button
                size="sm"
                variant="outline"
                className="h-8 w-8 p-0 border-slate-700 hover:bg-slate-700 text-slate-300"
                onClick={() => window.open(issue.html_url, '_blank')}
                title={t('actions.goToIssue')}
              >
                <ArrowSquareOut className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant={expanded ? "secondary" : "ghost"}
                className={`h-8 w-8 p-0 ${expanded ? 'bg-violet-500/20 text-violet-300' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                onClick={onToggleExpand}
                title={expanded ? t('actions.hide') : t('actions.preview')}
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 border-t border-slate-800/50 pt-3 mt-1">
             <div className="flex items-center gap-1.5">
              <img src={issue.user.avatar_url} alt="" className="w-4 h-4 rounded-full" />
              <span className="text-slate-400">{issue.user.login}</span>
             </div>
             <div className="flex items-center gap-1.5">
               <ChatCircle className="w-3.5 h-3.5" />
               <span>{issue.comments}</span>
             </div>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-slate-700/50">
                <MarkdownContent content={issue.body} />
                <div className="mt-4 flex justify-end">
                   <Button 
                      size="sm" 
                      className="bg-violet-600 hover:bg-violet-700 text-white"
                      onClick={() => window.open(issue.html_url, '_blank')}
                    >
                      {t('issues.viewOnGitHub')} <ArrowUpRight className="ml-2 w-3 h-3" />
                   </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

function ModernIssuesContent() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  const [stateFilter, setStateFilter] = useState<'all' | 'open' | 'closed'>('all');
  const [sortBy, setSortBy] = useState('created');
  const [expandedIssueId, setExpandedIssueId] = useState<number | null>(null);
  
  const { issues, stats, loading, error } = useGitHubApi();

  const filteredIssues = useMemo(() => {
    let result = issues?.filter((issue: any) => !issue.pull_request) || [];
    
    // 1. Filter by State
    if (stateFilter !== 'all') {
      result = result.filter((issue: any) => issue.state === stateFilter);
    }

    // 2. Filter by Search
    if (debouncedSearch) {
      const lowerSearch = debouncedSearch.toLowerCase();
      result = result.filter((issue: any) => 
        issue.title.toLowerCase().includes(lowerSearch) ||
        issue.body?.toLowerCase().includes(lowerSearch) ||
        issue.user.login.toLowerCase().includes(lowerSearch)
      );
    }

    // 3. Sort
    return result.sort((a, b) => {
      if (sortBy === 'updated') return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      if (sortBy === 'comments') return b.comments - a.comments;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  }, [issues, stateFilter, debouncedSearch, sortBy]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-500/10 rounded-2xl border border-red-500/20">
          <Warning className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">{t('errors.issuesLoad')}</h2>
          <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">
            {t('actions.retry')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-950 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-2"
              >
                <div className="p-2 bg-violet-500/20 rounded-lg border border-violet-500/30">
                  <Bug className="w-6 h-6 text-violet-400" />
                </div>
                <h1 className="text-3xl font-bold text-white tracking-tight">{t('issues.title')}</h1>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-slate-400 max-w-xl"
              >
                {t('issues.subtitle')}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Button 
                onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher/issues', '_blank')}
                variant="outline"
                className="border-slate-700 hover:bg-slate-800 text-slate-300"
              >
                <GithubLogo className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher/issues/new', '_blank')}
                className="bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-900/20"
              >
                <Plus className="w-4 h-4 mr-2" />
                {t('issues.reportNewIssue')}
              </Button>
            </motion.div>
          </div>

          <StatsDashboard stats={stats} />

          {/* Filters & Search - Glassmorphic Bar */}
          <div className="sticky top-4 z-30 mb-8">
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row gap-2">
              <div className="relative flex-1">
                <MagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  placeholder={t('issues.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-transparent focus:bg-slate-800 transition-all text-white h-10 rounded-xl"
                />
              </div>
              
              <div className="flex gap-2 p-1 overflow-x-auto">
                <div className="flex bg-slate-800/50 rounded-xl p-1 shrink-0">
                  <button
                    onClick={() => setStateFilter('all')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${stateFilter === 'all' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    {t('issues.allIssues')}
                  </button>
                  <button
                    onClick={() => setStateFilter('open')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${stateFilter === 'open' ? 'bg-emerald-500/20 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-emerald-400'}`}
                  >
                    <Warning className="w-3.5 h-3.5" />
                    {t('issues.openFilter')}
                  </button>
                  <button
                    onClick={() => setStateFilter('closed')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${stateFilter === 'closed' ? 'bg-violet-500/20 text-violet-400 shadow-sm' : 'text-slate-400 hover:text-violet-400'}`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    {t('issues.closedFilter')}
                  </button>
                </div>
                
                <div className="h-full w-px bg-slate-700/50 mx-1 shrink-0" />
                
                <div className="flex bg-slate-800/50 rounded-xl p-1 shrink-0">
                   <button
                    onClick={() => setSortBy(sortBy === 'created' ? 'updated' : 'created')}
                    className="px-3 py-1.5 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
                    title={t('issues.sortBy')}
                   >
                     {sortBy === 'created' ? <Calendar className="w-4 h-4" /> : <CaretDown className="w-4 h-4" />}
                   </button>
                </div>
              </div>
            </div>
          </div>

          {/* Virtualized Issue List */}
          {loading ? (
             <div className="flex flex-col items-center justify-center py-20">
               <div className="w-12 h-12 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin mb-4" />
               <p className="text-slate-400 font-medium">{t('issues.loadingIssues')}</p>
             </div>
          ) : filteredIssues.length > 0 ? (
            <div className="h-[800px] w-full"> 
               <Virtuoso
                 useWindowScroll
                 data={filteredIssues}
                 itemContent={(index, issue) => (
                   <div className="pb-1"> {/* Padding for gap */}
                      <IssueCard 
                        issue={issue} 
                        expanded={expandedIssueId === issue.id}
                        onToggleExpand={() => setExpandedIssueId(expandedIssueId === issue.id ? null : issue.id)}
                        t={t}
                      />
                   </div>
                 )}
                 components={{
                   Footer: () => <div className="h-20" /> // Bottom spacer
                 }}
               />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-900/30 rounded-3xl border border-slate-800 border-dashed">
               <div className="p-4 bg-slate-800/50 rounded-full mb-4">
                 <MagnifyingGlass className="w-8 h-8 text-slate-500" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">{t('issues.noIssuesFound')}</h3>
               <p className="text-slate-400 max-w-sm">{t('issues.tryAdjusting')}</p>
               <Button 
                variant="link" 
                onClick={() => { setSearchTerm(''); setStateFilter('all'); }} 
                className="mt-2 text-violet-400"
               >
                 {t('common.clearFilters')}
               </Button>
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}

export default function ModernIssues() {
  return (
    <AppShell>
      <ModernIssuesContent />
    </AppShell>
  );
}