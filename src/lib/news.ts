import * as fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const newsDirectory = path.join(process.cwd(), 'content/news');

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  type: 'news' | 'event';
  excerpt: string;
  author: string;
  featured: boolean;
  content?: string;
  eventDate?: string;
  location?: string;
  image?: string;
}

export async function getAllNews(): Promise<NewsItem[]> {
  try {
    const fileNames = await fs.readdir(newsDirectory);
    const allNews = await Promise.all(fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id,
        ...data,
      } as NewsItem;
    }));

    return allNews.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading news:', error);
    return [];
  }
}

export async function getLatestNews(count: number): Promise<NewsItem[]> {
  const allNews = await getAllNews();
  return allNews.slice(0, count);
}

export async function getUpcomingEvents(): Promise<NewsItem[]> {
  const allNews = await getAllNews();
  return allNews
    .filter(item => 
      item.type === 'event' && 
      new Date(item.eventDate!) > new Date()
    )
    .sort((a, b) => 
      (new Date(a.eventDate!) > new Date(b.eventDate!) ? 1 : -1)
    );
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  try {
    const fullPath = path.join(newsDirectory, `${id}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      id,
      ...data as NewsItem,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error reading news item ${id}:`, error);
    return null;
  }
}