import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/api/productApi";


import CategoryBar from "@/components/Product/CategoryBar";
import ProductPage from "@/components/Product/ProductPage";
import ProductSlide from "@/components/Product/ProductSlide";
import Services from "@/components/Sections/Services";
import AddReview from "@/components/User/AddReview";
import Review from "@/components/User/Review";
import { useParams } from "react-router-dom";
import { useProductFilters } from "@/hooks/productFilter";
import LoadingBar from "@/components/Loader/LoadingBar";

const ProductDetailPage = () => {
  const { id } = useParams();

  const {
    data: product,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: fetchProductById,
    retry: false,
  });
console.log(product?.category);
  const {
    data: relatedProduct,
    // isLoading,
    // isError,
    // error,
  } = useProductFilters(product?.category );
  console.log(relatedProduct)
 
  if (isLoading) {
    return <LoadingBar/>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <CategoryBar />
      <ProductPage product={product} />
      <ProductSlide product={relatedProduct} />
      <Review />
      <AddReview product={product} />
      <Services />
    </>
  );
};

export default ProductDetailPage;
