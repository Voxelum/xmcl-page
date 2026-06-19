import { getAllBlogPosts } from '@/utils/blogUtils';
import { generateRSSFeed } from '@/utils/rssGenerator';

/**
 * This function handles the RSS feed API endpoint
 * It can be used with a server-side framework or as a client-side route handler
 */
export async function getRSSFeed(req: Request): Promise<Response> {
  try {
    // Get all blog posts
    const posts = await getAllBlogPosts();
    
    if (!posts || posts.length === 0) {
      return new Response('No blog posts found. RSS feed cannot be generated.', {
        status: 404,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    
    // Determine the site URL
    let siteUrl = '';
    
    // Try to get the origin from the request URL
    try {
      const url = new URL(req.url);
      siteUrl = url.origin;
    } catch (e) {
      // Fallback to a default URL
      siteUrl = 'https://xmcl-website-not-official.vercel.app';
      console.warn('Could not determine site URL from request, using fallback:', siteUrl);
    }
    
    // Generate RSS XML
    const rssXml = generateRSSFeed(posts, siteUrl);
    
    if (!rssXml) {
      return new Response('Failed to generate RSS XML', {
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    
    // Return the RSS feed with appropriate headers
    return new Response(rssXml, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml',
        'Cache-Control': 'max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response(`Failed to generate RSS feed: ${error instanceof Error ? error.message : 'Unknown error'}`, {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}