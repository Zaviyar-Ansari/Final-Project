import React from 'react'
import {Link} from 'react-router-dom'
import {FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa'
import {useSelector} from 'react-redux'

const Navbar = () => {
const products = useSelector(state => state.cart.products )

  return (
    <nav className='bg-white shadow-md'>
      <div className='container flex items-center justify-between px-4 py-4 mx-auto md:px-16 lg:px-24'>
        <div className='text-lg font-bold '>
          <Link to="/">E-SHOP</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form> <input type='text' placeholder='Search Product' className='w-full px-4 py-2 border' ></input>
          <FaSearch className='absolute text-red-500 top-3 right-3'></FaSearch>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
           <Link to="/cart" className="relative">
           <FaShoppingCart className='text-lg'></FaShoppingCart>
           {products.length > 0 && (
            <span className="absolute top-0 flex items-center justify-center w-3 text-xs text-white bg-red-600 rounded-full left-3">
              {products.length}
            </span>
           )}
           </Link>
           <button className='hidden md:block'>Login|Register</button>
           <button className='block md:hidden'>
            <FaUser></FaUser>
           </button>
        </div>
      </div>
      <div className='flex items-center justify-center py-4 space-x-10 text-sm font-bold '>
        <Link to="/" className='hover:underline'>Home</Link>
        <Link  to="/shop" className='hover:underline'>Shop</Link>
        <Link  to="/" className='hover:underline'>Home</Link>
        <Link  to="/" className='hover:underline'>Home</Link>

      </div>
    </nav> 
  )
}

export default Navbar
