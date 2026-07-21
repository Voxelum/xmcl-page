import fs from 'fs';
import path from 'path';

export interface GuidePost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  slug: string;
  readTime: string;
  difficulty: string;
}

export async function getAllGuidePosts(): Promise<GuidePost[]> {
  try {
    const filePath = path.join(process.cwd(), 'public/guides.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return [...data.posts]
      .filter((post: GuidePost) => fs.existsSync(
        path.join(process.cwd(), 'public', 'guide', `${post.slug}.md`),
      ))
      .sort((a: GuidePost, b: GuidePost) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  } catch (error) {
    console.error('Error fetching guide posts:', error);
    return [];
  }
}

export function getGuideContent(slug: string): string {
  const safeSlug = path.basename(slug);

  if (safeSlug !== slug) {
    throw new Error(`Invalid guide slug "${slug}"`);
  }

  const filePath = path.join(process.cwd(), 'public', 'guide', `${safeSlug}.md`);
  return fs.readFileSync(filePath, 'utf8');
}