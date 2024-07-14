import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useProductFilters } from "@/hooks/productFilter";
import { useRecoilState } from "recoil";
import { searchState } from "@/Store/searchAtom";

import "../../Styles/RadioButton.css";

import ProductList from "./ProuductList";
import { ListFilter } from "lucide-react";
import BreadCrumb from "../ui/BreadCrumb";
import NotAvailable from "@/Pages/ErrorPage/NotAvailable";
import LoadingBar from "../Loader/LoadingBar";


function ProductWithFilter() {
  const { category} = useParams();
  const { register, handleSubmit,reset } = useForm();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [Visible, setVisible] = useState(false);
  const [Search, setSearch] = useRecoilState(searchState);
   
  if(category){
    setSearch(category);
  }
  console.log(Search);
  const {
    data: products,
    isLoading,
    // isError,
    // error,
    updateFilters,
  } = useProductFilters(Search );

  const showFilter = () => {
    setVisible(!Visible);
  };

  const onSubmit = (data) => {
    updateFilters(data);
    reset();
  };

  const subcategoryOptions = {
    cloth: ["shirt", "pant", "jeans"],
    electronics: ["tv", "laptop", "mobile"],
    homefurniture: ["chair", "table", "sofa"],
  };
  
  const sizeChart = {
    footwear: ["UK-6", "UK-7", "UK-8", "UK-9", "UK-10"],
    cloth: ["S", "M", "L", "XL", "XXL"],
  };
  if(isLoading){
    return <LoadingBar/>
  }
  return (
    <div className="flex mx-auto flex-col lg:flex-row ">
      <div className="flex bg-black px-1 md:hidden ">
        <ListFilter className="text-white" onClick={showFilter} />
      </div>
      <div className={`${Visible ? "block" : "hidden"} md:block lg:w-1/5 p-4`}>
        <div className="mb-4 ">
          <div className="flex items-center">
            <ListFilter className="h-4 dark:text-gray-400" />
            <h1 className="font-semibold text-lg dark:text-gray-400 py-1">Filter</h1>
          </div>
          <label htmlFor="category" className="block text-gray-700 dark:text-gray-400 mb-2">
            Category:
          </label>
          <select
            id="category"
            {...register("category")}
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="cloth">Cloth</option>
            <option value="footwear">Footwear</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Home & Furniture</option>
          </select>
        </div>

        <div className="mb-4 ">
          <label htmlFor="subcategory" className="block text-gray-700 dark:text-gray-400 mb-2">
            Subcategory:
          </label>
          <select
            id="subcategory"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("subcategory")}
          >
            <option value="">Select a subcategory</option>
            {subcategoryOptions[selectedCategory]?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mydict mb-4">
          <label className="block text-gray-700 dark:text-gray-400 mb-2">For:</label>
          <div className="w-full  ">
            <label>
              <input
                type="radio"
                name="radio"
                {...register("gender")}
                value="Men"
              />
              <span>Men</span>
            </label>
            <label>
              <input
                type="radio"
                name="radio"
                {...register("gender")}
                value="Women"
              />
              <span>Women</span>
            </label>
            <label>
              <input
                type="radio"
                name="radio"
                {...register("gender")}
                value="Kids"
              />
              <span>Kids</span>
            </label>
            <label>
              <input
                type="radio"
                name="radio"
                {...register("gender")}
                value="Unisex"
              />
              <span>Unisex</span>
            </label>
          </div>
        </div>

        {/* <div className="mb-4">
          <label htmlFor="brand" className="block text-gray-700 mb-2">
            Brand:
          </label>
          <input
            type="text"
            id="brand"
            {...register("brand")}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div> */}

        <div>
          <label className="text-gray-700 dark:text-gray-400">Price Range:</label>
          <div className="flex mt-3 w-full gap-3 mb-4 ">
            <div className="flex gap-2 items-center">
              <label htmlFor="minPrice" className="block text-gray-700 dark:text-gray-400 mb-2">
                Min:
              </label>
              <input
                type="number"
                id="minPrice"
                {...register("minPrice")}
                className="w-[80px] rounded-md p-2"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="maxPrice" className="block text-gray-700 dark:text-gray-400 mb-2">
                Max:
              </label>
              <input
                type="number"
                id="maxPrice"
                {...register("maxPrice")}
                className="w-[80px] rounded-md p-2"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="sizeChart"
            className="w-full block text-gray-700 dark:text-gray-400 mb-2"
          >
            Size Chart:
          </label>
          <select
            id="sizeChart"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("sizeChart")}
          >
            <option value="">Size</option>
            {sizeChart[selectedCategory]?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md"
        >
          Apply
        </button>
      </div>
      <div className="lg:w-3/4 p-4">
        <div>
          {" "}
          <BreadCrumb category={Search}  />
        </div>
        {
          products?.length === 0? (
           <NotAvailable title={"No Items Found !!"}/>
          ) : null
        }
        <ProductList product={products} />
      </div>
    </div>
  );
}

export default ProductWithFilter;
