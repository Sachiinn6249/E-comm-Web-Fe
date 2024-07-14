import axiosInstance from "@/config/axiosInstance";
import Toast from "@/components/ui/Toast";
import "react-toastify/dist/ReactToastify.css";

export const fetchProducts = async () => {
  const product = await axiosInstance.get("product/list/all", {
    withCredentials: true,
  });
  return product.data.data;
};

export const fetchProductById = async ({ queryKey }) => {
  const [, id] = queryKey;
  const product = await axiosInstance.get(`product/list/${id}`, {
    withCredentials: true,
  });
  console.log("single Product:", product.data);
  return product.data.data;
};

export const fetchProductByCategory = async (queryKey) => {
  const { search, name, category, subcategory, gender, brand, sizechart, minPrice, maxPrice, tags } = queryKey;
  
  let params = {};

  if (search) params.search = search;
  if (name) params.name = name;
  if (category) params.category = category;
  if (subcategory) params.subcategory = subcategory;
  if (gender) params.gender = gender;
  if (brand) params.brand = brand;
  if (sizechart) params.sizechart = sizechart;
  if (minPrice) params.minPrice = minPrice;
  if (maxPrice) params.maxPrice = maxPrice;
  if (tags) params.tags = tags;
  try {
    const response = await axiosInstance.get("product/list/search", {
      params,
      withCredentials: true,
    });
    console.log("By Category:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching product by category:", error);
    throw new Error(
      error.response?.data?.message || "Error fetching product by category"
    );
  }
};

//Add to cart
export const AddToCart = async ({ userId, data }) => {
  try {
    const response = await axiosInstance.post(
      `/product/cart/add/${userId}`,
      data,
      {
        withCredentials: true,
      }
    );
    const product = response.data.data.products;
    console.log("Product:", product);
    if (product.length === 0) {
      Toast({ type: "success", message: "Removed From Cart!" });
    } else {
      Toast({ type: "success", message: "Added To Cart!" });
    }
    return response.data.data;
  } catch (error) {
    console.error("Error in Add To Cart:", error);
    throw new Error(
      error.response?.data?.message || "Error fetching product by category"
    );
  }
};

//Update Cart

export const updateCart = async ({ userId, productId, quantity }) => {
  try {
    const response = await axiosInstance.put(`/product/cart/update/${userId}`, {
      productId,
      quantity,
    },
    {
      withCredentials: true,
    });
    console.log("Updated Cart:", response.data.message);
    return response.data.message;
  } catch (error) {
    console.error("Error in Update Cart:", error);
    throw new Error(
      error.response?.data?.message || "Error updating cart"
    );
  }
};

//get cart items
export const getCartItems = async ({queryKey}) => {
  const [, id] = queryKey;
  try {
    const response = await axiosInstance.get(`product/cart/get/${id}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error in get Cart Items:", error);
    throw new Error(
      error.response?.data?.message || "Error fetching product by category"
    );
  }
};

//Remove from cart

export const removeFromCart = async ({ userId, productId }) => {
  try {
    const response = await axiosInstance.post(`/product/cart/remove/${userId}`, 
      { productId },
      {
      withCredentials: true,
    });
    console.log("Removed From Cart:", response.data.message);
    Toast({ type: "success", message: response.data.message });
    return response.data.message;
  } catch (error) {
    console.error("Error in Remove From Cart:", error);
    throw new Error(
      error.response?.data?.message || "Error removing from cart"
    );
  }
};


//Add to favorites
export const addToFavorites = async ({ userId, productId }) => {
  try {
    const response = await axiosInstance.post(
      `/product/favorite/add/${userId}`,
      { productId },
      {
        withCredentials: true,
      }
    );
    console.log("Added to Favorites:", response.data.message);
    Toast({ type: "success", message: response.data.message});
    return response.data.message;
  } catch (error) {
    console.error("Error in Add To Favorites:", error);
    throw new Error(
      error.response?.data?.message || "Error adding to favorites"
    );
  }
};

//get favorite list

export const getFavoriteList = async ({ queryKey }) => {
  const [, id] = queryKey;
  try {
    const response = await axiosInstance.get(`/product/favorite/get/${id}`, {
      withCredentials: true,
    });
    console.log("Favorite List:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error in Get Favorite List:", error);
    throw new Error(
      error.response?.data?.message || "Error getting favorite list"
    );
  }
};


//Add Product Reviw
export const addProductReview = async ({ userId,  data }) => {
  try {
    const response = await axiosInstance.post(
      `/product/review/add/${userId}`,
        data,
      {
        withCredentials: true,
      }
    );
    console.log("Product Review:", response.data.message);
    return response.data.message;
  } catch (error) {
    console.error("Error in Add Product Review:", error);
    throw new Error(
      error.response?.data?.message || "Error adding product review"
    );
  }
};

//Get product review
export const getProductReview = async ({ queryKey }) => {
  const [, id] = queryKey;
  try {
    const response = await axiosInstance.get(`/product/review/get/${id}`, {
      withCredentials: true,
    });
    console.log("Product Review:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error in Get Product Review:", error);
    throw new Error(
      error.response?.data?.message || "Error getting product review"
    );
  }
};
