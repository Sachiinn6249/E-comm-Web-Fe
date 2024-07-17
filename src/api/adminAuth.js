
import axiosInstance from "@/config/axiosInstance";
import Toast from "@/components/ui/Toast";
import 'react-toastify/dist/ReactToastify.css';


export const adminLogin = async (data) => {
  try {
    const response  = await axiosInstance.post("admin/login", data,{
      withCredentials: true,
    });
    Toast({ type: "success", message: "Login  Successfull!" });
    console.log(response.data);
    return response.data; 
  } catch (error) {
    Toast({ type: "error", message:"Login Failed!"});
    throw error;
  }
};

//admin logout

export const adminLogout = async () => {
  try {
    const response = await axiosInstance.post("admin/logout");
    Toast({ type: "success", message: "Logout Successfull!" });
    return response.data;
  } catch (error) {
    console.error("Error in Admin Logout:", error);
    throw new Error("Error in admin logout");
  }
};

//get all users

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("admin/users", {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error in fetching users:", error);
    throw new Error("Error fetching users");
  }
};

//get all sellers

export const getAllSellers = async () => {
  try {
    const response = await axiosInstance.get("admin/sellers", {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error in fetching sellers:", error);
    throw new Error("Error fetching sellers");
  }
};