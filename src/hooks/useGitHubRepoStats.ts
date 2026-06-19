
import { useQuery } from '@tanstack/react-query';

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
}

const fetchGitHubRepo = async (): Promise<GitHubRepo> => {
  const response = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher');
  if (!response.ok) {
    throw new Error('Failed to fetch repository stats');
  }
  return response.json();
};

export const useGitHubRepoStats = () => {
  const { data: repoStats, isLoading, error } = useQuery({
    queryKey: ['github-repo-stats'],
    queryFn: fetchGitHubRepo,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${Math.floor(num / 1000)}K`;
    }
    return num.toString();
  };

  return {
    stars: repoStats?.stargazers_count || 0,
    forks: repoStats?.forks_count || 0,
    formattedStars: formatNumber(repoStats?.stargazers_count || 0),
    formattedForks: formatNumber(repoStats?.forks_count || 0),
    isLoading,
    error
  };
};
