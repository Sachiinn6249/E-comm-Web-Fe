import axiosInstance from "@/config/axiosInstance";
import { userState } from "@/Store/userAtom";
import {  useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";


import { getCartItems } from "@/api/productApi";
import { getOrder } from "@/api/orderApi";
import Loading from "../Loader/Loading";


import { CircleCheckBig } from "lucide-react";

const ConfirmDetails = () => {
    const user = useRecoilValue(userState);
    const userId = user?._id;
    const {
    data: orders,
  } = useQuery({
    queryKey: ["order", userId],
    queryFn: getOrder,
    retry: false,
  });
  const userDetails = orders?.shippingInfo
      const {
        data: cart,
        // isError,
        isLoading,
        // error,
      } = useQuery({
        queryKey: ["cart", userId],
        queryFn: getCartItems,
        retry: false,
      });

      if (isLoading) {
        return <Loading/>;
      }
    
     
      const handleCheckout = async () => {
        // const stripe = await loadStripe(import.meta.env.VITE_API_STRIPE_PUBLISHABLE_KEY);
        try {
          const response = await axiosInstance.post(`payment/checkout/${userId}`, {
            withCredentials: true,
          });
    
          const data = response.data; // Make sure to access the response data correctly
    
          console.log('Checkout session created:', data);
    
          if (data.url) {
            window.location.href = data.url; // Redirect to the Stripe checkout URL
          } else {
            console.error('Error creating Stripe checkout session:', data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return <>
    <div className="  min-h-screen p-6 flex flex-col items-center">
        <div className="flex justify-center mb-6 gap-3 ">
          <div className="flex items-center ">
            <div className="w-8 h-8  rounded-full flex bg-white items-center justify-center text-white">
              <CircleCheckBig className="text-white fill-green" />
            </div>
            <span className="ml-2 text-emerald-500 ">Shipping Details</span>
            <div className="hidden md:block w-20 h-0.5 ml-2 my-5 border-dashed border-b-2"></div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center text-black">
              2
            </div>
            <span className="ml-2 text-blue-500">Confirm Details</span>
          </div>
          <div className="hidden  md:block w-20 h-0.5 my-5 border-dashed border-b-2"></div>
          <div className="flex items-center ">
            <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center text-black">
              3
            </div>
            <span className="ml-2 text-zinc-500">Order Summary</span>
          </div>
        </div>
        <div className="bg-dark-gradient dark:bg-zinc-700 shadow-lg shadow-black dark:shadow-white/50 rounded-lg p-6 w-full max-w-6xl flex flex-col md:flex-row">
           <div className="w-full md:w-2/3 pr-0 md:pr-6 mb-6 md:mb-0">
      <h2 className="text-xl font-bold mb-4 text-zinc-100">
        Shipping Address
      </h2>
      <div>
        <p className="text-xl text-zinc-300">{userDetails?.fullName}</p>
        <p className="text-xl text-zinc-300">{userDetails?.address}</p>
        <p className="text-xl text-zinc-300">{userDetails?.city}</p>
        <p className="text-xl text-zinc-300">{userDetails?.state}</p>
        <p className="text-xl text-zinc-300">{userDetails?.pincode}</p>
        <p className="text-xl text-zinc-300">{userDetails?.phoneNo}</p>
       
      </div>
    </div>
          <div className="w-full md:w-1/3">
            <div className="max-w-md mx-auto bg-emerald-300 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="border-t border-zinc-200 dark:border-zinc-700 py-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 ">Subtotal</span>
                  <span className="text-black font-semibold">₹ {cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 ">Discount</span>
                  <span className="text-black/55 font-semibold">0.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 ">Shipping</span>
                  <span className="text-black/55 font-semibold">Free</span>
                </div>
              </div>
              <div className="border-t border-zinc-200 dark:border-zinc-700 py-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-black">Total</span>
                  <span className="text-black">₹ {cart?.totalPrice}</span>
                </div>
              </div>
              <div className="flex">
                <button 
                onClick={handleCheckout}
                className="bg-black w-full text-white px-4 py-2 rounded-md ">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>;
};

export default ConfirmDetails;
