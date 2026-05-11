import React from 'react';

const ShortCard = ({ thumbnail, title, views, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col gap-2 cursor-pointer group w-full">
      {/* Thumbnail Container (9:16 aspect ratio) */}
      <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Text Details */}
      <div className="flex flex-col pr-4">
        <h3 className="text-black dark:text-white font-semibold text-[15px] line-clamp-2 leading-tight">
          {title}
        </h3>
        <span className="text-gray-600 dark:text-[#aaaaaa] text-sm mt-1">
          {views} views
        </span>
      </div>
    </div>
  );
};

export default ShortCard;