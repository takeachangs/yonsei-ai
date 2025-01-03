import { ArxivPaper } from '@/lib/arxiv';

interface PaperCardProps {
  paper: ArxivPaper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">
        <a 
          href={`https://arxiv.org/abs/${paper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          {paper.title}
        </a>
      </h3>
      
      <p className="text-gray-600 mb-2">
        {paper.authors.join(', ')}
      </p>
      
      <p className="text-gray-700 mb-4 line-clamp-3">
        {paper.summary}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {paper.categories.map(category => (
          <span 
            key={category}
            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
          >
            {category}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>Published: {new Date(paper.published).toLocaleDateString()}</span>
        <a
          href={paper.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          PDF
        </a>
      </div>
    </div>
  );
}