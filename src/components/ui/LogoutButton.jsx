import { useAuth0 } from "@auth0/auth0-react";
import { LogOut } from "lucide-react";
function LogoutButton() {
  const { logout } = useAuth0();
  return <>
<button
  className="relative flex overflow-hidden bg-red-500  text-gray-800 font-semibold  px-4 p-1.5 mb-32 rounded-lg shadow-sm hover:shadow transition-all duration-500 ease-linear focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 active:scale-95"
  onClick={() => logout({ returnTo: window.location.origin })}
>
    <LogOut/>
  Logout
  <span
    className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear"
  ></span>
</button>


  </>;
}

export default LogoutButton;
