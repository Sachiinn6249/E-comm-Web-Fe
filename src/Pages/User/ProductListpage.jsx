
import CategoryBar from "../../components/Product/CategoryBar";
import ProductWithFilter from "../../components/Product/ProductWithFilter";
import ProductSlide from "../../components/Product/ProductSlide";
import OurBrands from "../../components/Sections/OurBrands";
import Services from "../../components/Sections/Services";

const ProductListpage = () => {
  return <>
  <CategoryBar/>
  <ProductWithFilter/>
  <ProductSlide />
  <OurBrands/>
  <Services/>
  </>;
};

export default ProductListpage;
