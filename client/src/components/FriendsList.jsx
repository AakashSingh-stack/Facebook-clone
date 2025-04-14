// 📁 frontend/src/components/FriendsList.jsx
import React from 'react';

const FriendsList = ({ friends, onRemove }) => {
  if (friends.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg mt-4 text-center">
        <p className="text-gray-500">You don't have any friends yet 😔</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {friends.map((friend) => (
        <div
          key={friend._id}
          className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
        >
          <img
            src={friend.avatar || `https://i.pravatar.cc/150?u=${friend._id}`}
            alt={friend.name}
            className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
          />
          <h3 className="text-lg font-semibold text-gray-800">{friend.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{friend.email}</p>
          <button
            onClick={() => onRemove(friend._id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 shadow-md hover:shadow-lg transition"
          >
            Unfriend
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
