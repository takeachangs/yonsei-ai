import { ReactNode } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getLatestNews, NewsItem } from '@/lib/news';
import NewsCard from '@/components/news/NewsCard';
import Layout from '@/components/layout/Layout';

interface HomeProps {
  latestNews: NewsItem[];
}

export default function Home({ latestNews }: HomeProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#00264D] to-[#0058B3] text-white">
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 py-48 md:py-64 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Discover the full spectrum<br className="hidden md:block" />
            of AI at Yonsei.
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-fadeIn">
            Advancing the frontiers of artificial intelligence
            through innovative research and collaboration.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/research"
              className="bg-white text-blue-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              Explore Research
            </Link>
            <Link
              href="/blog"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-500"
            >
              Read Blog
            </Link>
          </div>
        </div>

        {/* Curved Divider SVG */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 320"
            className="relative block w-[calc(100%+1.3px)] h-[80px]"
            preserveAspectRatio="none"
          >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="
              M 0,320
              Q 720,-300 1440,320
              L 1440,320
              L 0,320
              Z
            "
          />
          </svg>
        </div>
      </section>
      <div className="h-[100px]"></div> {/* Adjust height */}

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
            <Link
              href="/research"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Research Papers</h3>
              <p className="text-gray-600">Explore our latest research publications</p>
            </Link>
            <Link
              href="/blog"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Blog</h3>
              <p className="text-gray-600">Read our insights and updates</p>
            </Link>
            <Link
              href="/tools"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">AI Tools</h3>
              <p className="text-gray-600">Try our AI tools and demos</p>
            </Link>
            <Link
              href="/about"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">About Us</h3>
              <p className="text-gray-600">Learn about our team and mission</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const latestNews = await getLatestNews(3);
  return {
    props: {
      latestNews,
    },
  };
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout fullWidth >{page}</Layout>;
};