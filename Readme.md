# Facebook Clone - MERN Stack Social App

A simplified Facebook-style social networking app built with the MERN stack (MongoDB, Express, React, Node.js) and styled using Tailwind CSS. Users can sign up, log in, view friend suggestions, add friends, and manage their friends list.

## Features

- **Authentication**: Signup & login (no email verification)
- **Friend Suggestions**: Users get a list of other users to add
- **Friends List**: View and remove friends
- **Modern UI**: Facebook-inspired design using Tailwind CSS
- **Dynamic Routing**: React Router navigation
- **JWT Authentication**: Secure backend sessions

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Axios
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- CORS & dotenv for server setup

## Setup Instructions

### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/facebook-clone.git
cd facebook-clone


---

2. Setup Backend

cd backend
npm install

Create a .env file:

MONGO_URI=mongodb://localhost:27017/facebook-clone
JWT_SECRET=your_secret_key

Start the backend server:

npm start


---

3. Setup Frontend

cd ../frontend
npm install
npm run dev


---

Folder Structure

facebook-clone/
│
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── api.js
│   └── index.html
│
└── README.md


---

##Screenshots
##Login
##SignUp
##Suggestions
##Friends List
> (Add screenshots of signup, dashboard, suggestions, and friends list)




---

Author

Aakash Singh
