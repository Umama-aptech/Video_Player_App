import React from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Share, MoreHorizontal, Play, Volume2, Bookmark, Repeat } from 'lucide-react';

const SHORTS_MOCK = [
  {
    id: 1,
    videoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    title: 'Give Respect Take Respect | Motivation4lines',
    channel: '@Motivation4lines',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Motivation',
    likes: '740K',
    comments: '61',
    song: 'Killers From The Northside - Kordhell'
  },
  {
    id: 2,
    videoUrl: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800&q=80',
    title: 'Top 5 Coding Extensions for VSCode 🚀🔥',
    channel: '@Antigravity',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Code',
    likes: '1.2M',
    comments: '4.5K',
    song: 'Original Sound - Antigravity'
  },
  {
    id: 3,
    videoUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    title: 'How to build a Youtube Clone in 10 minutes 🤯',
    channel: '@WebDevShorts',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web',
    likes: '890K',
    comments: '1.2K',
    song: 'LoFi Beats to Code To'
  }
];

const ShortsViewer = () => {
  return (
    <div className="flex-1 bg-[#0f0f0f] h-[calc(100vh-56px)] overflow-y-auto snap-y snap-mandatory no-scrollbar">
      <div className="flex flex-col items-center pt-6 pb-20">
        {SHORTS_MOCK.map((short) => (
          <div key={short.id} className="h-[calc(100vh-80px)] w-full flex justify-center items-center py-4 snap-center shrink-0 mb-8">
            {/* Single Short Container - Everything overlays this relative box */}
            <div className="relative h-full aspect-[9/16] bg-black sm:rounded-xl overflow-hidden shadow-2xl group">
              
              {/* Background Video Image */}
              <img 
                src={short.videoUrl} 
                alt={short.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-90" 
              />
              
              {/* Gradient Overlays for text readability */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Top Controls Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <div className="flex items-center gap-4">
                  <Play className="w-6 h-6 text-white fill-white cursor-pointer" />
                  <Volume2 className="w-6 h-6 text-white cursor-pointer" />
                </div>
                <MoreHorizontal className="w-6 h-6 text-white cursor-pointer" />
              </div>
              
              {/* Bottom Left Info Overlay */}
              <div className="absolute bottom-4 left-4 right-16 flex flex-col items-start gap-3 z-10">
                {/* Save Music Button */}
                <button className="flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors backdrop-blur-sm">
                  <Bookmark className="w-4 h-4" />
                  Save music
                </button>
                
                {/* Channel Info */}
                <div className="flex items-center gap-3 mt-1">
                  <img src={short.channelAvatar} alt="Channel" className="w-9 h-9 rounded-full bg-gray-800 border border-white/20" />
                  <span className="text-white font-semibold text-[15px] drop-shadow-md">{short.channel}</span>
                  <button className="bg-white text-black px-3.5 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                    Subscribe
                  </button>
                </div>
                
                {/* Title */}
                <p className="text-white text-[15px] font-medium leading-snug drop-shadow-md line-clamp-2 pr-4">
                  <Play className="inline-block w-4 h-4 mr-1 fill-white" />
                  {short.title} #shorts #viral
                </p>
                
                {/* Music/Sound track */}
                <div className="flex items-center gap-2 text-white text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm truncate max-w-[90%]">
                  <span className="text-xs truncate">🎵 {short.song}</span>
                </div>
              </div>

              {/* Right Action Buttons Overlay */}
              <div className="absolute bottom-4 right-3 flex flex-col gap-5 items-center z-10">
                <button className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                    <ThumbsUp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs font-medium drop-shadow-md">Like</span>
                </button>
                
                <button className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                    <ThumbsDown className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs font-medium drop-shadow-md">Dislike</span>
                </button>

                <button className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-xs font-medium drop-shadow-md">174</span>
                </button>

                <button className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                    <Share className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs font-medium drop-shadow-md">Share</span>
                </button>

                <button className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                    <Repeat className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-xs font-medium drop-shadow-md">5</span>
                </button>

                <div className="w-10 h-10 mt-2 bg-gray-800 rounded-md overflow-hidden border-2 border-black/40 cursor-pointer hover:scale-105 transition-transform">
                  <img src={short.channelAvatar} alt="Sound" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Bottom Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 z-20">
                <div className="h-full bg-red-600 w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsViewer;
