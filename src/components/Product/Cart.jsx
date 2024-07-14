import PropTypes from "prop-types";
import BreadCrumb from "../ui/BreadCrumb";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartState } from "@/Store/cartAtom";
import { userState } from "@/Store/userAtom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getCartItems, updateCart } from "@/api/productApi";
import { removeFromCart } from "@/api/productApi";
import { Heart } from "lucide-react";
import Coupon from "../ui/Coupon";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import NotAvailable from "@/Pages/ErrorPage/NotAvailable";
import LoadingBar from "../Loader/LoadingBar";

export default function Cart() {
  const user = useRecoilValue(userState);
  const userId = user._id;

  const [cartCount, setCartCount] = useRecoilState(cartState);
  const { control, handleSubmit, setValue, getValues } = useForm();

  const [isCart, setIsCart] = useState(() => {
    const savedIsCart = localStorage.getItem("isCart");
    return savedIsCart ? JSON.parse(savedIsCart) : false;
  });

  const {
    data: cart,
    refetch,
    // isError,
    isLoading,
    // error,
  } = useQuery({
    queryKey: ["cart", userId],
    queryFn: getCartItems,
    retry: false,
  });
  const count = cart?.products?.length;

  useEffect(() => {
    // Scroll to top when currentPage changes
    window.scrollTo({ top: 1, behavior: "smooth" });
    localStorage.removeItem("isCart", JSON.stringify(!isCart));
    setCartCount(count);
  }, [isCart, count, setCartCount]);

  const queryClient = useQueryClient();

  //increase Quantity
  const handleIncreaseQuantity = (productId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    setValue(`quantity_${productId}`, newQuantity);
    handleQuantityChange(productId, newQuantity);
  };
  //decrease Quantity
  const handleDecreaseQuantity = (productId, currentQuantity) => {
    if (currentQuantity <= 1) return;
    const newQuantity = currentQuantity - 1;
    setValue(`quantity_${productId}`, newQuantity);
    handleQuantityChange(productId, newQuantity);
  };
  //change quantity function

  const handleQuantityChange = async (productId, newQuantity) => {
    await updateCart({ userId, productId, quantity: newQuantity });
    queryClient.invalidateQueries(["cart", userId]);
    refetch();
  };

  const handleRemoveCart = (productId) => {
    removeFromCart({ userId, productId });
    queryClient.invalidateQueries(["cart", userId]);
    refetch();
    setIsCart(!isCart);
  };

  if(isLoading){
    return <LoadingBar/>
  }
  return (
    <>
      <div className="max-w-7xl mx-auto mt-4 ">
      {cart?.products.length > 0 && (
        <BreadCrumb category={"user"} item={"Cart"} />
      )}
      </div>
      <div className="max-w-7xl mx-auto my-5 mt-2  p-4  rounded-lg ">
        {cart?.products.length === 0 && (
          <div className="text-center mt-8 text-lg text-gray-500 w-full   flex flex-col justify-center">
           <h1>No Items Found in Cart ⌛{" "} </h1> 
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 space-y-4 ">
            {cart &&
              cart.products
                ?.slice()
                .reverse()
                .map((item) => (
                  <>
                    <div className="md:flex justify-between  items-center  p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                      <div className="flex gap-3  ">
                        <img
                          src={item.product.images[0].url}
                          alt="Sophisticated dress"
                          className="w-24 h-24 rounded-lg mb-2"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold dark:text-white">
                              {item.product.name}
                            </h3>
                            <p className="text-sm dark:text-zinc-300">
                              by {item.product.brand}
                            </p>
                          </div>

                          <p className="text-sm dark:text-zinc-300">
                            Size: {item.size}
                          </p>

                          <div className="flex items-center space-x-2 mt-2 ">
                            <button
                              onClick={() =>
                                handleRemoveCart(item?.product?._id)
                              }
                              className="text-red-500 flex items-center space-x-1"
                            >
                              <span>Remove</span>
                            </button>
                            <button className="text-zinc-500 flex items-center space-x-1">
                              <Heart />
                              <span>Move to wish list</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center  ">
                        <div className="flex items-center mr-24">
                          <button
                            className="text-white bg-black rounded-l-lg px-2 py-1"
                            onClick={() =>
                              handleDecreaseQuantity(
                                item.product._id,
                                getValues(`quantity_${item.product._id}`)
                              )
                            }
                          >
                            -
                          </button>
                          <Controller
                            control={control}
                            name={`quantity_${item.product._id}`}
                            defaultValue={item.quantity}
                            render={({ field }) => (
                              <input
                                {...field}
                                type="number"
                                readOnly
                                className="text-white pl-3 bg-black  font-semibold w-12 text-center py-1 rounded-sm mx-2"
                              />
                            )}
                          />
                          <button
                            className="text-white bg-black rounded-r-lg px-2 py-1"
                            onClick={() =>
                              handleIncreaseQuantity(
                                item.product._id,
                                getValues(`quantity_${item.product._id}`)
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          {/* <p className="text-zinc-500 line-through">$100</p> */}
                          <p className="text-xl font-semibold dark:text-white">
                            {" "}
                            ₹ {item.product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
          </div>
          {cart?.products.length > 0 && (
            <>
              <div className="space-y-4 ">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Order Summary
                  </h3>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm dark:text-zinc-300">Subtotal</span>
                    <span className="text-sm font-semibold dark:text-white">
                      ₹ {cart?.totalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm dark:text-zinc-300">Discount</span>
                    <span className="text-sm font-semibold dark:text-white">
                      0.00
                    </span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm dark:text-zinc-300">Shipping</span>
                    <span className="text-sm font-semibold dark:text-white">
                      Free
                    </span>
                  </div>
                  <div className="flex justify-between mt-4 border-t pt-4">
                    <span className="text-lg font-semibold dark:text-white">
                      Total
                    </span>
                    <span className="text-lg font-semibold dark:text-white">
                    ₹ {cart?.totalPrice}{" "}
                    </span>
                  </div>
                  <p className="text-sm dark:text-zinc-300">including VAT</p>
                  <button
                  className="w-full mt-4 py-2 bg-black text-white rounded-lg">
                    <Link to={"/user/checkout"}>
                    GOT TO CHECKOUT
                    </Link>
                  </button>
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Apply promo code
                  </h3>
                  <div className="flex mt-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 p-2 bg-zinc-100 dark:bg-zinc-600 rounded-l-lg"
                    />
                    <button className="px-4 py-2 bg-black text-white rounded-r-lg">
                      APPLY
                    </button>
                  </div>
                </div>
                <Coupon />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
Cart.propTypes = {
  product: PropTypes.string.isRequired,
};
