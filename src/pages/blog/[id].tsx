import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostById, BlogPost } from '@/lib/blog';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600">
          {post.date} · {post.author}
        </div>
      </header>
      <div 
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.content || '' }} 
      />
      <div className="mt-8 flex gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  return {
    props: {
      post,
    },
  };
}