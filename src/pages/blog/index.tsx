import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts, BlogPost } from '@/lib/blog';

interface BlogIndexProps {
  posts: BlogPost[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            </Link>
            <div className="text-gray-600 mb-2">
              {post.date} · {post.author}
            </div>
            <p className="text-gray-800 mb-4">{post.excerpt}</p>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}