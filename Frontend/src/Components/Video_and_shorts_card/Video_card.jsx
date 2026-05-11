import React from 'react';
import { MoreVertical, CheckCircle2 } from 'lucide-react';

const VideoCard = ({ 
  thumbnail, 
  duration, 
  title, 
  channelAvatar, 
  channelName, 
  views, 
  timestamp,
  onChannelClick,
  onClick
}) => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer group" onClick={onClick}>
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video sm:rounded-xl overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {duration}
        </span>
      </div>

      {/* Video Info Container */}
      <div className="flex gap-3 px-3 sm:px-0">
        {/* Channel Avatar */}
        <div className="flex-shrink-0 pt-0.5" onClick={onChannelClick}>
          <img 
            src={channelAvatar} 
            alt={channelName} 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        
        {/* Text Details */}
        <div className="flex flex-col flex-1 pr-2">
          <div className="flex justify-between items-start">
            <h3 className="text-black dark:text-white font-semibold text-base line-clamp-2 leading-tight">
              {title}
            </h3>
            <button className="text-black dark:text-white pt-1 -mr-2">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col mt-1 text-[13.5px] text-gray-600 dark:text-[#aaaaaa]">
            <div 
              className="flex items-center hover:text-black dark:hover:text-white transition-colors w-max"
              onClick={onChannelClick}
            >
              <span>{channelName}</span>
              <CheckCircle2 className="w-3.5 h-3.5 ml-1 fill-gray-500 text-white dark:text-[#0f0f0f]" />
            </div>
            
            <div className="flex items-center mt-0.5">
              <span>{views} views</span>
              <span className="mx-1 text-[10px]">•</span>
              <span>{timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;