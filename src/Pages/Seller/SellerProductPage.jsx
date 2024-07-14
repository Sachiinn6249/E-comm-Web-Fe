import ProductTable from "@/components/Seller/ProductTable";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { sellerState } from "@/Store/sellerAtom";
import { getSellerProduct } from "@/api/sellerApi";


const SellerProductPage = () => {
    const seller = useRecoilValue(sellerState);
    const id = seller?._id;
    const {
        data:product,
        // isError,
        // isLoading,
        // error,
      } = useQuery({
        queryKey: ["productlist",id],
        queryFn: getSellerProduct,
        retry: false,
      });
      
  return (
     <>
  <ProductTable product={product}/>
  </>
  );
};

export default SellerProductPage;
