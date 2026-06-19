import { fetch } from 'undici'; // or whatever fetch is used, but since it's browser, no need import
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
    if (typeof window === 'undefined') {
      const filePath = path.join(process.cwd(), 'public/guides.json');
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return data.posts.sort((a: GuidePost, b: GuidePost) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    } else {
      const response = await fetch('/guides.json');
      if (!response.ok) {
        throw new Error('Failed to fetch guides');
      }
      const data = await response.json();
      return data.posts.sort((a: GuidePost, b: GuidePost) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }
  } catch (error) {
    console.error('Error fetching guide posts:', error);
    return [];
  }
}