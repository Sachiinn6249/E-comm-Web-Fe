import { useState } from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { adminState } from "@/Store/adminAtom";

import {
  LayoutDashboard,
  ShoppingBag,
  UsersRound,
  Store,
  Bell,
  LogOut,
} from "lucide-react";
import { adminLogout } from "@/api/adminAuth";

function AdminDashBoard() {
  const admin = useRecoilValue(adminState);
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState("dashboard"); // Initial selected link

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const handleLogout = () => {
    adminLogout();
    navigate("/")
  };

  return (
    <>
      <div className="flex h-screen bg-dark-gradient ">
        {/* <!-- sidebar --> */}
        <div className="hidden md:flex flex-col w-64 bg-gray-800 ">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">
              Admin Dashboard
            </span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <Link
                to="/admin/home"
                className={`flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 ${
                  selectedLink === "dashboard" ? "bg-emerald-400" : ""
                }`}
                onClick={() => handleLinkClick("dashboard")}
              >
                <LayoutDashboard className="h-6 w-6 mr-2" /> Dashboard
              </Link>

              <Link
                to="/admin/orders"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  selectedLink === "orders" ? "bg-emerald-400" : ""
                }`}
                onClick={() => handleLinkClick("orders")}
              >
                <ShoppingBag className="h-6 w-6 mr-2" /> Orders
              </Link>

              <Link
                to="/admin/users"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  selectedLink === "users" ? "bg-emerald-400" : ""
                }`}
                onClick={() => handleLinkClick("users")}
              >
                <UsersRound className="h-6 w-6 mr-2" /> Users
              </Link>

              <Link
                to="/admin/sellers"
                className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
                  selectedLink === "seller" ? "bg-emerald-400" : ""
                }`}
                onClick={() => handleLinkClick("seller")}
              >
                <Store className="h-6 w-6 mr-2" /> Sellers
              </Link>

              <button
               onClick={ handleLogout}
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <LogOut className="h-6 w-6 mr-2" /> LogOut
              </button>
            </nav>
          </div>
        </div>
        {/* 
<!-- Main content --> */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-20 bg-gray-800 border-b border-gray-200">
            <h1 className="flex font-bold text-3xl mx-3 mb-3 text-white">
              <span className="text-yellow-300">#</span>grab
            </h1>
            <div className="flex justify-end w-full items-center pr-4">
              <button className="flex items-center mx-4 text-gray-600 focus:outline-none">
                <Bell className="w-6 h-6" />
              </button>

              <div className="relative flex gap-2 items-center cursor-pointer">
                <button className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                  <img
                    className="object-cover "
                    src={admin?.avatarUrl}
                    alt="Your avatar"
                  />
                </button>
                <span className="text-white font-semibold">{admin?.name}</span>
              </div>
            </div>
          </div>

          {/* <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Daystar Daycare </h1>
        <p className="mt-2 text-gray-600">Raising tomorrow's leaders.</p>
    </div> */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminDashBoard;
