import { getSellerOrders } from "@/api/sellerApi";
import OrderList from "@/components/Product/OrderList";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { sellerState } from "@/Store/sellerAtom";

const SellerOrderPage = () => {
  const seller = useRecoilValue(sellerState);
  const id = seller?._id
  const {
    data: orders,
    // isError,
    // isLoading,
    // error,
  } = useQuery({
    queryKey: ["sellerOrders", id],
    queryFn: getSellerOrders,
    retry: false,
  });
  
  return <>
  <OrderList orders={orders}/>
  </>;
};

export default SellerOrderPage;
