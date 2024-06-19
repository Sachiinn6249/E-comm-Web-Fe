import { DarkModeContext } from "@/utils/DarkModeProvider";
import { useContext, useState} from "react";


import DarkModeToggle from "../ui/DarkModeToggle";
import MobileInput from "../ui/MobileInput";
import AnimatedMenu from "./AnimatedMenu";


import Delivery from "../../assets/Icons/delivery-icon.svg";
import CustomerIcon from "../../assets/Icons/customer-care.svg";
import GuaranteeIcon from "../../assets/Icons/returun-guaranty.svg";
import ShoppingCart from "../../assets/Icons/shopping-bag.svg";
import WhiteBag from "../../assets/Icons/shopping-bag-white.svg";
import Favorite from "../../assets/Icons/favorite-heart.svg";
import FavoriteWhite from "../../assets/Icons/favorite-white.svg";
import LoginButton from "../ui/LoginButton";

function UserHeader() {
  
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
      <div>
        {/* #top section */}
        <div className=" hidden h-8  md:flex justify-around  bg-black dark:bg-emerald-400/45  dark:opacity-80  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
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
          <div className="flex justify-center items-center">
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-yellow-400  transition-all hover:border-black active:bg-black disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              Become Seller
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* middle section */}
        <div className="flex  py-3 sm:justify-between justify-around  items-center mt-3 logoAni ">
          {/* first section          */}
          <div className=" flex-1 ml-16">
            <div className="-mt-5 ">
              <a href="">
                <h1 className="text-4xl font-bold md:text-5xl  text-white drop-shadow-lg ">
                  <span className="text-yellow-300 ">#</span>grab.
                </h1>
              </a>
            </div>
          </div>
          {/* second section */}
          <div className="flex w-full md:w-[75%] justify-around ">
            <div className=" hidden  md:flex ">
              <MobileInput />
            </div>
            <div className="flex justify-end -mr-[80px]">
                <div className="flex  items-center   gap-5">
                <button
                  href="/"
                  className="group  flex justify-center rounded-[50%] drop-shadow-xl hover:bg-emerald-600 from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] "
                >
                  <img
                    src={isDarkMode ? FavoriteWhite : Favorite}
                    alt=""
                    className="w-8 md:w-10 "
                  />
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-7 duration-700">
                    Favorites
                  </span>
                </button>
                <button
                  href="/"
                  className=" group flex justify-center rounded-[50%] drop-shadow-xl hover:bg-emerald-600 from-gray-800 to-black text-white font-semibold hover:translate-y-2 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] "
                >
                  <img
                    src={isDarkMode ? WhiteBag : ShoppingCart}
                    alt=""
                     className="w-8 md:w-10 "
                  />
                  <span className="absolute animate-pulse -top-2 right-0 w-4 h-4 bg-green-500 font-bold  border-white rounded-full text-center   text-red-600 dark:text-sky-500">
                    2
                  </span>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-7 duration-700">
                    Cart
                  </span>
                </button>
              </div>
               
              <div className=" md:flex    items-center">
                <DarkModeToggle />
              </div>
              <div className=" flex items-center  ">
               
                <AnimatedMenu />
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
