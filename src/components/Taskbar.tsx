import React from 'react';
import { useOS } from '../context/OSContext';
import { Search, Wifi, Volume2, Battery, Heart, Star } from 'lucide-react';

const Taskbar = () => {
  const { state, dispatch } = useOS();
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const currentDate = new Date().toLocaleDateString([], { month: 'short', day: 'numeric' });

  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-white/20 backdrop-blur-xl border-t border-white/30 flex items-center justify-between px-4 z-30">
      {/* Start button */}
      <div className="flex items-center space-x-3">
        <button 
          className="px-5 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-lg border border-white/20"
          onClick={() => dispatch({ type: 'TOGGLE_START_MENU' })}
        >
          <span className="text-white font-bold">Start</span>
          <Heart className="w-4 h-4 text-white ml-2" />
        </button>

        <button className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-200 border border-white/20">
          <Search className="w-5 h-5 text-pink-500" />
        </button>
      </div>

      {/* Running apps */}
      <div className="flex items-center space-x-2">
        {state.windows.map(window => (
          <div
            key={window.id}
            className={`px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
              state.activeWindow === window.id
                ? 'bg-white/30 border border-white/40 shadow-md'
                : 'bg-white/10 hover:bg-white/20 border border-transparent'
            }`}
            onClick={() => dispatch({ type: 'SET_ACTIVE_WINDOW', payload: window.id })}
          >
            <span className="text-purple-700 text-sm font-medium">{window.title}</span>
          </div>
        ))}
      </div>

      {/* System tray */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-3 text-pink-400">
          <Wifi className="w-4 h-4" />
          <Volume2 className="w-4 h-4" />
          <Battery className="w-4 h-4" />
          <Star className="w-4 h-4 text-yellow-400" />
        </div>
        
        <div className="text-right bg-pink-200/50 px-3 py-1 rounded-xl border border-pink-200">
          <div className="text-pink-700 text-sm font-medium">{currentTime}</div>
          <div className="text-pink-500 text-xs">{currentDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;