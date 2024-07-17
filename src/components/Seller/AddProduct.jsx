import { Link, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { sellerState } from "@/Store/sellerAtom";

import { addProducts } from "@/api/sellerApi";
// import axios from "axios";
function AddProduct() {
  const navigate = useNavigate();
  const seller = useRecoilValue(sellerState);
  const id = seller?._id;
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      name: "",
      tags: [""],
      description: "",
      specifications: [""],
      price: 0,
      // discountprice: 0,
      images: [],
      brand: "",
      category: "",
      subcategory: "",
      gender: "",
      sizechart: [""],
      stock: 1,
    },
  });

  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control,
    name: "tags",
  });

  const {
    fields: specFields,
    append: appendSpec,
    remove: removeSpec,
  } = useFieldArray({
    control,
    name: "specifications",
  });

  const {
    fields: sizeChartFields,
    append: appendSizeChart,
    remove: removeSizeChart,
  } = useFieldArray({
    control,
    name: "sizechart",
  });

  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedImages((prevImages) => [...prevImages, ...files]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key])) {
        data[key].forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      } else {
        formData.append(key, data[key]);
      }
    });

    uploadedImages.forEach((file) => {
      formData.append(`images`, file);
      // Removed: formData.append(`images[${index}][url]`, file);
    });
    try {
      console.log(formData);
      await addProducts(id, formData);
      reset();
      setUploadedImages([]);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-black  text-white flex h-auto  flex-col items-center pt-16 sm:justify-center sm:pt-0">
        <div className="  relative mt-12 w-full max-w-5xl sm:mt-10 mb-5">
          <div className=" relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
          <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                Add Product
              </h3>
            </div>
            <div className="p-6 pt-0">
              <form>
                <div className="flex gap-3">
                  <div className="w-full">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label
                            htmlFor="name"
                            className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                          >
                            Name
                          </label>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          {...register("name", { required: true })}
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                            Brand
                          </label>
                        </div>
                        <input
                          type="text"
                          id="brand"
                          name="brand"
                          {...register("brand", { required: true })}
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* category and subcategory */}
                <div className="flex gap-3">
                  <div className="mt-4 w-full">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label
                            htmlFor="category"
                            className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                          >
                            Category
                          </label>
                        </div>
                        <div className="flex items-center">
                          <select
                            id="category"
                            {...register("category", { required: true })}
                            className="block w-full border-0 bg-black p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                          >
                            <option value=""></option>
                            <option value="clothing">Clothing</option>
                            <option value="footwear">Footwear</option>
                            <option value="electronics">Electronics</option>
                            <option value="home_decor">Home Decor</option>
                            <option value="toys">Toys</option>
                            {/* Add more category options */}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 w-full">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400 ">
                            Sub Category
                          </label>
                        </div>
                        <div className="flex items-center">
                          <select
                            id="subcategory"
                            {...register("subcategory", { required: true })}
                            className="block w-full border-0 bg-black p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                          >
                            <option value=""></option>
                            {/* Populate subcategories based on selected category using API or options */}
                            {watch("category") === "clothing" && (
                              <>
                                <option value="shirts">Shirts</option>
                                <option value="shirts">T-Shirts</option>
                                <option value="pants">Pants</option>
                                <option value="dresses">Dresses</option>
                              </>
                            )}
                            {watch("category") === "footwear" && (
                              <>
                                <option value="shirts">Shoes</option>
                                <option value="shirts">Sandals</option>
                                <option value="pants">Slippers</option>
                                <option value="dresses">Loafers</option>
                              </>
                            )}
                            {watch("category") === "electronics" && (
                              <>
                                <option value="phones">Phones</option>
                                <option value="laptops">Laptops</option>
                                <option value="televisions">Televisions</option>
                                <option value="televisions">Headset & Ear Buds</option>
                              </>
                            )}
                            {watch("category") === "home_decor" && (
                              <>
                                <option value="furniture">Furniture</option>
                                <option value="lighting">Lighting</option>
                                <option value="wall_decor">Wall Decor</option>
                              </>
                            )}
                            {watch("category") === "toys" && (
                              <>
                                <option value="action_figures">
                                  Action Figures
                                </option>
                                <option value="dolls">Dolls</option>
                                <option value="board_games">Board Games</option>
                              </>
                            )}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Price and Stock */}
                <div className="flex gap-3">
                  <div className="w-full mt-4">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label
                            htmlFor="price"
                            className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                          >
                            Price
                          </label>
                        </div>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          {...register("price", { required: true })}
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* size and for */}
                <div className="flex gap-3">
                  <div className="w-full mt-4">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label
                            htmlFor="stock"
                            className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                          >
                            Add Stock
                          </label>
                        </div>
                        <input
                          type="number"
                          id="stock"
                          name="stock"
                          {...register("stock", { required: true })}
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label
                            htmlFor="sizechart"
                            className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                          >
                            Available Sizes
                          </label>
                        </div>
                        {sizeChartFields.map((item, index) => (
                          <div key={item.id} className="flex items-center mb-2">
                            <input
                              type="text"
                              id="sizechart"
                              name="sizechart"
                              {...register(`sizechart.${index}`)}
                              className="block w-full border-dotted border-b-2 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                            />
                            <button
                              type="button"
                              onClick={() => removeSizeChart(index)}
                              className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => appendSizeChart("")}
                          className="px-3 py-1 bg-green-500 text-white rounded"
                        >
                          Add Size
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label
                            htmlFor="gender"
                            className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                          >
                            For
                          </label>
                        </div>
                        <select
                          {...register("gender")}
                          className="w-full bg-black px-3 py-1 rounded"
                        >
                          <option value="Mens">Mens</option>
                          <option value="Womens">Womens</option>
                          <option value="Kids">Kids</option>
                          <option value="Unisex">Unisex</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* specs and tags */}
                <div className="flex gap-3">
                  <div className="w-full mt-4 ">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label
                            htmlFor="specifications"
                            className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                          >
                            Specifications
                          </label>
                        </div>
                        {specFields.map((item, index) => (
                          <div key={item.id} className="flex items-center mb-2">
                            <input
                              type="text"
                              id="specifications"
                              name="specifications"
                              {...register(`specifications.${index}`)}
                              className="block w-full border-dotted border-b-2  bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                            />
                            <button
                              type="button"
                              onClick={() => removeSpec(index)}
                              className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => appendSpec("")}
                          className="px-3 py-1 bg-green-500 text-white rounded"
                        >
                          Add Specification
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-4 ">
                    <div>
                      <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div className="flex justify-between">
                          <label
                            htmlFor="tags"
                            className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                          >
                            Tags
                          </label>
                        </div>
                        {tagFields.map((item, index) => (
                          <div key={item.id} className="flex items-center mb-2">
                            <input
                              type="text"
                              id="tags"
                              name="tags"
                              {...register(`tags.${index}`)}
                              className="block w-full border-dotted border-b-2  bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                            />
                            <button
                              type="button"
                              onClick={() => removeTag(index)}
                              className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => appendTag("")}
                          className="px-3 py-1 bg-green-500 text-white rounded"
                        >
                          Add Tags
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* description  */}
                <div className="w-full mt-4">
                  <div>
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
                        <label
                          htmlFor="name"
                          className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                        >
                          Description
                        </label>
                      </div>
                      <textarea
                        {...register("description")}
                        className="w-full px-3 py-1 mt-2 border rounded bg-black"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Upload file */}
                <div className="w-full mt-4 focus-within:border-sky-200">
                  <label className="block text-gray-700 rounded-md py-2">
                    Images
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={handleImageUpload}
                    className="w-full px-3 py-2 border rounded mb-2"
                  />
                  <div className="flex flex-wrap gap-2">
                    {uploadedImages.map((file, index) => (
                      <div
                        key={index}
                        className="w-20 h-20 bg-gray-100 border flex items-center justify-center"
                      >
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-emerald-200">
                      Please Check All Details Before Submit
                    </span>
                  </label>
                </div>
                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <Link
                    to={"/user/signin"}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                    href="/register"
                  >
                    Cancel
                  </Link>
                  <Link
                    to={"/seller/home"}
                    className="font-semibold  hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-400 text-black h-10 px-4 py-2"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Add Product
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
