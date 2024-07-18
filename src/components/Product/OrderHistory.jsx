import { useRecoilValue } from "recoil";
import Shipping from "../../assets/category/order-new2.jpeg";
import { userState } from "@/Store/userAtom";
import { useQuery } from "@tanstack/react-query";
import { getOrderList } from "@/api/orderApi";
import NotAvailable from "@/Pages/ErrorPage/NotAvailable";
import Loading from "../Loader/Loading";

export default function OrderHistory() {
  const user = useRecoilValue(userState);
  const userId = user?._id;

  const { data: orders,isLoading } = useQuery({
    queryKey: ["order", userId],
    queryFn: getOrderList,
    retry: false,
  });
  console.log(orders);

  function formatDate(dateString) {
    const formattedDate = new Date(dateString).toLocaleString(); // Format createdAt
    return formattedDate;
  }

  if(isLoading){
    return <Loading/>
  }
  const ordersArray = Array.isArray(orders) ? orders : [orders]; 
  return (
    <div className="p-6  cursor-pointer">
      <h2 className="text-xl font-semibold mb-4 text-white">Order History</h2>
      {orders?.products?.length === 0 && (
          <div className="text-center mt-8 text-lg text-gray-500 w-full   flex flex-col justify-center">
           <h1>No Orders Available!! ⌛{" "} </h1> 
           <div>
            <NotAvailable/>
           </div>
            <span>
              <button className="bg-black rounded-md px-3 py-1.5 text-white hover:scale-90">
                Shop Now!
              </button>
            </span>
          </div>
        )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black/20 rounded-lg dark:bg-emerald-300/50">
          <thead className="border-b dark:text-white/40">
            <tr>
              <th className="text-left p-4 ">Order </th>
              <th className="text-left p-4">Order placed At</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4"></th>
            </tr>
          </thead>
          <tbody className="dark:text-white">
          {ordersArray?.slice().reverse().map((order, i) => (
              <tr key={i} className="border-b ">
                <td className="p-4 flex items-center">
                  <img
                    src={Shipping}
                    alt="Product image 1"
                    className="w-12 h-12 rounded mr-4"
                  />
                  <span>#GB{order?._id}</span>
                </td>
                <td className="p-4">{formatDate(order?.createdAt)}</td>
                <td className="p-4 text-green-500">{order?.orderStatus}</td>
                <td className="p-4">₹ {order?.totalPrice.grandTotal}</td>
                <td className="p-4">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
