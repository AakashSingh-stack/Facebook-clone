import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { login, signup } from '../api';

const LoginPage = ({ onLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // Set mode based on route
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  const handleAuth = async (form) => {
    try {
      const res = isLogin ? await login(form) : await signup(form);
  
      console.log("🔍 Full response from backend:", res.data); // ADD THIS
  
      const { token, user } = res.data;
  
      console.log("✅ Auth success. Token:", token);
      console.log("✅ User:", user);
  
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      onLogin(user);
      navigate('/');
    } catch (error) {
      console.error('❌ Authentication failed:', error.response?.data || error.message);
      alert('Something went wrong. Please try again.');
    }
  };
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          {isLogin ? 'Log in to your account' : 'Create a new account'}
        </h2>

        <AuthForm isLogin={isLogin} onSubmit={handleAuth} />

        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => navigate(isLogin ? '/signup' : '/login')}
            className="text-blue-600 hover:underline font-medium"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
