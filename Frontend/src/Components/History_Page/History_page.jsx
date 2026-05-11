import React from 'react';
import { Search, Trash2, PauseCircle, Settings, Flame } from 'lucide-react';
import ShortCard from '../Video_and_shorts_card/Shorts';

const HISTORY_SHORTS = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  thumbnail: `https://picsum.photos/seed/${i + 80}/400/711`,
  title: `Motivation and study tips #${i + 1}`,
  views: '3.7M'
}));

const HISTORY_FILTERS = ["All", "Videos", "Shorts", "Podcasts", "Music"];

const HistoryPage = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-[#0f0f0f] w-full flex justify-center">
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row gap-10 px-4 md:px-8 py-8">
        
        {/* Main Left Content */}
        <div className="flex-1 max-w-[800px]">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-6">Watch history</h1>
          
          {/* History Filters */}
          <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar">
            {HISTORY_FILTERS.map((filter, index) => (
              <button 
                key={filter}
                className={`whitespace-nowrap px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-black text-white dark:bg-white dark:text-black' 
                    : 'bg-gray-100 text-black hover:bg-gray-200 dark:bg-[#272727] dark:text-white dark:hover:bg-[#3f3f3f]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Today Section */}
          <div className="mb-10">
            <h2 className="text-black dark:text-white font-bold text-lg mb-6">Today</h2>
            
            {/* Shorts Shelf in History */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-6 h-6 text-red-600" fill="currentColor" />
                <span className="text-black dark:text-white font-bold text-[18px]">Shorts</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative group">
                {HISTORY_SHORTS.map((short) => (
                  <ShortCard key={short.id} {...short} />
                ))}
                
                {/* Scroll Right Button (Mock) */}
                <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-[#212121] rounded-full shadow-lg items-center justify-center hidden group-hover:flex hover:bg-gray-100 dark:hover:bg-[#3d3d3d] z-10 border border-gray-200 dark:border-[#303030]">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black dark:fill-white"><path d="M9.4 18.4l-1.4-1.4 5.6-5.6-5.6-5.6 1.4-1.4 7 7-7 7z"></path></svg>
                </button>
              </div>
            </div>
            
            {/* Standard Videos would go here... (Optional for now as screenshot only shows shorts) */}
          </div>
        </div>

        {/* Right Side Settings/Search Panel */}
        <div className="w-full md:w-[350px] flex flex-col gap-6 md:pt-16">
          <div className="flex items-center gap-4 text-black dark:text-white border-b border-black dark:border-white pb-1 group cursor-text">
            <Search className="w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search watch history" 
              className="bg-transparent outline-none flex-1 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <button className="flex items-center gap-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#272727] p-2 rounded-lg -ml-2 transition-colors">
              <Trash2 className="w-5 h-5 text-black dark:text-white" />
              <span className="text-sm">Clear all watch history</span>
            </button>
            <button className="flex items-center gap-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#272727] p-2 rounded-lg -ml-2 transition-colors">
              <PauseCircle className="w-5 h-5 text-black dark:text-white" />
              <span className="text-sm">Pause watch history</span>
            </button>
            <button className="flex items-center gap-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#272727] p-2 rounded-lg -ml-2 transition-colors">
              <Settings className="w-5 h-5 text-black dark:text-white" />
              <span className="text-sm">Manage all history</span>
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-2 pl-11">
            <button className="text-left text-sm text-black dark:text-white hover:text-gray-600 dark:hover:text-[#aaaaaa]">Comments</button>
            <button className="text-left text-sm text-black dark:text-white hover:text-gray-600 dark:hover:text-[#aaaaaa]">Posts</button>
            <button className="text-left text-sm text-black dark:text-white hover:text-gray-600 dark:hover:text-[#aaaaaa]">Live chat</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HistoryPage;
