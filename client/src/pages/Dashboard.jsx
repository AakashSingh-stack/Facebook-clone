// 📁 frontend/src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FriendSuggestions from '../components/FriendSuggestions';
import FriendsList from '../components/FriendsList';
import { getSuggestions, addFriend, getFriends, removeFriend } from '../api';

const Dashboard = ({ user }) => {
  const [view, setView] = useState('suggestions'); // Default view
  const [suggestions, setSuggestions] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    console.log('Dashboard loaded with user:', user);
  }, []);

  const loadData = async () => {
    const [suggestionRes, friendRes] = await Promise.all([
      getSuggestions(user._id),
      getFriends(user._id),
    ]);
    setSuggestions(suggestionRes.data);
    setFriends(friendRes.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async (friendId) => {
    await addFriend(user._id, friendId);
    loadData();
  };

  const handleRemove = async (friendId) => {
    await removeFriend(user._id, friendId);
    loadData();
  };

  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans">
      <Navbar view={view} setView={setView} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {view === 'suggestions' && (
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">People You May Know</h2>
            <FriendSuggestions suggestions={suggestions} onAdd={handleAdd} />
          </div>
        )}

        {view === 'friends' && (
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Friends</h2>
            <FriendsList friends={friends} onRemove={handleRemove} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
