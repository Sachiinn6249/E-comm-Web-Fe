import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { userState } from "@/Store/userAtom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { getCartItems } from "@/api/productApi";
import { placeOrder } from "@/api/orderApi";
import LoadingBar from "../Loader/LoadingBar";


function Checkout() {
  const user = useRecoilValue(userState);
  const userId = user?._id;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors },reset } = useForm({
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
      phoneNumber: ""
    }
  });

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
console.log(cart);

const mutation = useMutation({
  mutationFn: placeOrder,
  onSuccess: () => {
    navigate("/user/confirm-checkout")
    // Invalidate and refetch the reviews query
    queryClient.invalidateQueries(['order', userId]);
    reset();
  },
});


const onSubmit = data => { 
  mutation.mutate({ userId, data });
};
if(isLoading){
  return <LoadingBar/>
}
  return (
    <>
      <div className="  min-h-screen p-6 flex flex-col items-center">
        <div className="flex justify-center mb-6 gap-3 ">
          <div className="flex items-center ">
            <div className="w-8 h-8  rounded-full flex bg-zinc-300 items-center  justify-center text-black">
              {/* <CircleCheckBig className="text-white fill-green" /> */}1
            </div>
            <span className="ml-2 text-blue-500">Shipping Details</span>
            <div className="hidden md:block w-20 h-0.5 ml-2 my-5 border-dashed border-b-2"></div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center text-zinc-500">
              2
            </div>
            <span className="ml-2 text-zinc-500">Payment Methods</span>
          </div>
          <div className="hidden  md:block w-20 h-0.5 my-5 border-dashed border-b-2"></div>
          <div className="flex items-center ">
            <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center text-zinc-500">
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
      <form >
        <div className="mb-4">
          <label className="block text-zinc-300 mb-2">Full Name</label>
          <input
            type="text"
            className={`w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded ${errors.fullName ? 'border-red-500' : ''}`}
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-zinc-300 mb-2">Address</label>
          <input
            type="text"
            className={`w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded ${errors.address ? 'border-red-500' : ''}`}
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-zinc-300 mb-2">City</label>
            <input
              type="text"
              className={`w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded ${errors.city ? 'border-red-500' : ''}`}
              {...register("city", { required: "City is required" })}
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-zinc-300 mb-2">State</label>
            <input
              type="text"
              className={`w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded ${errors.state ? 'border-red-500' : ''}`}
              {...register("state", { required: "State is required" })}
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-zinc-300 mb-2">Pin-Code</label>
            <input
              type="text"
              className={`w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded ${errors.pinCode ? 'border-red-500' : ''}`}
              {...register("pinCode", { required: "Pin-Code is required" })}
            />
            {errors.pinCode && <p className="text-red-500">{errors.pinCode.message}</p>}
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-zinc-300 mb-2">Phone Number</label>
            <input
              type="text"
              className={`w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded ${errors.phoneNumber ? 'border-red-500' : ''}`}
              {...register("phoneNumber", { required: "Phone number is required" })}
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
        </div>
      </form>
    </div>
          <div className="w-full md:w-1/3">
            <div className="max-w-md mx-auto bg-emerald-300 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="border-t border-zinc-200 dark:border-zinc-700 py-4">
                {cart &&
                  cart.products
                    ?.map((item) => (
                      <>
                        <div className="flex items-center mb-4">
                          <img
                            src={item.product.images[0].url}
                            alt="Headphone"
                            className="w-12 h-12 mr-4"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-medium">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-gray-900 ">
                              {item.product.brand}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-black font-semibold"> ₹{item.product.price * item.quantity }</p>
                          </div>
                        </div>
                      </>
                    ))}
              </div>
              <div className="border-t border-zinc-200 dark:border-zinc-700 py-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 ">Subtotal</span>
                  <span className="text-black font-semibold">{cart?.totalPrice}</span>
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
                {/* <input
                type="text"
                className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-l"
                placeholder="Use Coupon Code"
              /> */}
                <button 
                onClick={handleSubmit(onSubmit)}
                className="bg-black w-full text-white px-4 py-2 rounded-md ">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
