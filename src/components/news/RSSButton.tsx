import { useState } from 'react';

export default function RSSButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1" />
        </svg>
        Subscribe to Feed
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <div className="py-1">
            <a
              href="/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              RSS Feed
            </a>
            <a
              href="/feed.json"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              JSON Feed
            </a>
          </div>
        </div>
      )}
    </div>
  );
}