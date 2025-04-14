import React from 'react';
import AuthForm from '../components/AuthForm';
import { signup } from '../api';
import { useNavigate } from 'react-router-dom';

const SignupPage = ({ onSignup }) => {
  const navigate = useNavigate();

  const handleSignup = async (form) => {
    const res = await signup(form);
    const { token, user } = res.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    onSignup(user);
    navigate('/'); // 👈 this will take the user to Dashboard ("/")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create a new account</h2>
        <AuthForm isLogin={false} onSubmit={handleSignup} />
      </div>
    </div>
  );
};

export default SignupPage;
