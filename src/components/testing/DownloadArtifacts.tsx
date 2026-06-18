import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Monitor, AppleLogo, DeviceMobile, Lightning, Spinner } from '@phosphor-icons/react';
import { useTranslation } from '@/hooks/useTranslation';
import { toast } from "sonner";
import { useQuery } from '@tanstack/react-query';

interface Artifact {
  id: number;
  name: string;
  size_in_bytes: number;
  archive_download_url: string;
  expired: boolean;
}

interface DownloadArtifactsProps {
  platform: string;
  runId: number;
}

const DownloadArtifacts: React.FC<DownloadArtifactsProps> = ({
  platform,
  runId
}) => {
  const { t } = useTranslation();

  const { data: artifactsData, isLoading, error } = useQuery({
    queryKey: ['artifacts', runId],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/repos/Voxelum/x-minecraft-launcher/actions/runs/${runId}/artifacts`);
      if (!response.ok) throw new Error('Failed to fetch artifacts');
      return response.json();
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const getPlatformArtifacts = () => {
    if (!artifactsData?.artifacts) return [];

    switch (platform) {
      case 'windows':
        return artifactsData.artifacts.filter((a: Artifact) =>
          a.name.toLowerCase().includes('windows') ||
          a.name.toLowerCase().includes('win') ||
          a.name.toLowerCase().includes('exe')
        );
      case 'linux':
        return artifactsData.artifacts.filter((a: Artifact) =>
          a.name.toLowerCase().includes('linux') ||
          a.name.toLowerCase().includes('appimage') ||
          a.name.toLowerCase().includes('deb') ||
          a.name.toLowerCase().includes('rpm')
        );
      case 'macos':
        return artifactsData.artifacts.filter((a: Artifact) =>
          a.name.toLowerCase().includes('mac') ||
          a.name.toLowerCase().includes('darwin') ||
          a.name.toLowerCase().includes('dmg')
        );
      default:
        return [];
    }
  };

  const formatFileSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  const handleDownload = (artifact: Artifact) => {
    // Use nightly.link for direct download without authentication/redirection to GitHub actions page
    const directDownloadUrl = `https://nightly.link/Voxelum/x-minecraft-launcher/actions/runs/${runId}/${encodeURIComponent(artifact.name)}.zip`;
    window.open(directDownloadUrl, '_blank');
    toast.success(t('testing.downloadStarted'));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <Spinner className="w-8 h-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-400">
        Failed to load artifacts
      </div>
    );
  }

  const platformArtifacts = getPlatformArtifacts();

  if (platformArtifacts.length === 0) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 bg-muted border border-border rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Monitor className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {t('testing.noArtifacts')}
        </h3>
        <p className="text-muted-foreground">
          No artifacts available for {platform}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {platformArtifacts.map((artifact: Artifact, index: number) => (
        <motion.div
          key={artifact.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
        >
          <Card className="p-6 bg-card border border-border hover:border-primary/30 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
            {/* Background accent glow on hover */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="text-center relative z-10">
              <div className="w-14 h-14 bg-primary/10 text-primary border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightning className="w-7 h-7" />
              </div>

              <h3 className="text-sm font-bold text-foreground mb-2 truncate px-2" title={artifact.name}>
                {artifact.name}
              </h3>

              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground border-0">
                  {formatFileSize(artifact.size_in_bytes)}
                </Badge>
                <Badge
                  className={`text-xs border-0 ${
                    artifact.expired
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400'
                      : 'bg-green-500/10 text-green-600 dark:text-green-400'
                  }`}
                >
                  {artifact.expired ? 'Expired' : 'Available'}
                </Badge>
              </div>

              <Button
                onClick={() => handleDownload(artifact)}
                disabled={artifact.expired}
                size="sm"
                className="w-full bg-primary hover:bg-primary/95 text-white border-0 shadow-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                {t('testing.downloadArtifact') || 'Download'}
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export { DownloadArtifacts };
