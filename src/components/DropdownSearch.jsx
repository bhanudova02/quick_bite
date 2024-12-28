import React, { useState } from "react";

const DropdownSearch = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(e.target.value.length > 0); // Show dropdown when there is text
  };

  const handleSelectItem = (item) => {
    setQuery(item);
    setIsOpen(false); // Close dropdown after selection
  };

  // Example items for dropdown (Cities)
  const items = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
    "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville",
    "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis",
    "Seattle", "Denver", "Washington D.C.", "Boston"
  ];

  return (
    <div className="relative w-64">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search cities..."
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isOpen && (
        <ul className="absolute left-0 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {items
            .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
            .map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelectItem(item)}
                className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSearch;
