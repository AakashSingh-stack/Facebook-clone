// 📁 frontend/src/components/FriendSuggestions.jsx
import React from 'react';

const FriendSuggestions = ({ suggestions, onAdd }) => {
  if (suggestions.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg mt-4 text-center">
        <p className="text-gray-500">No friend suggestions available right now 🤷‍♂️</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {suggestions.map((user) => (
        <div
          key={user._id}
          className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
        >
          <img
            src={user.avatar || `https://i.pravatar.cc/150?u=${user._id}`}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
          />
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{user.email}</p>
          <button
            onClick={() => onAdd(user._id)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md hover:shadow-lg transition"
          >
            Add Friend
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendSuggestions;
