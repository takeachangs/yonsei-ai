import React from 'react';

interface BlogFiltersProps {
  tags: string[];
  selectedTags: string[];
  selectedYear: string;
  years: string[];
  onTagChange: (tag: string) => void;
  onYearChange: (year: string) => void;
  onClearFilters: () => void;
}

export default function BlogFilters({
  tags,
  selectedTags,
  selectedYear,
  years,
  onTagChange,
  onYearChange,
  onClearFilters,
}: BlogFiltersProps) {
  return (
    <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
      <div>
        <h3 className="font-medium mb-2">Filter by Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagChange(tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Filter by Year</h3>
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {(selectedTags.length > 0 || selectedYear) && (
        <button
          onClick={onClearFilters}
          className="text-sm text-blue-500 hover:text-blue-600"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}