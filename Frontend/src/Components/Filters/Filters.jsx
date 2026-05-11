import React, { useState } from 'react';

const categories = [
  "All", "Music", "Mixes", "T-Series", "Pakistani dramas", 
  "Atif Aslam", "Indian soap operas", "Movie musicals", 
  "Qawwali music", "Live", "Indian pop music", 
  "Programming", "React routers", "News", "Gaming"
];

const Filters = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="sticky top-0 bg-white dark:bg-[#0f0f0f] z-40 py-3 pb-4">
      <div className="flex gap-3 overflow-x-auto custom-scrollbar no-scrollbar scroll-smooth">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              active === category
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-gray-100 text-black hover:bg-gray-200 dark:bg-[#272727] dark:text-white dark:hover:bg-[#3f3f3f]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
