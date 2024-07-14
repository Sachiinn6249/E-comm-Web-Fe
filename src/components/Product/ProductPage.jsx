import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { userState } from "@/Store/userAtom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
   AddToCart,
  removeFromCart,
  addToFavorites
 } from "@/api/productApi";

import BreadCrumb from "../ui/BreadCrumb";
import Delivery from "../../assets/Icons/delivery-icon.svg";
import Return from "../../assets/Icons/returun-guaranty.svg";
import { BadgeX, Check, Heart, ShoppingBag } from "lucide-react";






function ProductPage({ product }) {
   //props data  
   const { name, brand, rating,images, price, description, category, sizechart, _id } =
   product;
  const { id } = useParams();
  const queryClient = useQueryClient();

  const user = useRecoilValue(userState);
  const [currentImage, setCurrentImage] = useState(images.url);
  const [imageIndex, setimageIndex] = useState(0);
  const [Number, setNumber] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [isCart, setIsCart] = useState(() => {
    const savedIsCart = localStorage.getItem('isCart');
    return savedIsCart ? JSON.parse(savedIsCart) :false;
    
  });
  const [isFavorite, setIsFavorite] = useState(() => {
    const savedIsFavorite = localStorage.getItem('isFavorite');
    return savedIsFavorite ? JSON.parse(savedIsFavorite) :false; 
  });
  

 
  useEffect(() => {
    // Scroll to top when currentPage changes
    window.scrollTo({ top: 1, behavior: "smooth" });
    localStorage.setItem('isCart', JSON.stringify(isCart));
    localStorage.setItem('isFavorite', JSON.stringify(isFavorite));
  }, [id,isCart,isFavorite]);

 
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      quantity: 1,
    },
  });

  //for select image
  const handleThumbnailClick = (index) => {
    // setCurrentImage(image);
    setimageIndex(index);
  };

 //increase the quantity
  const increaseQuantity = () => {
    const currentQuantity = getValues("quantity");
    setValue("quantity", currentQuantity + 1);
    setNumber(currentQuantity + 1);
  };

//decrement quantity
  const decreaseQuantity = () => {
    const currentQuantity = getValues("quantity");
    if (currentQuantity > 1) {
      setValue("quantity", currentQuantity - 1);
      setNumber(currentQuantity - 1);
    }
  };
//for selcted size
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const userId = user._id;
  const productId = _id;
  setValue("productId", productId);

 

  const mutation = useMutation({
    mutationFn: AddToCart,
    onSuccess: () => {
      // Invalidate and refetch the reviews query
      queryClient.invalidateQueries(['cart', userId]);
      reset();
    },
  });

//add to cart
  const onSubmit = (data) => {
    mutation.mutate({ userId, data });
    setIsCart(!isCart);
    setValue("quantity", 1);
    setNumber(1);
    reset();
  };


  
  const MutateFavorite = useMutation({
    mutationFn: addToFavorites, 
  });

//ADD TO FAVORITE
  const handleFavoriteClick = () => {
    MutateFavorite.mutate({ userId, productId });
    setIsFavorite(!isFavorite);
    console.log("Add to favorite clicked");
  };
  
  const MutateRemove = useMutation({
    mutationFn: removeFromCart, 
  });

//Remove FAVORITE
  const handleRemoveClick = () => {
    MutateRemove.mutate({ userId, productId });
    queryClient.invalidateQueries(['cart', userId]);
    setIsCart(!isCart);
    console.log("Add to favorite clicked");
  };
  return (
    <>
      <div className="mt-5 flex flex-col md:flex-row max-w-6xl mx-auto ">
        <div className=" px-4  md:px-8   flex flex-col ">
          <div className="flex flex-wrap  justify-center  ">
            <div className="w-full  max-w-[550px]   aspect-square  mb-4 md:mb-0 my-auto">
              <img
                src={images[imageIndex]?.url}
                alt=""
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="mt-5  ">
            <div className="flex space-x-2 max-w-2xl max-h-72 justify-end">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image?.url}
                  alt={`Product Image ${index + 1}`}
                  className={`w-20 h-20 rounded-lg object-cover cursor-pointer hover:opacity-75 ${
                    image?.url === currentImage
                      ? "opacity-100 border border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="">
          <div className="md:ml-5   mx-auto px-5 ">
            <BreadCrumb category={category} item={name} />
            <h1 className="text-2xl mt-3 font-semibold dark:text-white">
              {name}
              <span className="text-xl mt-3 font-semibold dark:text-white d ml-5">{`(By ${brand})`}</span>
            </h1>

            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-yellow-500">
                  {"★".repeat(rating)}
                  {"☆".repeat(5 - rating)}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400  text-sm ml-2">
                  (150 Reviews)
                </span>
              </div>
              <span className="text-green-500 text-sm text-emerald-500">
                In Stock
              </span>
            </div>
            <p className="text-2xl font-bold mt-2 dark:text-white">₹{price}</p>
            <p className="text-zinc-600 dark:text-zinc-200/80 mt-2">
             {description}
            </p>
            <div className="mt-2">
              <div className="py-3 border-b">
                <div className=" items-center mb-2">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-basetext-zinc-600 dark:text-zinc-400  ">
                      Seller Details
                    </span>
                  </div>
                  <div className="flex items-center bg-green-500 text-white text-sm font-semibold     py-1 rounded-full">
                    <span className=" rounded bg-emerald-500 px-2.5 py-0.5 text-xs font-semibold">
                      3.0
                    </span>
                    <span className="ml-2 text-zinc-800 dark:text-zinc-200">
                      Premios Fashion London
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 ">
                  <Check />
                  <span>Certified Seller</span>
                </div>
              </div>
            </div>

            {(category === "Fashion" || category === "Footwear") && (
              <div className="mt-4 ">
                <h2 className="font-semibold dark:text-white">Size:</h2>
                <div className="flex  space-x-2 mt-2  text-white">
                  {sizechart.map((size, i) => (
                    <label className=" w-10" key={i} htmlFor={`size-${i}`}>
                      <input
                        type="radio"
                        id={`size-${i}`}
                        name="size"
                        {...register("size", { required: true })}
                        value={size}
                        className="hidden"
                      />
                      <span
                        onClick={() => handleSizeClick(size)}
                        className={`bg-${
                          selectedSize === size ? "emerald-500" : "black"
                        }  text-white px-2 rounded-sm hover:bg-emerald-400`}
                        style={{ cursor: "pointer" }}
                      >
                        {size}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.size && (
                  <div className="text-red-500 mt-2">Please select a size.</div>
                )}
              </div>
            )}

            <div className="flex  mt-5  items-center mr-24">
              <button
                onClick={decreaseQuantity}
                className="text-white font-bold bg-black rounded-l-lg px-2 py-1 "
              >
                -
              </button>
              <input
                type="number"
                {...register("quantity", { min: 1 })}
                readOnly
                className="hidden text-white bg-black font-semibold w-8 text-center  py-1 rounded-sm "
              />
              <span className="mx-2 text-white bg-black font-semibold px-3 py-1 rounded-sm ">
                {Number}
              </span>
              <button
                onClick={increaseQuantity}
                className="text-white font-bold bg-black rounded-r-lg px-2 py-1"
              >
                +
              </button>
            </div>
            <div className="flex space-x-4 my-5">
              
                {  !isCart &&
                ( <button
                  onClick={handleSubmit(onSubmit)}
                  className="flex items-center bg-emerald-500  border-zinc-400  text-white py-2 px-4 rounded-full"
                  >
                  <ShoppingBag className="mr-2" />
                Add to Bag
                </button>) 
                }   
              {
                 isCart &&
                ( <button
                  onClick={ handleRemoveClick}
                  className="flex items-center bg-red-500 border-zinc-400  text-white py-2 px-4 rounded-full"
                  >
                  <BadgeX className="mr-2 text-white"/>
                Remove From Cart
                </button>)
              }
              <p {...register("productId")} className="hidden">
                {productId}
              </p>
              <button onClick={handleFavoriteClick}
              className="flex items-center border  border-zinc-400 text-zinc-700 dark:text-white py-2 px-4 rounded-full">
                <Heart  className="mr-2 dark:text-white" fill={`${isFavorite ? "red" : "white"}`} />
                Favorites
              </button>
            </div>

            <div className="mt-4 border-t ">
              <div className="py-3 flex"></div>
              <div className="flex items-center space-x-2">
                <img
                  src={Delivery}
                  alt="Free Delivery Icon"
                  className="w-10 h-10"
                />
                <div>
                  <p className="font-semibold dark:text-white">Free Delivery</p>
                  <p className="text-zinc-600 dark:text-zinc-200/50 text-sm">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <img
                  src={Return}
                  alt="Return Delivery Icon"
                  className="w-10 h-10"
                />
                <div>
                  <p className="font-semibold dark:text-white">
                    Return Delivery
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-200/50 text-sm">
                    Free 30 Days Delivery Returns.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
ProductPage.propTypes = {
  product: PropTypes.string.isRequired,
};
export default ProductPage;
