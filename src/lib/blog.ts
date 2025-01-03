import * as fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  content?: string;
};

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = await fs.readdir(postsDirectory);
    const allPosts = await Promise.all(fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        tags: data.tags,
      };
    }));

    return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      id,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      tags: data.tags,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error reading blog post ${id}:`, error);
    return null;
  }
}