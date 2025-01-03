import axios from 'axios';

export interface ArxivPaper {
  id: string;
  title: string;
  authors: string[];
  summary: string;
  published: string;
  updated: string;
  categories: string[];
  pdfUrl: string;
}

export async function searchArxiv({
  query = '',
  start = 0,
  maxResults = 10,
  sortBy = 'submittedDate',
  sortOrder = 'descending',
  categories = ['cs.AI', 'cs.LG', 'stat.ML']
} = {}): Promise<{
  papers: ArxivPaper[];
  totalResults: number;
}> {
  try {
    // Use our proxy API endpoint
    const response = await axios.get('/api/arxiv', {
      params: {
        query,
        start,
        maxResults,
        sortBy,
        sortOrder,
        categories: categories.join(' OR ')
      }
    });

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response.data, 'text/xml');

    const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
    const totalResults = parseInt(
      xmlDoc.getElementsByTagName('opensearch:totalResults')[0]?.textContent || '0'
    );

    const papers: ArxivPaper[] = entries.map(entry => {
      const authors = Array.from(entry.getElementsByTagName('author')).map(
        author => author.getElementsByTagName('name')[0]?.textContent || ''
      );

      const links = Array.from(entry.getElementsByTagName('link'));
      const pdfLink = links.find(link => link.getAttribute('title') === 'pdf');

      return {
        id: entry.getElementsByTagName('id')[0]?.textContent?.split('/abs/')?.pop() || '',
        title: entry.getElementsByTagName('title')[0]?.textContent?.replace(/\\n/g, '').trim() || '',
        authors,
        summary: entry.getElementsByTagName('summary')[0]?.textContent?.replace(/\\n/g, '').trim() || '',
        published: entry.getElementsByTagName('published')[0]?.textContent || '',
        updated: entry.getElementsByTagName('updated')[0]?.textContent || '',
        categories: Array.from(entry.getElementsByTagName('category')).map(
          cat => cat.getAttribute('term') || ''
        ),
        pdfUrl: pdfLink?.getAttribute('href') || '',
      };
    });

    return {
      papers,
      totalResults,
    };
  } catch (error) {
    console.error('Error fetching arXiv papers:', error);
    throw error;
  }
}