import { DarkModeContext } from "@/utils/DarkModeProvider";
import { useContext} from "react";
import { useRecoilValue } from "recoil";



import DarkModeToggle from "../ui/DarkModeToggle";
import MobileInput from "../ui/MobileInput";
// import AnimatedMenu from "../Sections/AnimatedMenu";


import Delivery from "../../assets/Icons/delivery-icon.svg";
import CustomerIcon from "../../assets/Icons/customer-care.svg";
import GuaranteeIcon from "../../assets/Icons/returun-guaranty.svg";
import ShoppingCart from "../../assets/Icons/shopping-bag.svg";
import WhiteBag from "../../assets/Icons/shopping-bag-white.svg";
import Favorite from "../../assets/Icons/favorite-heart.svg";
import FavoriteWhite from "../../assets/Icons/favorite-white.svg";
import { ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Drawer } from "../ui/Drawer";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "@/api/productApi";
import { userState } from "@/Store/userAtom";


function UserHeader() {

  const user= useRecoilValue(userState);
  const userId = user?._id;
  
  const {
    data: cart,
 
    // isError,
    // isLoading,
    // error,
  } = useQuery({
    queryKey: ["cart", userId],
    queryFn: getCartItems,
    retry: false,
  });
  const count = cart?.products?.length;
  


  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const serviceQoutes = [
    {
      value: Delivery,
      qoute: "FREE AND FAST DELIVERY",
    },
    {
      value: CustomerIcon,
      qoute: "24/7 CUSTOMER CARE",
    },
    {
      value: GuaranteeIcon,
      qoute: "100% RETURN GUARANTEE",
    },
  ];
  return (
    <>
      <div className="">
        {/* #top section */}
        <div className=" hidden h-8  md:flex justify-around  bg-emerald-400/45  dark:opacity-80  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
          {serviceQoutes.map((item, index) => (
            <div key={index} className="flex">
              <img
                src={item.value}
                alt=""
                className="h-8 max-w-[initial] w-20 block grow-0 shrink-0 basis-auto box-border"
              />
              <div className=" flex justify-center items-center">
                <p className="[font-family:Poppins,sans-serif]  text-xs font-semibold  grow-0 shrink-0 basis-auto m-0 p-0 items-center lg:text-zinc-200 ">
                  {item.qoute}
                </p>
              </div>
            </div>
          ))}
          {/* <div className="flex justify-center items-center">
            <Link to={""}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-yellow-400  transition-all hover:border-black active:bg-black disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              Become Seller
            <ArrowBigRight/>
            </Link>
          </div> */}
        </div>
        {/* middle section */}
        <div className="flex   py-3   justify-between items-center mt-3 logoAni  ">
          {/* first section          */}
          <div className=" ml-10">
            <div className="-mt-5 ">
              <Link to={"/user/home"}>
                <h1 className="w-20 text-4xl font-bold md:text-5xl  text-white drop-shadow-lg ">
                  <span className="text-yellow-300 ">#</span>grab.
                </h1>
              </Link>
            </div>
          </div>
          {/* second section */}
            <div className=" hidden md:flex ml-10">
              <MobileInput />
            </div>
          <div className="flex  justify-around ">
            <div className="flex justify-end  gap-1.5 ">
                <div className="flex  items-center   gap-5">
                <Link to={"/user/whish-list"}
                  className="hidden group md:flex justify-center rounded-[50%] drop-shadow-xl  from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] "
                >
                  <img
                    src={isDarkMode ? FavoriteWhite : Favorite}
                    alt=""
                    className="w-8 md:w-8 "
                  />
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-7 duration-700">
                    Favorites
                  </span>
                </Link>
                <Link to={"user/cart"} 
                  className="hidden group md:flex justify-center rounded-[50%] drop-shadow-xl  from-gray-800 to-black text-white font-semibold hover:translate-y-2 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] "
                >
                  <img
                    src={isDarkMode ? WhiteBag : ShoppingCart}
                    alt=""
                     className="w-8 md:w-8 "
                  />
                  <span className="absolute animate-pulse -top-2 right-0 w-4 h-4 bg-green-500 font-bold  border-white rounded-full text-center   text-red-600 dark:text-sky-500">
                    {count}
                  </span>
                  <span className="absolute opacity-0 group-hover:opacity-100  group-hover:text-sm group-hover:-translate-y-7 duration-700">
                    Cart
                  </span>
                </Link>
              </div>
               
              <div className=" md:flex    items-center">
                <DarkModeToggle />
              </div>
              <div className=" flex items-center  ">
                {/* <AnimatedMenu /> */}
                <Drawer/>
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-md flex justify-center items-center mx-auto md:hidden ">
          <MobileInput />
        </div>
      </div>
    </>
  );
}

export default UserHeader;
