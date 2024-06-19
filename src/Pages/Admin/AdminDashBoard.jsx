import { LayoutDashboard,
    ShoppingBag ,
    GanttChart,
    UsersRound,
    Store,
    Package,
    Bell,
    MoveUp
} from "lucide-react";
import UserTable from "./UserTable";

function AdminDashBoard() {
  return <>
  <div className="flex h-screen bg-gray-100">

{/* <!-- sidebar --> */}
<div className="hidden md:flex flex-col w-64 bg-gray-800">
    <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white font-bold uppercase">grab Dashboard</span>
    </div>
    <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800">
            <a href="#" className="flex items-center px-4 py-2 text-gray-100 bg-emerald-400 hover:bg-gray-700">
             <LayoutDashboard  className="h-6 w-6 mr-2"/>
               Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
              <ShoppingBag className="h-6 w-6 mr-2"/>
                Orders
            </a>
            <a
          href="#"
          className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
        >
          <GanttChart className="h-6 w-6 mr-2"/>

          Products
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
        >
          <UsersRound className="h-6 w-6 mr-2"/>
          Users
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
        >
          <Store className="h-6 w-6 mr-2"/>
          Sellers
        </a>
            
            
        </nav>
    </div>
</div>
{/* 
<!-- Main content --> */}
<div className="flex flex-col flex-1 overflow-y-auto">
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
        <div className="flex items-center px-4">
            <button className="text-gray-500 focus:outline-none focus:text-gray-700">
            </button>
            <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search"/>
        </div>
        <div className="flex items-center pr-4">
        <button
                            className="flex mx-4 text-gray-600 focus:outline-none">
                          <Bell className="w-6 h-6" />
                         </button>
           
             <div  className="relative ">
                        <button 
                             className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                             <img className="object-cover w-full h-full"
                                 src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                                 alt="Your avatar"/>
                         </button>   
                     </div>
        </div>
    </div>
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    {/* <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Daystar Daycare </h1>
        <p className="mt-2 text-gray-600">Raising tomorrow's leaders.</p>
    </div> */}
    <UserTable/>
</div>

</div>
  </>;
}

export default AdminDashBoard;

