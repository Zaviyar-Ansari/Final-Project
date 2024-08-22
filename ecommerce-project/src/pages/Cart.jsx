import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../assets/Images/emptycart.png';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import { useNavigate} from "react-router-dom"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState('Main Street, 0012');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className='container px-4 py-8 mx-auto min-h-96 md:px-16 lg:px-24'>
      {cart.products.length > 0 ? (
        <div>
          <h3 className='mb-4 text-2xl font-semibold'>SHOPPING CART</h3>
          <div className='flex flex-col justify-between mt-8 space-x-10 md:flex-row'>
            <div className='md:w-2/3'>
              <div className='flex items-center justify-between mb-4 text-xs font-bold border-b'>
                <p>PRODUCTS</p>
                <div className='flex space-x-8'>
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              {cart.products.map((product) => (
                <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                  <div className='items-center space-x-4 md:flex'>
                    <img src={product.image} alt={product.name} className='object-contain w-16 h-16 rounded' />
                    <div className='flex-1 ml-4'>
                      <h3 className='text-lg font-semibold'>{product.name}</h3>
                    </div>
                  </div>
                  <div className='flex items-center space-x-12'>
                    <p>${product.price}</p>
                    <div className='flex items-center justify-center border'>
                      <button className='text-xl font-bold px-1.5 border-r' 
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                      >-</button>
                      <p className='px-2 text-xl'>{product.quantity}</p>
                      <button className='px-1 text-xl border-l'
                      onClick={() => dispatch(increaseQuantity(product.id))}
                      >+</button>
                    </div>
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                    <button className='text-red-500 hover:text-red-700' onClick={() => dispatch(removeFromCart(product.id))}>
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className='p-6 bg-white border rounded-lg shadow-md md-w-1/3'>
              <h3 className='mb-5 text-sm font-semibold'>CART TOTAL</h3>
              <div className='flex justify-between pb-1 mb-5 border-b'>
                <span className='text-sm'>Total ITEMS:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className='pb-2 mb-4 border-b'>
                <p>Shipping:</p>
                <p className='ml-2'>
                  Shipping to{" "}
                  <span className='text-xs font-bold'>{address}</span>
                </p>
                <button
                  className='mt-1 ml-2 text-blue-500 hover:underline'
                  onClick={() => setIsModelOpen(true)}
                >
                  Change address
                </button>
              </div>
              <div className='flex justify-between mb-4'>
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className='w-full py-2 text-white bg-red-600 hover:bg-red-800' 
              onClick={() => navigate('/checkout')}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
          <Modal
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
            address={address}
            setAddress={setAddress}
          />
        </div>
      ) : (
        <div className='flex justify-center'>
          <img src={EmptyCart} alt='' className='h-96' />
        </div>
      )}
    </div>
  );
};

export default Cart;
