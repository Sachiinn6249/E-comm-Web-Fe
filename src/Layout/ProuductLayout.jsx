import Footer from "@/components/Sections/Footer";
import UserHeader from "@/components/Sections/UserHeader";

import { Outlet } from "react-router-dom";

function ProuductLayout() {
  return <>
  <UserHeader/>
  <Outlet/>
  <Footer/>
  </>;
}

export default ProuductLayout;
