interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  onSearch: () => void;
  isLoading?: boolean;
}

export default function SearchBar({
  query,
  onQueryChange,
  onSearch,
  isLoading = false,
}: SearchBarProps) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSearch()}
        placeholder="Search arXiv papers..."
        className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        onClick={onSearch}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
}