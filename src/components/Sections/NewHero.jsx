
import AutoScroll from "../ui/AutoScroll";
// import Fashion from '../../assets/Images/Fashion Cover.jpeg'
import Fashion from '../../assets/Hero/dior-new-1.jpeg'
import Cover from '../../assets/Images/Adidas Poster design _ Made with pixellab.jpeg'

import { Link } from "react-router-dom";
function NewHero() {
  return(<>
     <div className=" h-screen ">
     <div className=" flex h-screen flex-col md:flex-row gap-3 mx-8 -z-10 logoAni2 shadow-emerald-300 ">      
       <div className="relative md:w-4/6 h-[77%] my-5 rounded-2xl shadow-md shadow-black dark:shadow-white ">
       <img src={Cover} alt="Fashion Trends" className="w-full object-cover h-full   rounded-2xl    "/>
       </div>
       <div className="hidden md:block cursor-pointer  w-full h-[77%] my-5 rounded-2xl shadow-md shadow-black dark:shadow-white  ">
       <img src={Fashion} alt="Fashion Trends" className="w-full object-cover h-full   rounded-2xl    "/>
           
       </div>
       <div className="md:hidden"><button className=" w-full h-[80px] text-white text-2xl rounded-2xl text-center font-bold"><Link to={"/user/category"} >Shop Now</Link></button></div>
    </div>
     </div>
    <AutoScroll/>
    </>
  );
}

export default NewHero;
