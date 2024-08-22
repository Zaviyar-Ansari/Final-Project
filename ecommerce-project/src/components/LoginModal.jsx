import React from 'react';
import Login from './Login';
import Register from './Register';

const LoginModal = ({ isModelOpen, setIsModelOpen, isLogin, setIsLogin }) => {
  if (!isModelOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative z-60'>
        <button
          className='absolute top-4 right-4 text-gray-300 text-3xl z-70'
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Register setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default LoginModal;
