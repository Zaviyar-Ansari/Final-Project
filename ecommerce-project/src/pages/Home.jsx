import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/mockData';
import HeroImg from "../assets/Images/HeroImage.webp";
import InfoSection from "../components/InfoSection";
import CategorySection from '../components/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Shop from './Shop';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div>
    <div className='px-4 mt-2 bg-white md:px-16 lg:px-24'>
      <div className='container flex flex-col py-4 mx-auto md:flex-row'>
        <div className='w-full md:w-3/12'>
          <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
          <ul className='p-3 space-y-4 bg-gray-100 border'>
            {Categories.map((category, index) => (
              <li key={index} className='flex items-center text-sm font-medium'>
                <div className='w-2 h-2 mr-3 border border-red-600 rounded-full'></div> 
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className='relative w-full mt-8 md:w-9/12 md:mt-0 h-96'>
          <img src={HeroImg} alt="" className='w-full h-full' />
          <div className="absolute top-16 left-8">
            <p className='mb-4 text-gray-600'>Code with Yousaf</p>
            <h2 className='text-3xl font-bold'>WELCOME TO E-SHOP</h2>
            <p className='text-xl mt-2.5 font-bold text-gray-800'>MILLIONS+ PRODUCTS</p>
            <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div className='container py-12 mx-auto'>
        <h2 className='mb-6 text-2xl font-bold text-center'>Top Products</h2>
        <div className='grid grid-cols-1 gap-6 cursor-pointer sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5'>
          {products.slice(0, 5).map(product => (
            <ProductCard product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
    <Shop></Shop>
    </div>
  );
};

export default Home;
