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
import Loading from "@/components/Loader/Loading";
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NewHero />
      <ProductSlide product={productList} />
      <ShopByCategory />
      <Banner />
      <OurBrands />
      <Services />
    </>
  );
}

export default HomePage;
