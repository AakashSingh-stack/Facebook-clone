// 📁 frontend/src/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const signup = (data) => axios.post(`${API_BASE}/auth/signup`, data);
export const login = (data) => axios.post(`${API_BASE}/auth/login`, data);
export const getSuggestions = (userId) => axios.get(`${API_BASE}/friends/suggestions/${userId}`);
export const addFriend = (userId, friendId) => axios.post(`${API_BASE}/friends/add`, { userId, friendId });
export const removeFriend = (userId, friendId) => axios.post(`${API_BASE}/friends/remove`, { userId, friendId });
export const getFriends = (userId) => axios.get(`${API_BASE}/friends/${userId}`);
