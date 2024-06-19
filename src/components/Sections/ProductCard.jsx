import { Link } from "react-router-dom";

function ProductCard() {
  return <>
  <Link to={"/user/list/products"}>
  <div className=" max-w-[304px] mx-auto rounded-lg p-1 ">
  <div className="flex justify-center  ">
              <img className=" h-72 object-cover  rounded-lg shadow-lg " src="https://pagedone.io/asset/uploads/1701157826.png" />
            </div >
            <div className="p-2  ">
            <p className="text-gray-500 text-sm b">Nike</p>
              <div className=" flex  text-lg font-medium  mb-2 ">
              <p className="text-white text-md flex-1">Mens Face Cream</p>
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
              </div>
              <p className="text-white text-md ">₹750</p>
            </div>
  </div>
  </Link>     
          
    </>
}

export default ProductCard;
