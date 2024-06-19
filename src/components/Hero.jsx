
export default function Widget() {
  return (
      <div className="bg-zinc-900 p-8">
        <div className="flex gap-3 justify-center">
          <div className="relative rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x800" alt="Fashion Trends" className="w-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-4">
              <h2 className="text-white text-2xl font-bold">Grab The Trends</h2>
              <button className="mt-2 bg-white text-black py-2 px-4 rounded-full">SHOP NOW</button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x800" alt="Exciting Story" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-4">
              <h2 className="text-white text-2xl font-bold">Recalling the journey of Dol's exciting story</h2>
              <button className="mt-2 bg-white text-black py-2 px-4 rounded-full">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
  )
}
// import Fashion from "../assets/Images/Fashion Cover.jpeg";
// import Cover from "../assets/Images/fashion-cover.jpg";

// import AutoScroll from "./ui/AutoScroll";


// function Hero() {
 
 
//   return (
//     <>
//       <div className="  relative   mx-10  my-10 -z-10  ">
//       <div className="logoAni2 mx-5 grid grid-cols-12 gap-4 min-h-[500px]">
//       {/* First section with vertical slide */}
//       <div className=" relative - col-span-12 md:col-span-4 items-center gap-4 bg-blue-600 text-white rounded-[20px] overflow-hidden shadow-lg">
//             <img
//               src={Fashion}
//               alt="The Adventure of Blue Sword"
//               className="absolute inset-0 w-full h-full object-cover opacity-1"
//             />
//             <div className="relative  p-6">
//               <h2 className="text-2xl font-bold">Grab The Trends</h2>
              
//               <button className="mt-4 flex items-center text-sm font-medium bg-black p-2 rounded-lg">
//                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//                 SHOP NOW
//               </button>
//             </div>
//           </div>
            
        

//       {/* Second section with horizontal slide */}
//       <div className=" relative  -z-10 col-span-12 md:col-span-8  text-white rounded-[20px] overflow-hidden shadow-2xl">
//             <img
//               src={Cover}
//               alt="Recalling the journey of Dol's exciting story"
//               className="absolute inset-0 w-full h-full object-cover opacity-1"
//             />
//             <div className="relative p-6">
//               <h2 className="text-2xl font-bold ">
//                 Recalling the journey of Dol's exciting story
//               </h2>
              
//               <button className="mt-4 flex items-center text-sm font-medium">
//                 <svg
//                   className="w-4 h-4 mr-2"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//                 SHOP NOW
//               </button>
//             </div>
//           </div>  
//     </div>
//         <div className="mt-2 p-5 ">
//       <AutoScroll/>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Hero;

// // import { motion } from "framer-motion";
// // import { twMerge } from "tailwind-merge";
// // import {  FiMail, FiMapPin } from "react-icons/fi";

// // export const Hero = () => {
// //   return (
// //     <div className=" px-4 py-12 text-zinc-50 bg-white">
// //       <motion.div
// //         initial="initial"
// //         animate="animate"
// //         transition={{
// //           staggerChildren: 0.05,
// //         }}
// //         className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
// //       >

// //         <LocationBlock />
// //         <EmailListBlock />
// //       </motion.div>

// //     </div>
// //   );
// // };

// // const Block = ({ className, ...rest }) => {
// //   return (
// //     <motion.div
// //       variants={{
// //         initial: {
// //           scale: 0.5,
// //           y: 50,
// //           opacity: 0,
// //         },
// //         animate: {
// //           scale: 1,
// //           y: 0,
// //           opacity: 1,
// //         },
// //       }}
// //       transition={{
// //         type: "spring",
// //         mass: 3,
// //         stiffness: 400,
// //         damping: 50,
// //       }}
// //       className={twMerge(
// //         "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
// //         className
// //       )}
// //       {...rest}
// //     />
// //   );
// // };

// // const LocationBlock = () => (
// //   <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
// //     <FiMapPin className="text-3xl" />
// //     <p className="text-center text-lg text-zinc-400">Cyberspace</p>
// //   </Block>
// // );

// // const EmailListBlock = () => (
// //   <Block className="col-span-12 md:col-span-9">
// //     <p className="mb-3 text-lg">Join my mailing list</p>
// //     <form
// //       onSubmit={(e) => e.preventDefault()}
// //       className="flex items-center gap-2"
// //     >
// //       <input
// //         type="email"
// //         placeholder="Enter your email"
// //         className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
// //       />
// //       <button
// //         type="submit"
// //         className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
// //       >
// //         <FiMail /> Join the list
// //       </button>
// //     </form>
// //   </Block>
// // );
