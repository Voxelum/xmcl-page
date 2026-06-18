import React, { useState, memo } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import {
  DownloadSimple,
  ArrowSquareOut,
  GitBranch,
  Clock,
  CheckCircle,
  XCircle,
  WarningCircle,
  Package,
  Warning,
  Terminal,
  WarningOctagon,
  CaretDown,
  Sparkle,
  Lightning,
  MonitorPlay,
  AppleLogo,
  Laptop,
  LinuxLogo,
  User,
  GithubLogo
} from "@phosphor-icons/react";
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from '@/hooks/useTranslation';
import { DownloadArtifacts } from '@/components/testing/DownloadArtifacts';
import { AppShell } from '@/components/AppShell';
import { Badge } from '@/components/ui/badge';

const WindowsIcon = () => <Laptop className="w-5 h-5" />;
const MacOSIcon = () => <AppleLogo className="w-5 h-5" />;
const LinuxIcon = () => <LinuxLogo className="w-5 h-5" />;

const platforms = [
  { key: 'windows', label: 'Windows', icon: WindowsIcon, activeColor: 'bg-primary border-primary hover:bg-primary/95 text-white' },
  { key: 'macos', label: 'macOS', icon: MacOSIcon, activeColor: 'bg-foreground border-foreground text-background dark:text-background hover:bg-foreground/90' },
  { key: 'linux', label: 'Linux', icon: LinuxIcon, activeColor: 'bg-primary border-primary hover:bg-primary/95 text-white' },
];

const StatusBadge = memo(({ conclusion }: { conclusion: string }) => {
  switch (conclusion) {
    case 'success':
      return (
        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 px-2.5 py-0.5 text-xs font-semibold rounded-full gap-1">
          <CheckCircle className="w-3.5 h-3.5" />
          Success
        </Badge>
      );
    case 'failure':
      return (
        <Badge className="bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20 px-2.5 py-0.5 text-xs font-semibold rounded-full gap-1">
          <XCircle className="w-3.5 h-3.5" />
          Failed
        </Badge>
      );
    default:
      return (
        <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 px-2.5 py-0.5 text-xs font-semibold rounded-full gap-1">
          <WarningCircle className="w-3.5 h-3.5" />
          {conclusion || 'Pending'}
        </Badge>
      );
  }
});

// Build Card Component
const BuildCard = memo(({ run, isExpanded, onToggle, selectedPlatform, isLatestSuccess }: any) => {
  const formatRelativeTime = (dateString: string) => {
    const diff = Date.now() - new Date(dateString).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  const isSuccess = run.conclusion === 'success';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300
        bg-card border border-border/80 hover:border-primary/40
        ${isSuccess ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-red-500'}
        ${isLatestSuccess ? 'ring-2 ring-primary/20 shadow-lg' : 'hover:shadow-md'}
      `}
    >
      <div className="p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Main details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2.5 flex-wrap">
              <h3 className="text-lg font-bold text-foreground truncate max-w-[90%] md:max-w-[70%]">
                {run.display_title}
              </h3>
              <StatusBadge conclusion={run.conclusion} />
              {isLatestSuccess && (
                <Badge className="bg-primary/10 text-primary border border-primary/20 font-bold px-2.5 py-0.5 text-xs rounded-full">
                  <Sparkle className="w-3 h-3 mr-1 fill-current animate-pulse" />
                  LATEST RUN
                </Badge>
              )}
            </div>

            {/* Meta tags / tech metrics row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5 font-mono text-xs bg-muted border border-border px-2 py-0.5 rounded-md text-foreground/80">
                #{run.run_number}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-muted-foreground/75" />
                {formatRelativeTime(run.updated_at)}
              </span>
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-muted-foreground/75" />
                {run.head_branch}
              </span>
              <a 
                href={run.actor?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-medium text-foreground/90 group/actor"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={run.actor?.avatar_url} 
                  alt="" 
                  className="w-5 h-5 rounded-full border border-border group-hover/actor:border-primary/50 transition-colors"
                  loading="lazy" 
                />
                {run.actor?.login}
              </a>
            </div>
          </div>

          {/* Action button column */}
          <div className="flex items-center gap-2 self-end md:self-center">
            <Button
              onClick={() => onToggle(run.id)}
              className={`flex items-center gap-2 px-5 py-2.5 h-11 rounded-xl transition-all font-semibold border
                ${isExpanded 
                  ? 'bg-primary text-white border-primary hover:bg-primary/95 shadow-md shadow-primary/25' 
                  : 'bg-card border-border hover:bg-accent text-foreground hover:border-primary/30'
                }
              `}
            >
              <DownloadSimple className="w-4.5 h-4.5" />
              <span>Downloads</span>
              <CaretDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>
      </div>

      {/* Expanded artifacts section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-muted/40 border-t border-border/60"
          >
            <div className="p-5 md:p-6">
              <DownloadArtifacts runId={run.id} platform={selectedPlatform} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
BuildCard.displayName = 'BuildCard';

// --- Main Content ---

const TestingContent = () => {
  const { t } = useTranslation();
  const [selectedPlatform, setSelectedPlatform] = useState('windows');
  const [expandedRunId, setExpandedRunId] = useState<number | null>(null);

  const { data: workflowRuns, isLoading, error } = useQuery({
    queryKey: ['workflow-runs'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher/actions/runs?status=completed&per_page=15&event=push');
      if (!response.ok) throw new Error('Failed to fetch workflow runs');
      return response.json();
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const runs = workflowRuns?.workflow_runs || [];
  const latestSuccessId = runs.find((r: any) => r.conclusion === 'success')?.id;

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        
        {/* Header */}
        <header className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 gap-2 font-bold rounded-full border">
              <Warning className="w-4 h-4 text-amber-500" />
              Experimental Builds
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground tracking-tight">
              {t('testing.title') || 'Experimental Testing'}
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('testing.subtitle') || 'Download experimental test builds generated automatically from Github Actions. Ideal for testing bleeding edge features.'}
            </p>
          </motion.div>
        </header>

        {/* Platform Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex justify-center gap-3 p-2 bg-card rounded-2xl border border-border shadow-md w-fit mx-auto">
            {platforms.map((platform) => (
              <button
                key={platform.key}
                onClick={() => setSelectedPlatform(platform.key)}
                className={`flex items-center gap-3.5 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border
                  ${selectedPlatform === platform.key
                    ? `${platform.activeColor} shadow-md border-transparent scale-[1.02]`
                    : 'bg-card border-transparent text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border'
                  }
                `}
              >
                <platform.icon />
                <span className="text-sm">{platform.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Builds List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Lightning className="w-5 h-5 text-primary" />
                Recent Builds
              </h2>
            </div>

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-28 bg-card rounded-2xl border border-border animate-pulse" />
                ))}
              </div>
            ) : error ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-card border border-border rounded-2xl text-center shadow-xl max-w-xl mx-auto"
              >
                <GithubLogo className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
                <h3 className="text-xl font-bold text-foreground mb-3">GitHub API Rate Limit Exceeded</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  It seems you have visited our website too frequently, triggering the GitHub API rate limit. If you want to download launcher files, view live test actions, or check recent runs, please check our official GitHub page!
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Button variant="outline" className="border-border hover:bg-muted text-foreground" onClick={() => window.location.reload()}>
                    Retry
                  </Button>
                  <Button className="bg-primary hover:bg-primary/95 text-white border-0 shadow-md shadow-primary/20 animate-in fade-in" onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher/actions', '_blank')}>
                    View on GitHub
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {runs.map((run: any, index: number) => (
                  <BuildCard
                    key={run.id}
                    run={run}
                    isExpanded={expandedRunId === run.id}
                    onToggle={(id: number) => setExpandedRunId(expandedRunId === id ? null : id)}
                    selectedPlatform={selectedPlatform}
                    isLatestSuccess={run.id === latestSuccessId}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Warning Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-amber-500/5 dark:bg-amber-500/5 rounded-2xl border border-amber-500/20 text-amber-700 dark:text-amber-400"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <WarningOctagon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-800 dark:text-amber-400 mb-1.5 text-base">Warning</h3>
                  <p className="text-sm text-amber-700/80 dark:text-amber-200/70 leading-relaxed">
                    These are development builds. They may contain bugs or incomplete features. Always backup your data first.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* How to Install */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-card rounded-2xl border border-border shadow-sm"
            >
              <h3 className="font-bold text-foreground mb-5 flex items-center gap-2 text-base">
                <Terminal className="w-5 h-5 text-primary" />
                Quick Start
              </h3>
              
              <div className="space-y-4">
                {[
                  { num: '01', title: 'Download Artifact', text: 'Select your target operating system, choose a successful build, expand it, and click to download the ZIP file.' },
                  { num: '02', title: 'Extract Files', text: 'Locate the downloaded archive and extract its contents to any directory of your preference.' },
                  { num: '03', title: 'Run and Play', text: 'Launch the main launcher executable directly without any complex system configurations.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 p-4 rounded-xl border border-border/80 bg-background/50 relative overflow-hidden group/step hover:border-primary/25 transition-all">
                    <div className="absolute top-0 right-0 p-1 font-mono text-3xl font-extrabold opacity-[0.02] dark:opacity-[0.04] text-foreground group-hover/step:text-primary group-hover/step:opacity-[0.08] transition-all">
                      {step.num}
                    </div>
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full mt-6 gap-2 bg-background border border-border text-foreground hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 rounded-xl"
                onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher/issues', '_blank')}
              >
                Report Issue
                <ArrowSquareOut className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testing = () => (
  <AppShell>
    <TestingContent />
  </AppShell>
);

export default Testing;
