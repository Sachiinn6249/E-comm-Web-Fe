import ShopByCategory from "@/components/Product/ShopByCategory";
import Banner from "@/components/Sections/Banner";
import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";
import NewHero from "@/components/Sections/NewHero";
import OurBrands from "@/components/Sections/OurBrands";
import Services from "@/components/Sections/Services";
import { MoveRight } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Header />
      <NewHero />
      <Outlet />
      <ShopByCategory />
      <Banner />
      <OurBrands />
      <Services />
      <Footer />
      <div className="w-full bg-black text-white">
        <Link to={"/admin/login"} className="px-2 flex gap-2 items-center">
          Admin Support
          <span><MoveRight className="text-white"/></span>
          </Link>
      </div>
    </>
  );
}

export default HomeLayout;
