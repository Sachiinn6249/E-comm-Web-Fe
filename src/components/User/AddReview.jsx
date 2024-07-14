import PropTypes from "prop-types";
import { useRecoilValue } from 'recoil';
import { userState } from '@/Store/userAtom';
import  { useState } from 'react';
import { Controller,  useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
   addProductReview,
   getProductReview 
  } from "@/api/productApi";

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';



const AddReview = ({product}) => {
  
  const user = useRecoilValue(userState);
  const userId = user._id
  const  productId  = product._id;
  console.log(productId);
  const [isCommentFormVisible, setIsCommentFormVisible] = useState(false);


  const handleAddCommentClick = () => {
    setIsCommentFormVisible(!isCommentFormVisible);
  };

  
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      rating: 1,
      comment: '',
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addProductReview,
    onSuccess: () => {
      // Invalidate and refetch the reviews query
      queryClient.invalidateQueries(['review', productId]);
      setIsCommentFormVisible(false);
      reset();
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({ userId, data });
    getProductReview(data?.productId)
    setIsCommentFormVisible(false);
    reset ();// Replace with actual submission logic
  };

  return (
    <div className="flex flex-col px-5  h-20 max-w-6xl mx-auto  ">
      <button
        type="button"
        className="w-40 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none"
        onClick={handleAddCommentClick}
      >
        {isCommentFormVisible ? 'Cancel' : 'Add Review'}
      </button>
      {isCommentFormVisible && (
        <div className="mt-4 border md:w-[60%]   bg-gray-500/35 border-gray-300 rounded-lg p-4 backdrop-blur-2xl" >
          <textarea
            id="comment-input"
            rows="2"
            placeholder="Write your comment here..."
            className="w-full border-none resize-none rounded-lg"
            {...register('comment', { required: true })}
          /> 
            {errors.comment && <span className="text-red-500 text-xs">Please Write Comment Before Submit.</span>}
          <div className="flex items-center mb-4 w-80">
            <label htmlFor="rating" className="text-lg  w-60 font-medium mr-2 dark:text-white">
             Give Rating :
            </label>
            <Controller
              control={control}
              name="rating"
              rules={{
                validate: (rating) => rating > 0,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rating
                  value={value}
                  isRequired
                  onChange={onChange}
                  onBlur={onBlur}
                  size="sm" // Adjust size as needed
                />
              )}
            />
            {errors.rating && <span className="text-red-500 text-xs">Rating is required.</span>}
          </div>
          <input
                        type="text"
                        name="productId"
                        {...register("productId", { required: true })}
                        value={productId}
                        className="hidden"
                      />
          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
AddReview.propTypes = {
  product: PropTypes.string.isRequired,
};

export default AddReview;
