import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import {
  UserCog,
  Shirt,
  Headphones,
  CookingPot,
  Tv,
  StarsIcon,
  LucideShoppingBag,
  Bell,
  Headset
} from "lucide-react";
import LogoutButton from "./LogoutButton";

export const MenuGrid = () => {
  return (
    <div className="  text-zinc-50  rounded-3xl px-4       ">
      {/* <Logo /> */}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid  grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        {/* <LocationBlock />
        <EmailListBlock /> */}
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-5",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <div className="flex flex-row mx-auto gap-5  justify-center  h-[80%]">
      <a className="flex flex-col justify-center  items-center text-3xl bg-orange-500 flex-1 rounded-2xl h-[70%]">
        <UserCog />
        Account
      </a>
      <a className="flex flex-col justify-center  items-center text-3xl bg-emerald-300   flex-1 rounded-2xl h-[70%]">
       
        <LucideShoppingBag />
        Orders
      </a>
    </div>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Shop Now <FiArrowRight />
    </a>
    <div className="flex justify-end">
      <LogoutButton/>
    </div>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2deg",
        scale: 0.8,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        Category
        <div className="flex py-2 justify-center gap-2">
          <Shirt />
          <Tv />
          <Headphones />
          <CookingPot />
        </div>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-1.5deg",
        scale: 0.8,
      }}
      className="col-span-6 bg-emerald-400 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <div className="flex justify-center">
          <StarsIcon />
        </div>
        Feautured Product
      </a>
    </Block>
    <Block
      whileHover={{
        scale: 0.8,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <div className="flex justify-center">
        <Headset/>
        </div>
        Customer Support
       
      </a>
    </Block>
    <Block
      whileHover={{
        scale: 0.8,
      }}
      className="  col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white  "
      >
        <div className="flex justify-center">
          <Bell />
        </div>
        Notifications
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-2xl leading-snug mt-5">
    <div className="p-6 py-5 rounded-lg bg-violet-600 dark:text-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-4xl tracking-tighter font-bold">
            Up to
            <br className="sm:hidden" />
            
            50% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-lg">GRAb</span>
          </div>
          <a
            href="#"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};
