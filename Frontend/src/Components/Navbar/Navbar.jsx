import React, { useState } from 'react';
import { Menu, Search, Mic, Plus, Bell, ArrowLeft, History, ArrowUpLeft } from 'lucide-react';

const RECENT_SEARCHES = [
  { text: 'god is always with me' },
  { text: 'react js full course', thumbnail: 'https://picsum.photos/seed/react/40/22' },
  { text: 'mere sarkar meri baat banaye rakhna', thumbnail: 'https://picsum.photos/seed/sarkar/40/22' },
  { text: 'land cruiser', thumbnail: 'https://picsum.photos/seed/car/40/22' },
  { text: 'ruqyah by qari abdul basit', thumbnail: 'https://picsum.photos/seed/qari/40/22' },
  { text: 'youtube clone in react js' },
  { text: 'shainillah ya abdul qadir qawwali', thumbnail: 'https://picsum.photos/seed/qaw/40/22' },
  { text: 'indian idol jyotirmayee nayak', thumbnail: 'https://picsum.photos/seed/idol/40/22' },
  { text: 'qasim da sehra', thumbnail: 'https://picsum.photos/seed/qasim/40/22' },
  { text: 'qawwali', thumbnail: 'https://picsum.photos/seed/qawwali/40/22' }
];

const Navbar = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 h-14 bg-white dark:bg-[#0f0f0f] z-50">
        {/* Left section: Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#272727] focus:outline-none focus:bg-gray-200 dark:focus:bg-[#3f3f3f] transition-colors">
            <Menu className="w-6 h-6 text-black dark:text-white" strokeWidth={1.5} />
          </button>
          <div className="flex items-center gap-1 cursor-pointer" title="YouTube Home">
            {/* YouTube Logo Simulation */}
            <div className="bg-[green] rounded-lg w-[30px] h-[20px] flex items-center justify-center">
              <div className="w-0 h-0 border-t-[3.5px] border-t-transparent border-l-[5.5px] border-l-white border-b-[3.5px] border-b-transparent ml-0.5"></div>
            </div>
            <span className="text-xl font-semibold tracking-tighter text-black dark:text-white font-[Roboto,Arial,sans-serif] ml-0.5">
              MUA YouTube
            </span>
            <span className="text-[#aaaaaa] text-[10px] -mt-4 ml-0.5">PK</span>
          </div>
        </div>

        {/* Center section: Search Bar & Mic (Hidden on small screens) */}
        <div className="hidden md:flex items-center flex-1 max-w-[720px] ml-10 mr-4">
          <div className="flex items-center w-full flex-1 border border-gray-300 dark:border-[#303030] rounded-l-full rounded-r-full overflow-hidden bg-white dark:bg-[#121212] ml-10 group focus-within:border-blue-500 focus-within:shadow-inner dark:focus-within:border-[#1c62b9]">
            <div className="pl-4 pr-2 py-2 hidden sm:group-focus-within:block">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" strokeWidth={1.5} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 sm:group-focus-within:pl-1 py-[6px] outline-none bg-transparent text-base text-black dark:text-white font-normal"
            />
            <button
              className="px-5 py-2 bg-gray-100 dark:bg-[#222222] border-l border-gray-300 dark:border-[#303030] hover:bg-gray-200 dark:hover:bg-[#303030] transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" strokeWidth={1.5} />
            </button>
          </div>
          <button
            className="ml-4 p-2.5 rounded-full bg-gray-100 dark:bg-[#181818] hover:bg-gray-200 dark:hover:bg-[#303030] transition-colors flex-shrink-0"
            title="Search with your voice"
          >
            <Mic className="w-5 h-5 text-black dark:text-white" strokeWidth={1.5} />
          </button>
        </div>

        {/* Right section: Icons */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Mobile Search & Mic Icons */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#272727] transition-colors"
            onClick={() => setIsMobileSearchOpen(true)}
          >
            <Search className="w-6 h-6 text-black dark:text-white" strokeWidth={1.5} />
          </button>
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#272727] transition-colors mr-1 sm:mr-0">
            <Mic className="w-6 h-6 text-black dark:text-white" strokeWidth={1.5} />
          </button>

          {/* Create Button */}
          <button
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-[#272727] hover:bg-gray-200 dark:hover:bg-[#3f3f3f] transition-colors"
            title="Create"
          >
            <Plus className="w-5 h-5 text-black dark:text-white" strokeWidth={2} />
            <span className="text-black dark:text-white font-medium text-sm hidden sm:block">Create</span>
          </button>
          
          {/* Notifications */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#272727] transition-colors relative"
            title="Notifications"
          >
            <Bell className="w-6 h-6 text-black dark:text-white" strokeWidth={1.5} />
          </button>

          {/* Avatar */}
          <button className="ml-1 sm:ml-2 rounded-full overflow-hidden w-8 h-8 flex items-center justify-center bg-[#2e7d32] text-white flex-shrink-0 text-sm font-medium">
            C
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-white dark:bg-[#0f0f0f] z-[60] flex flex-col md:hidden animate-in slide-in-from-right-full duration-200">
          {/* Top Search Bar */}
          <div className="flex items-center px-2 h-14 border-b border-transparent dark:border-transparent">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#272727]"
              onClick={() => setIsMobileSearchOpen(false)}
            >
              <ArrowLeft className="w-6 h-6 text-black dark:text-white" strokeWidth={1.5} />
            </button>
            <div className="flex-1 bg-gray-100 dark:bg-[#222222] rounded-full mx-2 flex items-center h-8">
              <input 
                type="text" 
                placeholder="Search YouTube" 
                className="w-full bg-transparent text-black dark:text-white px-4 outline-none text-sm placeholder-gray-500"
                autoFocus
              />
            </div>
            <button className="p-2 rounded-full bg-gray-100 dark:bg-[#222222]">
              <Mic className="w-5 h-5 text-black dark:text-white" strokeWidth={1.5} />
            </button>
          </div>
          
          {/* Recent Searches List */}
          <div className="flex-1 overflow-y-auto">
            {RECENT_SEARCHES.map((item, index) => (
              <div key={index} className="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
                <History className="w-6 h-6 text-black dark:text-white mr-4 p-0.5" strokeWidth={1.5} />
                <span className="flex-1 text-black dark:text-white font-semibold text-[15px] line-clamp-2 pr-4">
                  {item.text}
                </span>
                {item.thumbnail && (
                  <img 
                    src={item.thumbnail} 
                    alt="thumbnail" 
                    className="w-11 h-6 object-cover rounded-sm mr-4 flex-shrink-0"
                  />
                )}
                <ArrowUpLeft className="w-6 h-6 text-black dark:text-white p-0.5 flex-shrink-0" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;