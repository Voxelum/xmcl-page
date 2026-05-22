import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { getAllBlogPosts } from "../src/utils/blogUtils.ts";
import { getAllGuidePosts } from "../src/utils/guideUtils.ts";

const siteUrl = "https://xmcl.app";

async function generate() {
  const blogPosts = await getAllBlogPosts();
  const blogRss = generateRSSFeed(blogPosts, siteUrl);
  fs.writeFileSync(path.join(__dirname, "../public/rss.xml"), blogRss);

  const guidePosts = await getAllGuidePosts();
  const guideRss = generateGuideRSSFeed(guidePosts, siteUrl);
  fs.writeFileSync(path.join(__dirname, "../public/guide-rss.xml"), guideRss);
}

generate();

type BlogPost = {
  title: string;
  slug: string;
  excerpt?: string;
  author: string;
  tags?: string[];
  date: string | number | Date;
};

function generateRSSFeed(posts: BlogPost[], siteUrl: string): string {
  const sorted = posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>XMCL Blog</title>
    <link>${siteUrl}/blogs</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Latest updates and insights from the XMCL team</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>XMCL Website</generator>
`;

  for (let post of sorted) {
    xml += `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blogs/${post.slug}</link>
      <guid>${siteUrl}/blogs/${post.slug}</guid>
      <description><![CDATA[${post.excerpt || ""}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author><![CDATA[${post.author}]]></author>
`;

    if (post.tags && post.tags.length > 0) {
      for (let tag of post.tags) {
        xml += `      <category><![CDATA[${tag}]]></category>\n`;
      }
    } else {
      xml += `      <category><![CDATA[undefined]]></category>\n`;
    }

    xml += `    </item>
`;
  }

  xml += `  </channel>
</rss>`;

  return xml;
}

function generateGuideRSSFeed(posts: BlogPost[], siteUrl: string): string {
  const sorted = posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>XMCL Guides</title>
    <link>${siteUrl}/guide</link>
    <atom:link href="${siteUrl}/guide-rss.xml" rel="self" type="application/rss+xml" />
    <description>Latest guides and tutorials from XMCL</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>XMCL Website</generator>
`;

  for (let post of sorted) {
    xml += `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/guide/${post.slug}</link>
      <guid>${siteUrl}/guide/${post.slug}</guid>
      <description><![CDATA[${post.excerpt || ""}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author><![CDATA[${post.author}]]></author>
`;

    if (post.tags && post.tags.length > 0) {
      for (let tag of post.tags) {
        xml += `      <category><![CDATA[${tag}]]></category>\n`;
      }
    }

    xml += `    </item>
`;
  }

  xml += `  </channel>
</rss>`;

  return xml;
}
