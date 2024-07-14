import Fashion from '../../assets/category/Fashion-category.jpeg'
import Footwear from '../../assets/category/Footwear-category.jpeg'
import Mobile from '../../assets/category/mobile-category.jpeg'
import Home from '../../assets/category/home-category.jpeg'
import Electronic from '../../assets/category/electronic-cate.jpeg'
import Toys from '../../assets/category/kids-cate.jpeg'
import Backpack from '../../assets/category/backpacks-cate.jpeg'
import Cosmetic from '../../assets/category/cosmetic-cate.jpeg'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const category = [
    {
      name: "Fashion",
      link: "/",
      img: Fashion,
    },
    {
      name: "Footwear",
      link: "/about",
      img: Footwear,
    },
    {
      name: "Mobiles",
      link: "/contact",
      img: Mobile,
    },
    {
      name: "Home & Kitchen",
      link: "/login",
      img: Home,
    },
    {
      name: "Electronic",
      link: "/register",
      img: Electronic,
    },
    {
      name: "Toys and Baby Products",
      link: "/cart",
      img: Toys,
    },
    {
      name: " Backpacks and Umbrella",
      link: "/cart",
      img: Backpack,
    },
    {
      name: " Cosmetics",
      link: "/cart",
      img: Cosmetic,
    },
  ];
function CategoryList() {
  
  useEffect(() => {
    // Scroll to top when currentPage changes
    window.scrollTo({ top: 1, behavior: 'smooth' });
    
  }, []);
  return <>
  <section className=" py-24 px-4 lg:px-16"> 
    <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h1 className="text-center hidden md:block dark:text-white font-semibold text-5xl pb-12">Category</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            
            {
            category.map((item,index) => (
                <div key={index} className="relative group h-48 flex   flex-col rounded-xl bg-light-gradient bg-clip-border text-gray-700 shadow-md">
                <Link  to={`/user/product/${item.name}`} className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                            <img src={item.img} alt={item.name} 
                                className="h-[150px] object-cover  mt-6 m-auto rounded-lg"  title={item.name} loading="lazy"
                                />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            {item.name}
                        </p>
                    </div>
                </Link>
            </div>    
            ))};
        </div>
    </div>
</section>
  </>;
}

export default CategoryList;
