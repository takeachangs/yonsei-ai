import { GetServerSideProps } from 'next';
import { getAllNews } from '@/lib/news';

function generateRssItem(item: any) {
  return `
    <item>
      <title>${item.title}</title>
      <link>https://yonsei.ai/news/${item.id}</link>
      <guid>https://yonsei.ai/news/${item.id}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description>${item.excerpt}</description>
      ${item.type === 'event' ? `
        <category>Event</category>
        <eventDate>${item.eventDate}</eventDate>
        <location>${item.location}</location>
      ` : `
        <category>News</category>
      `}
    </item>
  `;
}

function generateRss(items: any[]) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Yonsei AI Lab - News and Events</title>
        <link>https://yonsei.ai</link>
        <description>Latest updates from Yonsei AI Lab - Research news, events, and announcements</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="https://yonsei.ai/feed.xml" rel="self" type="application/rss+xml"/>
        ${items.map(generateRssItem).join('')}
      </channel>
    </rss>
  `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {
    const items = getAllNews();
    const rss = generateRss(items);

    res.setHeader('Content-Type', 'application/xml');
    res.write(rss);
    res.end();
  }

  return {
    props: {},
  };
};

// This default export is required for API routes
export default function RSSFeed() {
  return null;
}