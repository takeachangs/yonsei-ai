import React, { useState, useEffect } from 'react';
import { searchArxiv, ArxivPaper } from '@/lib/arxiv';
import SearchBar from '@/components/research/SearchBar';
import PaperCard from '@/components/research/PaperCard';
import CategorySelector, { ARXIV_CATEGORIES } from '@/components/research/CategorySelector';


const RESULTS_PER_PAGE = 10;

export default function Research() {
  const [query, setQuery] = useState('');
  const [papers, setPapers] = useState<ArxivPaper[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    ['cs.AI', 'cs.LG', 'stat.ML'] // Default categories
  );

  const handleSearch = async (page = 0) => {
    if (selectedCategories.length === 0) {
      setError('Please select at least one category');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const results = await searchArxiv({
        query,
        categories: selectedCategories,
        start: page * RESULTS_PER_PAGE,
        maxResults: RESULTS_PER_PAGE,
      });
      
      setPapers(results.papers);
      setTotalResults(results.totalResults);
      setCurrentPage(page);
    } catch (err) {
      setError('Failed to fetch papers. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Call handleSearch on mount to load initial data
  useEffect(() => {
    handleSearch(0);
  }, []); // Empty dependency array means this runs once on mount

  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Research Papers</h1>
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          onSearch={() => handleSearch(0)}
          isLoading={isLoading}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar with categories */}
        <div className="md:col-span-1">
          <div className="sticky top-4">
            <CategorySelector
              selectedCategories={selectedCategories}
              onCategoryChange={(categories) => {
                setSelectedCategories(categories);
                if (papers.length > 0) {
                  handleSearch(0);
                }
              }}
            />
          </div>
        </div>

        {/* Main content area */}
        <div className="md:col-span-3">
          {error && (
            <div className="text-red-600 mb-4 p-4 bg-red-50 rounded-lg">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <>
              <div className="space-y-6">
                {papers.map((paper) => (
                  <PaperCard key={paper.id} paper={paper} />
                ))}
              </div>

              {papers.length === 0 && !isLoading && (
                <div className="text-center py-8 text-gray-600">
                  No papers found. Try adjusting your search criteria.
                </div>
              )}

              {totalResults > 0 && (
                <div className="mt-8 flex justify-between items-center">
                  <button
                    onClick={() => handleSearch(currentPage - 1)}
                    disabled={currentPage === 0 || isLoading}
                    className="px-4 py-2 bg-gray-200 rounded disabled:bg-gray-100 disabled:text-gray-400"
                  >
                    Previous
                  </button>
                  
                  <span className="text-gray-600">
                    Page {currentPage + 1} of {totalPages}
                  </span>
                  
                  <button
                    onClick={() => handleSearch(currentPage + 1)}
                    disabled={currentPage >= totalPages - 1 || isLoading}
                    className="px-4 py-2 bg-gray-200 rounded disabled:bg-gray-100 disabled:text-gray-400"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

