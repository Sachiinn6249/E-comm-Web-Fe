import axiosInstance from "@/config/axiosInstance";
import Toast from "@/components/ui/Toast";
import 'react-toastify/dist/ReactToastify.css';


// seller register
export const sellerRegister = async (data) => {
    try {
      const response = await axiosInstance.post("seller/register", data);
      Toast({ type: "success", message: response.data.message });
      console.log(response.data.data);
      if(response.error) 
      return response.data;
    } catch (error) {
      Toast({ type: "error", message: "Registraion Failed!" });
      throw error;
    }
  };

//seller login
export const sellerLogin = async (data) => {
  try {
    const response  = await axiosInstance.post("seller/login", data,{
      withCredentials: true,
    });
    Toast({ type: "success", message: "Login  Successfull!" });
    return response.data; 
  } catch (error) {
    Toast({ type: "error", message:"Login Failed!"});
    throw error;
  }
};

//admin logout

export const sellerLogout = async () => {
  try {
    const response = await axiosInstance.post("admin/logout");
    Toast({ type: "success", message: "Logout Successfull!" });
    return response.data;
  } catch (error) {
    console.error("Error in Seller Logout:", error);
    throw new Error("Error in Seller logout");
  }
};

//get seller orders

export const getSellerOrders = async ({queryKey}) => {
  const [, id] = queryKey;
  try {
    const response = await axiosInstance.get(`seller/orders/${id}`, {
      withCredentials: true,
    });
    console.log("this is order details:", response.data.orders);
    return response.data.orders;
  } catch (error) {
    console.error("Error in get Seller order:", error);
    throw new Error(
      error.response?.data?.message || "Error in get Seller Order"
    );
  }   
};

// Add Prodducts

export const addProducts = async (id,data) => {
  console.log(data);
  try {
    const response = await axiosInstance.post(`seller/add/product/${id}`, data, {
      withCredentials: true,
    });
    Toast({ type: "success", message: response.data.message });
    console.log("this is product details:", response.data.product);
    return response.data.product;
  } catch (error) {
    console.error("Error in add product:", error);
    throw new Error(
      error.response?.data?.message || "Error in add Product"
    );
  }   
};

//get product details

export const getSellerProduct= async ({queryKey}) => {
  const [, id] = queryKey;
  try {
    const response = await axiosInstance.get(`seller/get/product/${id}`, {
      withCredentials: true,
    });
    console.log("this is product details:", response.data.product);
    return response.data.product;
  } catch (error) {
    console.error("Error in get product details:", error);
    throw new Error(
      error.response?.data?.message || "Error in get Product Details"
    );
  }   
};