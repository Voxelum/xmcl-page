
import { useQuery } from '@tanstack/react-query';
import { preprocessMarkdown } from '@/utils/markdownUtils';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  slug: string;
}

interface BlogConfig {
  posts: BlogPost[];
  categories: string[];
  featured: string[];
}

export const useBlogPosts = () => {
  const { data: config, isLoading, error } = useQuery({
    queryKey: ['blog-config'],
    queryFn: async (): Promise<BlogConfig> => {
      try {
        const response = await fetch('/blog.json');
        if (!response.ok) {
          // Return default config if blog.json doesn't exist
          return {
            posts: [
              {
                id: '1',
                title: 'Welcome to XMCL Blog',
                excerpt: 'This is the beginning of our blog system. More posts coming soon!',
                content: '# Welcome to XMCL Blog\n\nThis is the beginning of our blog system. More posts coming soon!',
                author: 'XMCL Team',
                date: '2024-01-01',
                tags: ['announcement'],
                slug: 'welcome'
              }
            ],
            categories: ['announcement', 'updates', 'tutorials'],
            featured: ['1']
          };
        }
        return response.json();
      } catch (error) {
        return {
          posts: [],
          categories: [],
          featured: []
        };
      }
    }
  });

  const fetchPostContent = async (slug: string): Promise<string> => {
    try {
      const response = await fetch(`/blog/${slug}.md`);
      if (!response.ok) {
        return '# Post not found\n\nThis post content is not available.';
      }
      const rawContent = await response.text();
      return preprocessMarkdown(rawContent);
    } catch (error) {
      return '# Error loading post\n\nFailed to load post content.';
    }
  };

  return {
    posts: config?.posts || [],
    categories: config?.categories || [],
    featured: config?.featured || [],
    isLoading,
    error,
    fetchPostContent
  };
};
