import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { query, start, maxResults, sortBy, sortOrder, categories } = req.query;

    // Construct the arXiv query
    const searchQuery = encodeURIComponent(
      `(${categories})${query ? ` AND all:${query}` : ''}`
    );

    const arxivUrl = 'http://export.arxiv.org/api/query?' + 
      `search_query=${searchQuery}&` +
      `start=${start || 0}&` +
      `max_results=${maxResults || 10}&` +
      `sortBy=${sortBy || 'submittedDate'}&` +
      `sortOrder=${sortOrder || 'descending'}`;

    const response = await axios.get(arxivUrl);

    // Send back the raw XML response
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(response.data);
  } catch (error) {
    console.error('ArXiv API error:', error);
    res.status(500).json({ message: 'Error fetching from arXiv' });
  }
}