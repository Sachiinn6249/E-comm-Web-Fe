import CouponCover from "../../assets/Avatar/Discount Badge.jpeg";
export default function Coupon() {
  return (
    <div className="w-full justify-end mt-5">
      <div className="flex flex-col gap-2  items-end  px-4  ">
        <div className="w-96 text-white mx-auto">Apply Coupon Codes.</div>
        <div className="max-w-md  bg-white dark:bg-zinc-800 rounded-lg shadow-md flex overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-300 p-4 flex items-center justify-center">
            <img
              src={CouponCover}
              alt="Starbucks Logo"
              className="rounded-full object-center  h-20"
            />
          </div>
          <div className="flex-1 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Black Friday
              </h2>
              <a
                href="#"
                className="text-green-600 text-emerald-300 font-semibold"
              >
                APPLY
              </a>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Valid till 10 December 2024
            </p>
            <hr className="my-2 border-dashed" />
            <div className="flex justify-between">
              <p className="text-red-600 dark:text-red-400 font-semibold">
                Get Up to 10% off
              </p>
              <p className="text-red-600 dark:text-orange-600 font-semibold">
                <span className="text-gray-500"> code ---- </span>FLAT40
              </p>
            </div>
          </div>
        </div>
        <div className="max-w- bg-white dark:bg-zinc-800 rounded-lg shadow-md flex overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-300 p-4 flex items-center justify-center">
            <img
              src={CouponCover}
              alt="Starbucks Logo"
              className="rounded-full object-center  h-20"
            />
          </div>
          <div className="flex-1 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Welcome Coupon
              </h2>
              <a
                href="#"
                className="text-green-600 text-emerald-300 font-semibold"
              >
                APPLY
              </a>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Valid till 10 December 2024
            </p>
            <hr className="my-2 border-dashed" />
            <div className="flex justify-between">
              <p className="text-red-600 dark:text-red-400 font-semibold">
                Get Up to 10% off
              </p>
              <p className="text-red-600 dark:text-orange-600 font-semibold">
                <span className="text-gray-500"> code ---- </span>FLAT40
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
