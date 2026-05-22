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
  User
} from "@phosphor-icons/react";
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from '@/hooks/useTranslation';
import { DownloadArtifacts } from '@/components/testing/DownloadArtifacts';
import { AppShell } from '@/components/AppShell';
import { Badge } from '@/components/ui/badge';

// Platform Icons
const WindowsIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
  </svg>
);

const MacOSIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.74-3.03 1.59-.67.78-1.26 2.05-1.11 3.17 1.17.09 2.36-.75 3.07-1.65z"/>
  </svg>
);

const LinuxIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12.03 0C5.396 0 .024 5.362.024 11.988S5.384 24 12.03 24c6.634 0 11.964-5.362 11.964-11.988S18.664 0 12.03 0zm4.512 20.328c-1.2 1.392-3.528 1.152-4.488.984-1.008.168-3.36.36-4.512-.984-.96-1.152.024-3.84 1.392-4.968-1.08-2.352-.336-4.92 1.776-6.504.624-.48 2.112-.624 2.808-.024.696-.6 2.184-.456 2.808.024 2.112 1.584 2.856 4.152 1.776 6.504 1.32 1.128 2.424 3.816 1.344 4.968h-2.904z"/>
  </svg>
);

const platforms = [
  { key: 'windows', label: 'Windows', icon: WindowsIcon, color: 'bg-blue-500' },
  { key: 'macos', label: 'macOS', icon: MacOSIcon, color: 'bg-slate-600' },
  { key: 'linux', label: 'Linux', icon: LinuxIcon, color: 'bg-orange-500' },
];

const StatusBadge = memo(({ conclusion }: { conclusion: string }) => {
  switch (conclusion) {
    case 'success':
      return (
        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 gap-1.5">
          <CheckCircle className="w-3.5 h-3.5" />
          Success
        </Badge>
      );
    case 'failure':
      return (
        <Badge className="bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20 gap-1.5">
          <XCircle className="w-3.5 h-3.5" />
          Failed
        </Badge>
      );
    default:
      return (
        <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 gap-1.5">
          <WarningCircle className="w-3.5 h-3.5" />
          {conclusion || 'Unknown'}
        </Badge>
      );
  }
});

// Build Card Component
const BuildCard = memo(({ run, isExpanded, onToggle, selectedPlatform, isLatestSuccess }: any) => {
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString(undefined, {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300
        bg-white/70 dark:bg-white/5
        border ${isSuccess ? 'border-slate-200/50 dark:border-white/10' : 'border-red-500/20'}
        hover:shadow-xl hover:shadow-indigo-500/5
        ${isLatestSuccess ? 'ring-2 ring-green-500/30' : ''}
      `}
    >
      {/* Latest success indicator */}
      {isLatestSuccess && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-500" />
      )}

      {/* Main content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-4">
          {/* Status indicator */}
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
            ${isSuccess 
              ? 'bg-green-500/10 text-green-500' 
              : 'bg-red-500/10 text-red-500'
            }
          `}>
            {isSuccess ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
                {run.display_title}
              </h3>
              <StatusBadge conclusion={run.conclusion} />
              {isLatestSuccess && (
                <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                  <Sparkle className="w-3 h-3 mr-1" />
                  Latest
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {formatRelativeTime(run.updated_at)}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md">
                #{run.run_number}
              </span>
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-4 h-4" />
                {run.head_branch}
              </span>
              <a 
                href={run.actor?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors"
              >
                <img 
                  src={run.actor?.avatar_url} 
                  alt="" 
                  className="w-5 h-5 rounded-full"
                  loading="lazy" 
                />
                {run.actor?.login}
              </a>
            </div>
          </div>

          {/* Expand button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onToggle(run.id)}
            className={`flex items-center gap-2 rounded-xl transition-all
              ${isExpanded 
                ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' 
                : 'text-slate-500 hover:text-indigo-600'
              }
            `}
          >
            <DownloadSimple className="w-4 h-4" />
            <span className="hidden sm:inline">Downloads</span>
            <CaretDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </Button>
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
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
              <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200/50 dark:border-white/10">
                <DownloadArtifacts runId={run.id} platform={selectedPlatform} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

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
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-[#0a0a0b] transition-colors duration-300">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">

        {/* Header */}
        <header className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 gap-2">
              <Warning className="w-4 h-4" />
              Experimental Builds
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">
              {t('testing.title')}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('testing.subtitle')}
            </p>
          </motion.div>
        </header>

        {/* Platform Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="flex justify-center gap-3 p-2 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg w-fit mx-auto">
            {platforms.map((platform) => (
              <button
                key={platform.key}
                onClick={() => setSelectedPlatform(platform.key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300
                  ${selectedPlatform === platform.key
                    ? `${platform.color} text-white shadow-lg`
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10'
                  }
                `}
              >
                <platform.icon />
                <span className="hidden sm:inline">{platform.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Builds List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lightning className="w-5 h-5 text-indigo-500" />
                Recent Builds
              </h2>
            </div>

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-28 bg-white/50 dark:bg-white/5 rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : error ? (
              <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-2xl text-center">
                <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <p className="text-red-500 font-medium">Failed to load builds</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </Button>
              </div>
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
              className="p-5 bg-amber-50 dark:bg-amber-500/10 rounded-2xl border border-amber-200 dark:border-amber-500/20"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <WarningOctagon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-800 dark:text-amber-400 mb-1">Warning</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-200/80 leading-relaxed">
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
              className="p-5 bg-white/70 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"
            >
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-500" />
                Quick Start
              </h3>
              
              <div className="space-y-4">
                {[
                  { num: 1, color: 'indigo', text: 'Click download button on any successful build' },
                  { num: 2, color: 'purple', text: 'Extract the downloaded archive' },
                  { num: 3, color: 'pink', text: 'Run the executable directly' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-3">
                    <div className={`flex-shrink-0 w-7 h-7 rounded-lg bg-${step.color}-500/20 text-${step.color}-500 flex items-center justify-center font-bold text-sm`}>
                      {step.num}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 pt-0.5">{step.text}</p>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full mt-5 gap-2"
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
