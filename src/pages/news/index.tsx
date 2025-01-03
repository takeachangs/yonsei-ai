import { GetStaticProps } from 'next';
import { getAllNews, getUpcomingEvents, NewsItem } from '@/lib/news';
import NewsCard from '@/components/news/NewsCard';
import RSSButton from '@/components/news/RSSButton';

interface NewsPageProps {
  news: NewsItem[];
  events: NewsItem[];
}

export default function NewsPage({ news, events }: NewsPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header with RSS Button */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">News & Events</h1>
        <RSSButton />
      </div>

      {/* Upcoming Events Section */}
      {events.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <NewsCard key={event.id} news={event} />
            ))}
          </div>
        </section>
      )}

      {/* Latest News Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="space-y-6">
          {news.map((item, index) => (
            <NewsCard key={item.id} news={item} featured={index === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [allNews, upcomingEvents] = await Promise.all([
    getAllNews(),
    getUpcomingEvents()
  ]);
  
  const news = allNews.filter(item => item.type === 'news');

  return {
    props: {
      news,
      events: upcomingEvents,
    },
  };
}