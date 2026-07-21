import fs from 'fs';
import path from 'path';

const sourceLocaleMap: Record<string, string> = {
  by: 'be',
  ja: 'jp',
  kz: 'kk',
  'zh-Hant': 'zh-TW',
};

export interface GuidePost {
  title: string;
  excerpt: string;
  tags: string[];
  slug: string;
  author?: string;
  date?: string;
  readTime?: string;
  difficulty?: string;
}

export interface GuideConfig {
  posts: GuidePost[];
  featured: string[];
}

function getGuideDirectory(locale: string) {
  const directory = path.join(process.cwd(), 'src', sourceLocaleMap[locale] ?? locale, 'guide');
  return fs.existsSync(directory) || locale === 'en'
    ? directory
    : getGuideDirectory('en');
}

function getTitle(markdown: string, fallback: string) {
  return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? fallback;
}

function getExcerpt(markdown: string) {
  const paragraph = markdown
    .replace(/^#.+$/gm, '')
    .replace(/^:::.+$/gm, '')
    .split(/\r?\n\r?\n/)
    .map((part) => part.replace(/\r?\n/g, ' ').trim())
    .find((part) => part.length > 0);

  return paragraph?.slice(0, 180) ?? '';
}

export function getGuideConfig(locale = 'en'): GuideConfig {
  const directory = getGuideDirectory(locale);

  const posts = fs.readdirSync(directory)
    .filter((file) => file.endsWith('.md') && file !== 'index.md')
    .map((file) => {
      const slug = file.slice(0, -3);
      const content = fs.readFileSync(path.join(directory, file), 'utf8');

      return {
        title: getTitle(content, slug),
        excerpt: getExcerpt(content),
        tags: [],
        slug,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return { posts, featured: [] };
}

export async function getAllGuidePosts(locale = 'en'): Promise<GuidePost[]> {
  try {
    return getGuideConfig(locale).posts;
  } catch (error) {
    console.error('Error fetching guide posts:', error);
    return [];
  }
}

export function getGuideContent(locale: string, slug?: string): string {
  const guideSlug = slug ?? locale;
  const guideLocale = slug ? locale : 'en';
  const directory = getGuideDirectory(guideLocale);
  const safeSlug = path.basename(guideSlug);

  if (safeSlug !== guideSlug) {
    throw new Error(`Invalid guide slug "${guideSlug}"`);
  }

  const filePath = path.join(directory, `${safeSlug}.md`);
  return fs.readFileSync(filePath, 'utf8');
}