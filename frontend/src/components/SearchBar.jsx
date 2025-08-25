import { useState } from "react";
import { X } from "lucide-react"; // for clear button (optional)

export default function SearchBar({ onSearch, onClear }) {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    onSearch(query);
  };

  const handleClearClick = () => {
    setQuery("");
    onClear();
  };

  return (
    <div className="flex gap-2 items-center w-full">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded px-3 py-2 w-full pr-8"
        />
        {query && (
          <button
            onClick={handleClearClick}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <button
        onClick={handleSearchClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}
