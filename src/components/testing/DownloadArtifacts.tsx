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
        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Monitor className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {t('testing.noArtifacts')}
        </h3>
        <p className="text-slate-400">
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
          <Card className="p-6 bg-white/10 border-white/10 shadow-xl hover:bg-white/15 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightning className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-sm font-bold text-white mb-2 truncate px-2" title={artifact.name}>
                {artifact.name}
              </h3>

              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-xs bg-black/20 text-slate-300">
                  {formatFileSize(artifact.size_in_bytes)}
                </Badge>
                <Badge
                  className={`text-xs ${
                    artifact.expired
                      ? 'bg-red-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {artifact.expired ? 'Expired' : 'Available'}
                </Badge>
              </div>

              <Button
                onClick={() => handleDownload(artifact)}
                disabled={artifact.expired}
                size="sm"
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10"
              >
                <Download className="w-4 h-4 mr-2" />
                {t('testing.downloadArtifact')}
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export { DownloadArtifacts };
