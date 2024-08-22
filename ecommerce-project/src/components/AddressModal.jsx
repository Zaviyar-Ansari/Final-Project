import React, { useState } from 'react';

const AddressModal = ({ isModelOpen, setIsModelOpen, address, setAddress }) => {
  const [newAddress, setNewAddress] = useState(address);

  const handleSave = () => {
    setAddress(newAddress);
    setIsModelOpen(false);
  };

  if (!isModelOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-56'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
        <button
          className='absolute top-4 right-4 text-gray-300 text-3xl'
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        <div>
          <input
            type='text'
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder='Enter new address'
            className='border p-2 w-full mb-4'
          />
          <div className='flex justify-end'>
            <button
              className='bg-gray-500 text-white py-2 px-4 rounded mr-2'
              onClick={() => setIsModelOpen(false)}
            >
              Cancel
            </button>
            <button
              className='bg-blue-500 text-white py-2 px-4 rounded'
              onClick={handleSave}
            >
              Save Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
