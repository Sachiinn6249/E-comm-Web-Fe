import Fashion from '../../assets/Images/Fashion category.jpeg';
import Digital from '../../assets/Images/Digital Cover.jpeg';
import Home from '../../assets/Images/Home and Kitchen.jpeg';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShopByCategory() {
  return (
    <>
      <div className="flex mt-8 justify-center items-center mb-5">
        <h1 className="text-xl font-bold dark:text-zinc-300 sm:text-3xl">Shop by Category</h1>
      </div>
      <div className='flex  items-center mt-5 mb-5'>
      <h1 className='dark:text-white  text-2xl ml-12 cursor-pointer'></h1>
      <ArrowRight className='w-5 ml-3 mr-3 dark:text-white group-hover:animate-pulse'/>
      <Link to="/user/category" className='dark:text-white'>View All Category </Link>
      </div>
      <div className='md:flex justify-center'>
        <Link  to="/user/category" className="relative group z-50 flex flex-col overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm md:w-full mx-auto mt-10 cursor-pointer  animate-none  ">
          <img src={Fashion} alt="Fashion" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white group-hover:animate-bounce">Fashion</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">The best look anytime anywhere.</div>
        </Link>

        <Link to="/user/category" className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm md:w-full mx-auto mt-10 cursor-pointer animate-none  ">
          <img src={Digital} alt="Digital World" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white group-hover:animate-bounce">Digital World</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Power Up Your Hands.</div>
        </Link>

        <Link to="/user/category" className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm md:w-full mx-auto mt-10 cursor-pointer  ">
          <img src={Home} alt="Home & Kitchen" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white group-hover:animate-bounce">Home & Kitchen</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Refined taste, unparalleled quality.</div>
        </Link>
      </div>
    </>
  );
}
