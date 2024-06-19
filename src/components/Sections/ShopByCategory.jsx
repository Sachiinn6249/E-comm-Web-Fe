import Fashion from '../../assets/Images/Fashion category.jpeg';
import Digital from '../../assets/Images/Digital Cover.jpeg';
import Home from '../../assets/Images/Home and Kitchen.jpeg';

export default function ShopByCategory() {
  return (
    <>
      <div className="flex mt-8 justify-center items-center mb-5">
        <h1 className="text-xl font-bold dark:text-zinc-300 sm:text-3xl">Shop by Category</h1>
      </div>
      <div className='md:flex justify-center'>
        <a href="#" className="relative group z-50 flex flex-col overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm md:w-full mx-auto mt-10 cursor-pointer  animate-none  ">
          <img src={Fashion} alt="Fashion" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white group-hover:animate-bounce">Fashion</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">The best look anytime anywhere.</div>
        </a>

        <a href="/digital" className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm md:w-full mx-auto mt-10 cursor-pointer animate-none  ">
          <img src={Digital} alt="Digital World" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white group-hover:animate-bounce">Digital World</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Power Up Your Hands.</div>
        </a>

        <a href="/home-kitchen" className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm md:w-full mx-auto mt-10 cursor-pointer  ">
          <img src={Home} alt="Home & Kitchen" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white group-hover:animate-bounce">Home & Kitchen</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Refined taste, unparalleled quality.</div>
        </a>
      </div>
    </>
  );
}
