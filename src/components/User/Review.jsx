// import "@coreui/coreui/dist/css/coreui.min.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getProductReview } from "@/api/productApi";
export default function Review() {
  const { id } = useParams();
  console.log(id);
  const {
    data: review,
    // isError,
    // isLoading,
    // error,
  } = useQuery({
    queryKey: ["review", id],
    queryFn: getProductReview,
    retry: false,
  });
  console.log(review);
  // console.log(review.length);
  return (
    <div className="max-w-6xl mx-auto  p-6 dark:text-white mt-8 ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Reviews</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 py-2">
        <div className="">
          <h3 className="text-xl font-semibold">Total Reviews</h3>
          <p className="text-3xl font-bold">10.0k</p>
          <p className="text-green-500">
            21%{" "}
            <span className="text-zinc-500 dark:text-zinc-400">
              Growth in reviews on this year
            </span>
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold">Average Rating</h3>
          <p className="text-3xl font-bold">4.0</p>
          <div className="flex items-center">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="ml-2 text-zinc-500 dark:text-zinc-400">
              Average rating on this year
            </span>
          </div>
        </div>
        <div className=" ">
          <div className="space-y-1">
            <div className="flex gap-3  items-center">
              <span>5</span>
              <div className="">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={5}
                  readOnly
                  className="text-white"
                />
              </div>
              <span>2.0k</span>
            </div>
            <div className="flex gap-3  items-center">
              <span>4</span>
              <div className="">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={4}
                  readOnly
                  className="text-white"
                />
              </div>
              <span>2.0k</span>
            </div>
            <div className="flex gap-3  items-center">
              <span>3</span>
              <div className="">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={3}
                  readOnly
                  className="text-white"
                />
              </div>
              <span>2.0k</span>
            </div>
            <div className="flex gap-3  items-center">
              <span>2</span>
              <div className="">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={2}
                  readOnly
                  className="text-white"
                />
              </div>
              <span>2.0k</span>
            </div>
            <div className="flex gap-3  items-center">
              <span>1</span>
              <div className="">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={1}
                  readOnly
                  className="text-white"
                />
              </div>
              <span>2.0k</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 ">
        {review  &&
         review?.slice().reverse().map((user) => (
            <>
              <div className="flex flex-col  mb-2 bg-zinc-50/55 dark:bg-zinc-700/50 p-4 rounded-lg shadow ">
                <div className="flex items-start bg">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.avatarUrl}
                    alt="Reviewer Image"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{user.username}</h4>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center">
                    <Rating
                      style={{ maxWidth: 80 }}
                      value={user.rating}
                      readOnly
                      className="text-white"
                    />
                    <span className="ml-2 text-zinc-500 dark:text-zinc-400">
                      24-10-2022
                    </span>
                  </div>
                  <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                    {user.comment}
                  </p>
                  {/* <div className="flex mt-4 space-x-2"></div> */}
                </div>
              </div>
            </>
          ))}  
          {
            review?.length === 0 && (
              <div className="text-center mt-8 text-lg text-gray-500">No Reviews Found⌛</div>
            )
          }
      </div>
    </div>
  );
}
