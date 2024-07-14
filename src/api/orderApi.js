import axiosInstance from "@/config/axiosInstance";

//place order

export const placeOrder = async ({userId,data}) => {
 
  try {
    const response  = await axiosInstance.post(`order/place-order/${userId}`, data, {
      withCredentials: true,
    });
    console.log("this order placed:",response.data.data._id);
    return response.data.data;
  } catch (error) {
    console.error("Error in Place Order:", error);
    throw new Error(
      error.response?.data?.message || "Error in Place Order"
    );
  }
};

//get order by id
export const getOrder = async ({ queryKey }) => {
  try {
    const [, userId] = queryKey;
    const response = await axiosInstance.get(`order/get-order/${userId}`, {
      withCredentials: true,
    });
    console.log("this is order details:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error in get order:", error);
    throw new Error(
      error.response?.data?.message || "Error in get Order"
    );
  }   
  };

//get full order list
export const getOrderList = async ({ queryKey }) => {
  try {
    const [, userId] = queryKey;
    const response = await axiosInstance.get(`order/get-order/list/${userId}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error in get order list:", error);
    throw new Error(
      error.response?.data?.message || "Error in get Order list"
    );
  }   
  };
 

//get complete order list

export const getAllOrders = async () => {
  try {
    const response = await axiosInstance.get("order/get/all/orders", {
      withCredentials: true,
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error in get complete order list:", error);
    throw new Error(
      error.response?.data?.message || "Error in get complete Order list"
    );
  }   
  };