Here’s a cleaned-up and well-formatted README.md for your Facebook Clone project, following the style of your AI Trip Planner example:


---

Facebook Clone - MERN Stack Social App

Facebook Clone is a social networking web application inspired by Facebook. Users can sign up, log in, view friend suggestions, add friends, and manage their friends list — all in a clean, responsive interface.


---

Features

Authentication: Secure signup & login (no email verification)

Friend Suggestions: View suggested users to add as friends

Friends List: View and remove current friends

Facebook-like UI: Modern interface styled with Tailwind CSS

Real-time UI Updates: React state updates on friend actions

Routing: Smooth navigation using React Router



---

Technology Stack

Frontend: React, Tailwind CSS, React Router, Axios, Lucide Icons

Backend: Node.js, Express.js, MongoDB (Mongoose)

Authentication: JSON Web Tokens (JWT)

Development Tools: Vite, dotenv, CORS



---

Installation

Prerequisites

Node.js (v14 or above)

npm (v6 or above)

MongoDB (local or MongoDB Atlas)



---

Steps

1. Clone the Repository:

git clone https://github.com/AakashSingh-stack/facebook-clone.git
cd facebook-clone


2. Backend Setup:

cd backend
npm install

Create a .env file in the backend folder:

MONGO_URI=mongodb://localhost:27017/facebook-clone
JWT_SECRET=your_jwt_secret

Start the backend server:

npm start


3. Frontend Setup:

cd ../frontend
npm install
npm run dev




---

Usage

1. Sign Up / Log In: Users register or log in with basic credentials.


2. Dashboard: After login, users are redirected to a dashboard.


3. Friend Suggestions: Browse and add users from the suggestion list.


4. Friends List: View added friends and remove them anytime.


5. Navigation: Use the navbar to toggle between views.




---

API Endpoints

Authentication

POST /api/auth/signup - Register new user

POST /api/auth/login - Login user


Friends

GET /api/friends/suggestions/:userId - Fetch suggested users

GET /api/friends/:userId - Fetch user's friends

POST /api/friends/add - Add friend

POST /api/friends/remove - Remove friend



---

Code Structure

facebook-clone/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── App.jsx, main.jsx
│   │   └── index.css
│   └── vite.config.js
│
└── README.md


---

Testing

Unit Testing: Jest

Integration Testing: Axios mocks

UI Testing: Cypress (optional setup)



---

Deployment

1. Frontend Production Build:

npm run build


2. Backend Deployment:

Deploy with services like Heroku, Render, or Railway.

Set environment variables for Mongo URI and JWT secret.





---

Acknowledgments

Tailwind CSS – for styling

Lucide Icons – for icon support

MongoDB – for NoSQL data storage

React Router – for dynamic routing

JWT – for secure authentication



---

Author

Aakash Singh


---

Let me know if you'd like to include badges, screenshots, or a live demo link. I can generate those too!

