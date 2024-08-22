import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const products = useSelector(state => state.cart.products);

  return (
    <nav className='bg-white shadow-md'>
      <div className='container flex items-center justify-between px-4 py-4 mx-auto md:px-16 lg:px-24'>
        <div className='text-lg font-bold '>
          <Link to="/">E-SHOP</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form>
            <input type='text' placeholder='Search Product' className='w-full px-4 py-2 border' />
            <FaSearch className='absolute text-red-500 top-3 right-3' />
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to="/cart" className="relative">
            <FaShoppingCart className='text-lg' />
            {products.length > 0 && (
              <span className="absolute top-0 flex items-center justify-center w-3 text-xs text-white bg-red-600 rounded-full left-3">
                {products.length}
              </span>
            )}
          </Link>
          <button className='hidden md:block' onClick={() => setIsModelOpen(true)}>Login|Register</button>
          <button className='block md:hidden'>
            <FaUser />
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center py-4 space-x-10 text-sm font-bold '>
        <Link to="/" className='hover:underline'>Home</Link>
        <Link to="/shop" className='hover:underline'>Shop</Link>
        <Link to="/" className='hover:underline'>About us</Link>
        <Link to="/" className='hover:underline'>Contact us</Link>
      </div>
      <LoginModal
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </nav>
  );
}

export default Navbar;
