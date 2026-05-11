import React from 'react';
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Bookmark, CheckCircle2, Play } from 'lucide-react';

const RECOMMENDED_VIDEOS = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  thumbnail: `https://picsum.photos/seed/${i + 100}/320/180`,
  duration: '5:04',
  title: i === 0 ? 'Dheere Dheere Se Meri Zindagi Video...' : `YouTube Clone React Tutorial Part ${i + 1} | Full Stack`,
  channelName: i === 0 ? 'T-Series' : 'Antigravity Coding',
  views: i === 0 ? '730M views' : `${(Math.random() * 5 + 1).toFixed(1)}M views`,
  timestamp: i === 0 ? '10 years ago' : '2 days ago'
}));

const WatchPage = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-[#0f0f0f] flex justify-center">
      <div className="max-w-[1700px] w-full flex flex-col lg:flex-row px-4 lg:px-6 pt-6 gap-6">
        
        {/* Left Column: Main Video Area */}
        <div className="flex-1 lg:max-w-[calc(100%-400px)] 2xl:max-w-[calc(100%-424px)] flex flex-col pb-8">
          {/* Video Player */}
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80" 
              alt="Video Player Thumbnail" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Video Title */}
          <h1 className="text-xl md:text-xl font-bold text-black dark:text-white mt-4 line-clamp-2">
            Dheere Dheere Se Meri Zindagi Video Song (OFFICIAL) Hrithik Roshan, Sonam Kapoor | Yo Yo Honey Singh
          </h1>

          {/* Video Actions Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-3 gap-4 md:gap-0">
            {/* Channel Info */}
            <div className="flex items-center gap-4">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=TSeries" 
                alt="Channel Avatar" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800"
              />
              <div className="flex flex-col">
                <div className="flex items-center text-base font-semibold text-black dark:text-white hover:text-gray-700 cursor-pointer">
                  <span>T-Series</span>
                  <CheckCircle2 className="w-3.5 h-3.5 ml-1 fill-gray-500 text-white dark:text-[#0f0f0f]" />
                </div>
                <span className="text-xs text-gray-600 dark:text-[#aaaaaa]">311M subscribers</span>
              </div>
              <button className="ml-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              <div className="flex items-center bg-gray-100 dark:bg-[#272727] rounded-full h-9">
                <button className="flex items-center gap-2 px-4 hover:bg-gray-200 dark:hover:bg-[#3f3f3f] rounded-l-full h-full transition-colors border-r border-gray-300 dark:border-gray-600">
                  <ThumbsUp className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-sm font-medium text-black dark:text-white">4.3M</span>
                </button>
                <button className="flex items-center px-4 hover:bg-gray-200 dark:hover:bg-[#3f3f3f] rounded-r-full h-full transition-colors">
                  <ThumbsDown className="w-5 h-5 text-black dark:text-white" />
                </button>
              </div>

              <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#272727] hover:bg-gray-200 dark:hover:bg-[#3f3f3f] px-4 rounded-full h-9 transition-colors flex-shrink-0">
                <Share className="w-5 h-5 text-black dark:text-white" />
                <span className="text-sm font-medium text-black dark:text-white hidden sm:block">Share</span>
              </button>

              <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#272727] hover:bg-gray-200 dark:hover:bg-[#3f3f3f] px-4 rounded-full h-9 transition-colors flex-shrink-0">
                <Download className="w-5 h-5 text-black dark:text-white" />
                <span className="text-sm font-medium text-black dark:text-white hidden sm:block">Download</span>
              </button>

              <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#272727] hover:bg-gray-200 dark:hover:bg-[#3f3f3f] px-4 rounded-full h-9 transition-colors flex-shrink-0">
                <Bookmark className="w-5 h-5 text-black dark:text-white" />
                <span className="text-sm font-medium text-black dark:text-white hidden sm:block">Save</span>
              </button>

              <button className="flex items-center justify-center bg-gray-100 dark:bg-[#272727] hover:bg-gray-200 dark:hover:bg-[#3f3f3f] w-9 h-9 rounded-full transition-colors flex-shrink-0">
                <MoreHorizontal className="w-5 h-5 text-black dark:text-white" />
              </button>
            </div>
          </div>

          {/* Description Box */}
          <div className="mt-4 bg-gray-100 dark:bg-[#272727] hover:bg-gray-200 dark:hover:bg-[#3f3f3f] transition-colors rounded-xl p-3 cursor-pointer">
            <div className="flex flex-wrap items-center text-sm font-semibold text-black dark:text-white mb-1">
              <span className="mr-2">739M views</span>
              <span>10 years ago</span>
              <span className="ml-2 text-blue-600 dark:text-[#3ea6ff] font-normal">#ValentineSpecial #LoveSongs #TSeries</span>
            </div>
            <p className="text-sm text-black dark:text-white line-clamp-2">
              Presenting 'Dheere Dheere Se Meri Zindagi' featuring Hrithik Roshan and Sonam Kapoor. The song is sung by Yo Yo Honey Singh.
              <br/><br/>
              Click to show more...
            </p>
          </div>
          
          {/* Comments Placeholder */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-black dark:text-white mb-4">120,495 Comments</h2>
            <div className="flex gap-4">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="User" className="w-10 h-10 rounded-full" />
              <div className="flex-1 border-b border-gray-300 dark:border-[#303030] pb-1">
                <input type="text" placeholder="Add a comment..." className="w-full bg-transparent outline-none text-sm text-black dark:text-white placeholder-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Recommended Videos */}
        <div className="w-full lg:w-[400px] 2xl:w-[424px] flex flex-col gap-4">
          
          {/* Mix Playlist Box */}
          <div className="border border-gray-200 dark:border-[#303030] rounded-xl overflow-hidden">
            <div className="bg-gray-100 dark:bg-[#222222] p-4 flex justify-between items-start">
              <div>
                <h3 className="text-black dark:text-white font-semibold text-base">Mix - Dheere Dheere Se Meri Zindag...</h3>
                <p className="text-gray-600 dark:text-[#aaaaaa] text-xs mt-1">Mixes are playlists YouTube makes for you</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-white cursor-pointer" />
            </div>
            <div className="bg-white dark:bg-[#0f0f0f]">
              <div className="flex gap-2 p-3 hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
                <Play className="w-4 h-4 mt-3 text-black dark:text-white flex-shrink-0" fill="currentColor" />
                <div className="relative w-[120px] h-[68px] rounded-lg overflow-hidden flex-shrink-0">
                  <img src={RECOMMENDED_VIDEOS[0].thumbnail} alt="Mix video" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-medium px-1 rounded">5:04</span>
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                  <h4 className="text-sm font-medium text-black dark:text-white line-clamp-2 leading-tight">{RECOMMENDED_VIDEOS[0].title}</h4>
                  <p className="text-xs text-gray-600 dark:text-[#aaaaaa] mt-1">{RECOMMENDED_VIDEOS[0].channelName}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Banner */}
          <div className="w-full h-[100px] rounded-lg bg-blue-500 overflow-hidden cursor-pointer relative mt-2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 flex items-center justify-between px-6">
               <span className="text-white font-bold text-xl">0% transaction fees</span>
               <button className="bg-white text-black font-semibold px-4 py-1.5 rounded-full text-sm hover:bg-gray-100">Go for it</button>
            </div>
            <span className="absolute bottom-1 left-2 text-white text-[10px]">Ad • Sponsored</span>
          </div>

          {/* Recommended List */}
          <div className="flex flex-col gap-3 mt-2 pb-20 lg:pb-8">
            {RECOMMENDED_VIDEOS.slice(1).map((video) => (
              <div key={video.id} className="flex gap-2 group cursor-pointer">
                {/* Small Thumbnail */}
                <div className="relative w-[168px] min-w-[168px] h-[94px] rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-medium px-1 rounded">
                    {video.duration}
                  </span>
                </div>
                
                {/* Details */}
                <div className="flex flex-col pr-6 relative w-full">
                  <h4 className="text-sm font-semibold text-black dark:text-white line-clamp-2 leading-tight">
                    {video.title}
                  </h4>
                  <div className="text-xs text-gray-600 dark:text-[#aaaaaa] mt-1 flex flex-col">
                    <span className="hover:text-black dark:hover:text-white">{video.channelName}</span>
                    <span>{video.views} • {video.timestamp}</span>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-black dark:text-white absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WatchPage;
