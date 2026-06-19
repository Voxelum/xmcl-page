
import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface GitHubRelease {
  tag_name: string;
  published_at: string;
  assets: Array<{
    name: string;
    download_count: number;
    size: number;
  }>;
}

const fetchGitHubReleases = async (): Promise<GitHubRelease[]> => {
  const response = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher/releases');
  if (!response.ok) {
    throw new Error('Failed to fetch releases');
  }
  return response.json();
};

export const useGitHubStats = () => {
  const { data: releases, isLoading, error } = useQuery({
    queryKey: ['github-releases'],
    queryFn: fetchGitHubReleases,
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
  });

  const totalDownloads = React.useMemo(() => {
    if (!releases) return 0;
    
    return releases.reduce((total, release) => {
      const releaseDownloads = release.assets.reduce((sum, asset) => {
        // Count Windows, macOS, and Linux downloads
        if (
          asset.name.includes('.exe') ||
          asset.name.includes('.dmg') ||
          asset.name.includes('.AppImage') ||
          asset.name.includes('.deb') ||
          asset.name.includes('.rpm') ||
          asset.name.includes('.appx') ||
          asset.name.includes('.zip')
        ) {
          return sum + asset.download_count;
        }
        return sum;
      }, 0);
      return total + releaseDownloads;
    }, 0);
  }, [releases]);

  const formatDownloadCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M+`;
    } else if (count >= 1000) {
      return `${Math.floor(count / 1000)}K+`;
    }
    return count.toString();
  };

  return {
    totalDownloads,
    formattedDownloads: formatDownloadCount(totalDownloads),
    isLoading,
    error,
    releases
  };
};
