import { getAllGuidePosts } from '@/utils/guideUtils';

export async function getGuideRSSFeed(req: Request): Promise<Response> {
  try {
    const posts = await getAllGuidePosts();
    
    if (!posts || posts.length === 0) {
      return new Response('No guide posts found. RSS feed cannot be generated.', {
        status: 404,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    
    let siteUrl = '';
    
    try {
      const url = new URL(req.url);
      siteUrl = url.origin;
    } catch (e) {
      siteUrl = 'https://xmcl-website-not-official.vercel.app';
      console.warn('Could not determine site URL from request, using fallback:', siteUrl);
    }
    
    
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response(`Failed to generate RSS feed: ${error instanceof Error ? error.message : 'Unknown error'}`, {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}