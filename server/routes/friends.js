// 📁 backend/routes/friends.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/suggestions/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('friends');
  const excludeIds = [user._id, ...user.friends.map(f => f._id)];
  const suggestions = await User.find({ _id: { $nin: excludeIds } });
  res.json(suggestions);
});

router.post('/add', async (req, res) => {
  const { userId, friendId } = req.body;
  await User.findByIdAndUpdate(userId, { $addToSet: { friends: friendId } });
  await User.findByIdAndUpdate(friendId, { $addToSet: { friends: userId } });
  res.json({ message: 'Friend added' });
});

router.post('/remove', async (req, res) => {
  const { userId, friendId } = req.body;
  await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } });
  await User.findByIdAndUpdate(friendId, { $pull: { friends: userId } });
  res.json({ message: 'Friend removed' });
});

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('friends');
  res.json(user.friends);
});

module.exports = router;
