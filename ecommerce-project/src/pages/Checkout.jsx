import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  
  return (
    <div className='container px-4 py-8 mx-auto min-h-96 md:px-16 lg:px-24'>
      <h3 className='mb-4 text-2xl font-semibold'>CHECKOUT</h3>
      <div className='flex flex-col justify-between mt-8 space-x-10 md:flex-row'>
        <div className='md:w-2/3'>
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
              <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className='block text-gray-700'>Name</label>
                <input type="text" name='name' placeholder='Enter Name' className='w-full px-3 py-2 border' />
              </div>
              <div>
                <label className='block text-gray-700'>Email</label>
                <input type="email" name="email" placeholder='Enter Email' className='w-full px-3 py-2 border' />
              </div>
              <div>
                <label className='block text-gray-700'>Phone</label>
                <input type="text" name="phone" placeholder='Enter Phone#' className='w-full px-3 py-2 border' />
              </div>
            </div>
          </div>
        </div>

        <div className='p-6 bg-white border rounded-lg shadow-md md-w-1/3'>
          <h3 className='text-lg font-semibold'>Order Summary</h3>
          <p className='mt-4'>This is where your order summary will be displayed.</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
