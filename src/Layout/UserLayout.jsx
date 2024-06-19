
import ProductList from "@/Pages/ProductPage/ProuductList";
import Footer from "@/components/Sections/Footer";
import NewCollection from "@/components/Sections/NewCollection";
import NewHero from "@/components/Sections/NewHero";

import OurBrands from "@/components/Sections/OurBrands";
import Services from "@/components/Sections/Services";
import ShopByCategory from "@/components/Sections/ShopByCategory";
import ShopNow from "@/components/Sections/ShopNow";

import UserHeader from "@/components/Sections/UserHeader";







function UserLayout() {
  return <>
 <UserHeader/>
 <NewHero/>
 <ShopByCategory/>
 <NewCollection/>
<ShopNow/>
  <OurBrands/>
  <Services/>
  <Footer/>
  </>;
}

export default UserLayout;
