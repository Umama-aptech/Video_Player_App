import { useState } from 'react'
import { Flame } from 'lucide-react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import VideoCard from './Components/Video_and_shorts_card/Video_card'
import ShortCard from './Components/Video_and_shorts_card/Shorts'
import Filters from './Components/Filters/Filters'
import ShortsViewer from './Components/Shorts_viewer/Shorts_viewer'
import ChannelsPage from './Components/Channels_Page/Channels_page'
import HistoryPage from './Components/History_Page/History_page'
import WatchPage from './Components/Watch_Page/Watch_page'

const MOCK_VIDEOS = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  thumbnail: `https://picsum.photos/seed/${i + 1}/640/360`,
  duration: '10:05',
  title: `Building a Complete YouTube Clone with React & Tailwind CSS - Part ${i + 1}`,
  channelAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`,
  channelName: 'Antigravity Coding',
  views: '1.2M',
  timestamp: '2 days ago'
}));

const MOCK_SHORTS = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  thumbnail: `https://picsum.photos/seed/${i + 50}/400/711`,
  title: `Insane coding tricks you didn't know #${i + 1}`,
  views: '5M'
}));

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'shorts':
        return <ShortsViewer />;
      case 'channel':
        return <ChannelsPage />;
      case 'history':
        return <HistoryPage />;
      case 'watch':
        return <WatchPage />;
      case 'home':
      default:
        return (
          <div className="flex-1 overflow-y-auto bg-white dark:bg-[#0f0f0f]">
            <div className="md:px-4">
              <Filters />

              {/* Top Video Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 pt-6">
                {MOCK_VIDEOS.slice(0, 8).map((video) => (
                  <VideoCard
                    key={video.id}
                    {...video}
                    onClick={() => setCurrentView('watch')}
                    onChannelClick={(e) => {
                      e.stopPropagation();
                      setCurrentView('channel');
                    }}
                  />
                ))}
              </div>

              {/* Shorts Shelf */}
              <div className="my-10 ">
                <div className="flex items-center gap-2 mb-6 text-xl font-bold">
                  <Flame className="w-6 h-6 text-green-600" fill="currentColor" />
                  <span>Shorts</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {MOCK_SHORTS.map((short) => (
                    <ShortCard
                      key={short.id}
                      {...short}
                      onClick={() => setCurrentView('shorts')}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Video Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 pb-20">
                {MOCK_VIDEOS.slice(8).map((video) => (
                  <VideoCard
                    key={video.id}
                    {...video}
                    onClick={() => setCurrentView('watch')}
                    onChannelClick={(e) => {
                      e.stopPropagation();
                      setCurrentView('channel');
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-black dark:text-white flex flex-col">
      <Navbar />

      <main className="pt-14 flex h-screen overflow-hidden">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        {renderContent()}
      </main>
    </div>
  )
}

export default App
