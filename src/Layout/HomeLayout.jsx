import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";
import NewCollection from "@/components/Sections/NewCollection";
import NewHero from "@/components/Sections/NewHero";
import OurBrands from "@/components/Sections/OurBrands";
import Services from "@/components/Sections/Services";
import ShopByCategory from "@/components/Sections/ShopByCategory";
import ShopNow from "@/components/Sections/ShopNow";

function HomeLayout() {
  return <>
  <Header/>
  <NewHero/>
  <ShopByCategory/>
  <ShopNow/>
 <NewCollection/>
 <OurBrands/>
 <Services/>
  <Footer/>
  </>;
}

export default HomeLayout;
