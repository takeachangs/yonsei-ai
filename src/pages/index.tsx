import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getLatestNews, NewsItem } from '@/lib/news';
import NewsCard from '@/components/news/NewsCard';

interface HomeProps {
  latestNews: NewsItem[];
}

export default function Home({ latestNews }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advancing AI Research at Yonsei
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Exploring the frontiers of artificial intelligence through innovative research and collaboration.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/research"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
            >
              Explore Research
            </Link>
            <Link
              href="/blog"
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Updates</h2>
          <Link 
            href="/news"
            className="text-blue-600 hover:text-blue-800"
          >
            View all news →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latestNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <Link href="/research" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Research Papers</h3>
              <p className="text-gray-600">Explore our latest research publications</p>
            </Link>
            <Link href="/blog" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Blog</h3>
              <p className="text-gray-600">Read our insights and updates</p>
            </Link>
            <Link href="/tools" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">AI Tools</h3>
              <p className="text-gray-600">Try our AI tools and demos</p>
            </Link>
            <Link href="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">About Us</h3>
              <p className="text-gray-600">Learn about our team and mission</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const latestNews = await getLatestNews(3);
  return {
    props: {
      latestNews,
    },
  };
}