import React from 'react';
import {
    Home,
    Flame,
    PlaySquare,
    MonitorPlay,
    History,
    Clock,
    ThumbsUp,
    Compass,
    Music,
    Gamepad2,
    Trophy
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, text, active, onClick }) => (
    <div onClick={onClick} className={`flex items-center gap-5 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-[#272727] transition-colors ${active ? 'bg-gray-100 dark:bg-[#272727] font-semibold' : ''}`}>
        <Icon className={`w-6 h-6 ${active ? 'text-black dark:text-white' : 'text-black dark:text-white'} stroke-[1.5]`} />
        <span className="text-[14px] text-black dark:text-white">{text}</span>
    </div>
);

const Sidebar = ({ currentView, setCurrentView }) => {
    return (
        <aside className="w-[240px] h-full overflow-y-auto bg-white dark:bg-[#0f0f0f] px-3 pb-4 custom-scrollbar hidden md:block shrink-0">
            {/* Main Links */}
            <div className="py-3 border-b border-gray-200 dark:border-[#303030]">
                <SidebarItem 
                  icon={Home} 
                  text="Home" 
                  active={currentView === 'home'} 
                  onClick={() => setCurrentView('home')} 
                />
                <SidebarItem 
                  icon={Flame} 
                  text="Shorts" 
                  active={currentView === 'shorts'} 
                  onClick={() => setCurrentView('shorts')} 
                />
                <SidebarItem icon={MonitorPlay} text="Subscriptions" />
            </div>

            {/* You Section */}
            <div className="py-3 border-b border-gray-200 dark:border-[#303030]">
                <h3 className="px-3 py-1 text-base font-semibold text-black dark:text-white flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#272727] rounded-lg">
                    You <span className="text-lg">›</span>
                </h3>
                <SidebarItem 
                  icon={History} 
                  text="History" 
                  active={currentView === 'history'}
                  onClick={() => setCurrentView('history')}
                />
                <SidebarItem icon={PlaySquare} text="Your videos" />
                <SidebarItem icon={Clock} text="Watch later" />
                <SidebarItem icon={ThumbsUp} text="Liked videos" />
            </div>

            {/* Explore Section */}
            <div className="py-3 border-b border-gray-200 dark:border-[#303030]">
                <h3 className="px-3 mb-2 text-[15px] font-semibold text-black dark:text-white">Explore</h3>
                <SidebarItem icon={Compass} text="Trending" />
                <SidebarItem icon={Music} text="Music" />
                <SidebarItem icon={Gamepad2} text="Gaming" />
                <SidebarItem icon={Trophy} text="Sports" />
            </div>

            {/* Footer Info */}
            <div className="px-3 py-4 text-[12px] text-gray-500 dark:text-[#aaaaaa] font-medium leading-tight">
                <p className="mb-3">About Press Copyright Contact us Creators Advertise Developers</p>
                <p className="mb-3">Terms Privacy Policy & Safety How YouTube works Test new features</p>
                <p className="font-normal text-[#717171]">© 2026 Google LLC</p>
            </div>
        </aside>
    );
};

export default Sidebar;
