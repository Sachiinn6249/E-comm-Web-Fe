import { getAllOrders } from "@/api/orderApi";
import OrderList from "@/components/Product/OrderList";
import { useQuery } from "@tanstack/react-query";

const OrderPage = () => {
    const {
        data:orders,
        // isError,
        // isLoading,
        // error,
      } = useQuery({
        queryKey: ["allorders"],
        queryFn: getAllOrders,
        retry: false,
      });
      console.log(orders);
  return (
    <div>
      <OrderList orders={orders} />
    </div>
  );
};

export default OrderPage;
