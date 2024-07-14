

import DarkModeToggle from "../ui/DarkModeToggle";
import MobileInput from "../ui/MobileInput";

import LoginButton from "../ui/LoginButton";

import Delivery from "../../assets/Icons/delivery-icon.svg";
import CustomerIcon from "../../assets/Icons/customer-care.svg";
import GuaranteeIcon from "../../assets/Icons/returun-guaranty.svg";
import { ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";
function Header() {

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
        <div className=" h-8  md:flex justify-around  bg-black dark:bg-emerald-400/45  dark:opacity-80  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
          {serviceQoutes.map((item, index) => (
            <div key={index} className=" hidden md:flex ">
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
            <Link
            to={"/seller/login"}
              className="flex select-none items-center gap-2 rounded-lg my-auto px-6 text-center align-middle font-sans text-xs font-bold uppercase text-yellow-400  transition-all hover:border-black active:bg-black disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              Become Seller
              <ArrowBigRight/>
            </Link>
          </div>
        </div>
        {/* middle section */}
        <div className="flex py-1.5 sm:justify-between justify-around  items-center mt-3 logoAni ">
          {/* first section          */}
          <div className=" flex-1 ml-16">
            <div className="">
              <a href="">
                <h1 className="flex items-center pb-2 text-4xl font-bold md:text-5xl text-white drop-shadow-lg ">
                  <span className="text-yellow-300 ">#</span>grab.
                </h1>
              </a>
            </div>
          </div>
          {/* second section */}
          <div className="flex w-full md:w-[75%] justify-around  ">
            <div className=" hidden  md:flex ">
              <MobileInput />
            </div>
            <div className="flex justify-end -mr-[80px]">
                <div className="flex  items-center   gap-5">
                  <LoginButton/>
              </div>   
              <div className="hidden md:flex  items-center">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
