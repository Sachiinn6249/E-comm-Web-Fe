import { HomeIcon,GanttChart,User,LogOut } from "lucide-react";

function MobileMenu() {
  return <>
  <div className=" flex-col rounded-3xl">
      <div className="backdrop-blur-3xl text-sm border bg-black/10 rounded-3xl text-neutral-500 p-3 fixed z-20 bottom-1 left-1/2 transform -translate-x-1/2 w-96">
        <div className=" grid grid-cols-2 content-center ">
          
          {/* <div className="mx-3   mt-1.5 bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"  className="w-6 h-6">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>
          </div> */}


          <div className="flex mt-1  mx-3     gap-5 ">
          
          <a className=" flex  flex-col items-center px-3.5 pt-0.5"  target="_blank" href="https://github.com/salnetx">
          <HomeIcon/>
          Home
          </a>

          <a className="flex  flex-col items-center " target="_blank" href="https://www.producthunt.com/@salnetx">
         <GanttChart/>
         Category
          </a>
          </div>
          <div className="flex mt-1   gap-5 ">
          <a className=" flex  flex-col items-center  px-4 pt-0.5"  target="_blank" href="https://github.com/salnetx">
         <User/>
         Account
          </a>

          <a className=" flex  flex-col items-center px-3.5" target="_blank" href="https://www.producthunt.com/@salnetx">
         <LogOut/>
         Logout
          </a>

          

          </div>

          
          </div>
      </div>
    </div>
  </>;
}

export default MobileMenu;
