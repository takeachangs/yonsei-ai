import Link from 'next/link';
import { NewsItem } from '@/lib/news';

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ news, featured = false }: NewsCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${featured ? 'lg:flex' : ''}`}>
      {news.image && (
        <div className={`${featured ? 'lg:flex-shrink-0 lg:w-48' : 'w-full'} h-48 relative`}>
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-1 text-xs rounded ${
            news.type === 'event' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
          }`}>
            {news.type.toUpperCase()}
          </span>
          <span className="text-gray-600 text-sm">{new Date(news.date).toLocaleDateString()}</span>
        </div>
        
        <Link href={`/news/${news.id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
            {news.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4">{news.excerpt}</p>
        
        {news.type === 'event' && news.eventDate && (
          <div className="text-sm text-gray-600">
            <p>Date: {new Date(news.eventDate).toLocaleDateString()}</p>
            {news.location && <p>Location: {news.location}</p>}
          </div>
        )}
      </div>
    </div>
  );
}