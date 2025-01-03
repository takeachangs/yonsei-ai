import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllNews, getNewsById, NewsItem } from '@/lib/news';

interface NewsDetailProps {
  news: NewsItem;
}

export default function NewsDetail({ news }: NewsDetailProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-2 py-1 text-xs rounded ${
            news.type === 'event' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
          }`}>
            {news.type.toUpperCase()}
          </span>
          <span className="text-gray-600">{new Date(news.date).toLocaleDateString()}</span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
        
        {news.type === 'event' && news.eventDate && (
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="font-medium">Event Details:</p>
            <p>Date: {new Date(news.eventDate).toLocaleDateString()}</p>
            {news.location && <p>Location: {news.location}</p>}
          </div>
        )}

        {news.image && (
          <div className="mb-6">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}
      </header>

      <div 
        className="prose lg:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: news.content || '' }}
      />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const news = getAllNews();
  const paths = news.map((item) => ({
    params: { id: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const news = await getNewsById(params?.id as string);
  return {
    props: {
      news,
    },
  };
};