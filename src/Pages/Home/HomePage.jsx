import Banner from "@/components/Sections/Banner";
import ShopByCategory from "@/components/Product/ShopByCategory";
import NewHero from "@/components/Sections/NewHero";
import OurBrands from "@/components/Sections/OurBrands";
import Services from "@/components/Sections/Services";
import ProductSlide from "@/components/Product/ProductSlide";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/productApi";
import { useRecoilState } from "recoil";
import { productState } from "@/Store/productAtom";
import LoadingBar from "@/components/Loader/LoadingBar";
function HomePage() {
  const {
    data: products,
    // isError,
    isLoading,
    // error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    retry: false,
  });
  const [productList, setProductList] = useRecoilState(productState);
  setProductList(products);
 
  if (isLoading){
   return <LoadingBar/>
 }

  return (
    <>
      <NewHero />
      <ProductSlide product={products} />
      <ShopByCategory />
      <Banner />
      <OurBrands />
      <Services />
    </>
  );
}

export default HomePage;
