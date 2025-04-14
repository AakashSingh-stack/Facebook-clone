// 📁 frontend/src/components/Navbar.jsx
import React from 'react';
import { UserPlus, Users } from 'lucide-react';

const Navbar = ({ view, setView }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold tracking-wide">Facebook</h1>

        <div className="flex gap-2 sm:gap-4">
          <button
            onClick={() => setView('suggestions')}
            className={`flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full transition duration-150 
              hover:bg-blue-700 ${view === 'suggestions' ? 'bg-blue-800' : ''}`}
            title="Friend Suggestions"
          >
            <UserPlus className="w-5 h-5" />
            <span className="hidden sm:inline">Suggestions</span>
          </button>

          <button
            onClick={() => setView('friends')}
            className={`flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full transition duration-150 
              hover:bg-blue-700 ${view === 'friends' ? 'bg-blue-800' : ''}`}
            title="Friends List"
          >
            <Users className="w-5 h-5" />
            <span className="hidden sm:inline">Friends</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
