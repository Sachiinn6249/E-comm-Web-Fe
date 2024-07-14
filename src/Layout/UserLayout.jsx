import Footer from "@/components/Sections/Footer";
import UserHeader from "@/components/User/UserHeader";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      <UserHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
