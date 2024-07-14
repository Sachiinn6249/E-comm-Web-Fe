import { MoveUp, Package, ShoppingBag, UsersRound } from "lucide-react";

function TopSection() {
  return <>
   <dl className="p-5 mt-5 px-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
       <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
         <dt>
           <div className="absolute rounded-md bg-red-600 p-3">
            <UsersRound className="w-6 h-6"/>
           </div>
           <p className="ml-16 truncate text-sm font-medium text-gray-300">Total Users</p>
         </dt>
         <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
           <p className="text-2xl font-semibold text-gray-100">71,897</p>
           <p className="ml-2 flex items-baseline text-sm font-semibold text-emerald-500">
            <MoveUp  className="h-4 w-5"/>
             <span className="sr-only"> Increased by </span>
             122
           </p>
           <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
             <div className="text-sm">
               <a href="#" className="font-medium text-orange-400 hover:text-red-500">View all<span className="sr-only"> Total Subscribers stats</span></a>
             </div>
           </div>
         </dd>
       </div>
       <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
         <dt>
           <div className="absolute rounded-md bg-orange-500 p-3">
             <ShoppingBag className="w-6 h-6"/>
           </div>
           <p className="ml-16 truncate text-sm font-medium text-gray-300">Total Orders</p>
         </dt>
         <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
           <p className="text-2xl font-semibold text-gray-100">58.16%</p>
           <p className="ml-2 flex items-baseline text-sm font-semibold text-emerald-500">
           <MoveUp  className="h-4 w-5"/>
             <span className="sr-only"> Increased by </span>
             5.4%
           </p>
           <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
             <div className="text-sm">
               <a href="#" className="font-medium text-yellow-600 hover:text-orange-500">View all<span className="sr-only"> Avg. Open Rate stats</span></a>
             </div>
           </div>
         </dd>
       </div>
       <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
         <dt>
           <div className="absolute rounded-md bg-blue-500 p-3">
            <Package className="w-6 h-6"/>
           </div>
           <p className="ml-16 truncate text-sm font-medium text-gray-300">Total Products</p>
         </dt>
         <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
           <p className="text-2xl font-semibold text-gray-100">24.57%</p>
           <p className="ml-2 flex items-baseline text-sm font-semibold text-emerald-500">
           <MoveUp  className="h-4 w-5"/>
             <span className="sr-only"> Decreased by </span>
             3.2%
           </p>
           <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
             <div className="text-sm">
               <a href="#" className="font-medium text-cyan-600 hover:text-green-500">View all<span className="sr-only"> Avg. Click Rate stats</span></a>
             </div>
           </div>
         </dd>
       </div>
      </dl>
  </>

}

export default TopSection;
