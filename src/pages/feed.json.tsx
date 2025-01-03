import { GetServerSideProps } from 'next';
import { getAllNews } from '@/lib/news';

function generateJsonFeed(items: any[]) {
  return {
    version: "https://jsonfeed.org/version/1.1",
    title: "Yonsei AI Lab - News and Events",
    home_page_url: "https://yonsei.ai",
    feed_url: "https://yonsei.ai/feed.json",
    description: "Latest updates from Yonsei AI Lab - Research news, events, and announcements",
    language: "en",
    authors: [
      {
        name: "Yonsei AI Lab",
        url: "https://yonsei.ai/about"
      }
    ],
    items: items.map(item => ({
      id: `https://yonsei.ai/news/${item.id}`,
      url: `https://yonsei.ai/news/${item.id}`,
      title: item.title,
      content_text: item.excerpt,
      date_published: new Date(item.date).toISOString(),
      authors: [
        {
          name: item.author
        }
      ],
      tags: [item.type],
      ...(item.type === 'event' && {
        custom_fields: {
          event_date: item.eventDate,
          location: item.location
        }
      }),
      ...(item.image && {
        image: item.image
      })
    }))
  };
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {
    const items = getAllNews();
    const feed = generateJsonFeed(items);

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(feed, null, 2));
    res.end();
  }

  return {
    props: {},
  };
};

// Default export required for API routes
export default function JSONFeed() {
  return null;
}