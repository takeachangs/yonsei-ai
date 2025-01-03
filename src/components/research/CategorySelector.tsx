interface Category {
  id: string;
  name: string;
  description: string;
}

const ARXIV_CATEGORIES: Category[] = [
  { id: 'cs.AI', name: 'Artificial Intelligence', description: 'Neural nets, Fuzzy systems, etc.' },
  { id: 'cs.LG', name: 'Machine Learning', description: 'Learning theory, ML algorithms' },
  { id: 'cs.CL', name: 'Computation and Language', description: 'Natural language processing' },
  { id: 'cs.CV', name: 'Computer Vision', description: 'Image processing, recognition' },
  { id: 'cs.RO', name: 'Robotics', description: 'Robotics and automation' },
  { id: 'stat.ML', name: 'Machine Learning (Stats)', description: 'Statistical learning' },
  { id: 'cs.NE', name: 'Neural and Evolutionary', description: 'Neural networks, genetic algorithms' },
];

interface CategorySelectorProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

export default function CategorySelector({
  selectedCategories,
  onCategoryChange,
}: CategorySelectorProps) {
  const handleToggleCategory = (categoryId: string) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    onCategoryChange(newCategories);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Categories</h3>
      <div className="grid grid-cols-1 gap-2">
        {ARXIV_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="relative flex items-start py-2"
          >
            <div className="flex items-center h-5">
              <input
                id={category.id}
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleToggleCategory(category.id)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={category.id} className="font-medium text-gray-700">
                {category.name}
                <span className="text-gray-500 ml-2">({category.id})</span>
              </label>
              <p className="text-gray-500">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-2 border-t">
        <button
          onClick={() => onCategoryChange(ARXIV_CATEGORIES.map(c => c.id))}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Select All
        </button>
        <button
          onClick={() => onCategoryChange([])}
          className="text-sm text-blue-600 hover:text-blue-800 ml-4"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export { ARXIV_CATEGORIES };