import { useState, useEffect } from 'react';

interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  body: string | null;
  state: 'open' | 'closed';
  user: {
    login: string;
    avatar_url: string;
  };
  labels: Array<{
    name: string;
    color: string;
  }>;
  created_at: string;
  updated_at: string;
  comments: number;
  assignees: Array<{
    login: string;
    avatar_url: string;
  }>;
  milestone: {
    title: string;
  } | null;
}

interface GitHubStats {
  stars: number;
  forks: number;
  openIssues: number;
  closedIssues: number;
}

const FALLBACK_DATA = {
  issues: [
    {
      id: 1,
      number: 1,
      title: "Sample Issue - API Unavailable",
      body: "This is a fallback issue displayed when GitHub API is not available.",
      state: 'open' as const,
      user: {
        login: 'xmcl-user',
        avatar_url: 'https://github.com/github.png'
      },
      labels: [
        { name: 'bug', color: 'ff0000' },
        { name: 'help wanted', color: '00ff00' }
      ],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      comments: 5,
      assignees: [],
      milestone: null
    }
  ] as GitHubIssue[],
  stats: {
    stars: 8500,
    forks: 450,
    openIssues: 25,
    closedIssues: 180
  } as GitHubStats
};

export function useGitHubApi() {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to fetch real data from GitHub API
        const [issuesResponse, repoResponse] = await Promise.allSettled([
          fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher/issues?state=all&per_page=50'),
          fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher')
        ]);

        let issuesData = FALLBACK_DATA.issues;
        let statsData = FALLBACK_DATA.stats;

        // Handle issues response
        if (issuesResponse.status === 'fulfilled' && issuesResponse.value.ok) {
          const issues = await issuesResponse.value.json();
          issuesData = issues;
        } else {
          console.warn('GitHub Issues API unavailable, using fallback data');
        }

        // Handle repo stats response
        if (repoResponse.status === 'fulfilled' && repoResponse.value.ok) {
          const repo = await repoResponse.value.json();
          statsData = {
            stars: repo.stargazers_count || FALLBACK_DATA.stats.stars,
            forks: repo.forks_count || FALLBACK_DATA.stats.forks,
            openIssues: repo.open_issues_count || FALLBACK_DATA.stats.openIssues,
            closedIssues: FALLBACK_DATA.stats.closedIssues
          };
        } else {
          console.warn('GitHub Repo API unavailable, using fallback data');
        }

        setIssues(issuesData);
        setStats(statsData);
      } catch (err) {
        console.error('GitHub API error:', err);
        setError('Failed to load GitHub data');
        // Use fallback data on error
        setIssues(FALLBACK_DATA.issues);
        setStats(FALLBACK_DATA.stats);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    issues,
    stats,
    loading,
    error
  };
}
