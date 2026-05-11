import React from 'react';
import VideoCard from '../Video_and_shorts_card/Video_card';

const CHANNEL_MOCK = {
  banner: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&h=400&fit=crop',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CodeWithHarry',
  name: 'CodeWithHarry',
  handle: '@CodeWithHarry',
  subscribers: '9.63M subscribers',
  videosCount: '2.5K videos',
  description: 'Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn...',
  link: 'codewithharry.com/courses'
};

const MOCK_VIDEOS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  thumbnail: `https://picsum.photos/seed/${i + 100}/640/360`,
  duration: '15:20',
  title: `Learn Web Development in 2026 - Complete Roadmap ${i + 1}`,
  channelAvatar: CHANNEL_MOCK.avatar,
  channelName: CHANNEL_MOCK.name,
  views: '250K',
  timestamp: '1 day ago'
}));

const ChannelsPage = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-[#0f0f0f] w-full">
      {/* Banner */}
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 pt-6">
        <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-xl overflow-hidden">
          <img src={CHANNEL_MOCK.banner} alt="Channel Banner" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Channel Info */}
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 mt-6 flex flex-col md:flex-row gap-6 items-start">
        <img 
          src={CHANNEL_MOCK.avatar} 
          alt={CHANNEL_MOCK.name} 
          className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-gray-100 object-cover"
        />
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white flex items-center gap-2">
            {CHANNEL_MOCK.name}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-500"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
          </h1>
          <div className="flex items-center gap-2 text-gray-600 dark:text-[#aaaaaa] text-sm md:text-base">
            <span className="font-medium text-black dark:text-white">{CHANNEL_MOCK.handle}</span>
            <span>•</span>
            <span>{CHANNEL_MOCK.subscribers}</span>
            <span>•</span>
            <span>{CHANNEL_MOCK.videosCount}</span>
          </div>
          <p className="text-gray-600 dark:text-[#aaaaaa] text-sm md:text-base mt-1 max-w-2xl line-clamp-2 cursor-pointer hover:text-black dark:hover:text-white">
            {CHANNEL_MOCK.description} <span className="font-medium">...more</span>
          </p>
          <a href="#" className="text-blue-600 dark:text-[#3ea6ff] text-sm md:text-base hover:underline mt-1 font-medium">
            {CHANNEL_MOCK.link} <span className="text-black dark:text-white">and 4 more links</span>
          </a>
          
          <div className="mt-4 flex items-center gap-3">
            <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-semibold text-sm hover:opacity-90">
              Subscribe
            </button>
            <button className="border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 dark:hover:bg-[#272727]">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 mt-8 border-b border-gray-200 dark:border-[#303030]">
        <div className="flex items-center gap-8 text-black dark:text-white font-medium text-[15px]">
          <button className="pb-3 border-b-2 border-black dark:border-white">Home</button>
          <button className="pb-3 text-gray-600 dark:text-[#aaaaaa] hover:text-black dark:hover:text-white">Videos</button>
          <button className="pb-3 text-gray-600 dark:text-[#aaaaaa] hover:text-black dark:hover:text-white">Shorts</button>
          <button className="pb-3 text-gray-600 dark:text-[#aaaaaa] hover:text-black dark:hover:text-white">Courses</button>
          <button className="pb-3 text-gray-600 dark:text-[#aaaaaa] hover:text-black dark:hover:text-white">Playlists</button>
          <button className="pb-3 text-gray-600 dark:text-[#aaaaaa] hover:text-black dark:hover:text-white">Posts</button>
        </div>
      </div>

      {/* Channel Content (For You) */}
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 mt-6 pb-20">
        <h2 className="text-black dark:text-white font-bold text-lg mb-4">For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10">
          {MOCK_VIDEOS.map(video => (
             <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelsPage;
