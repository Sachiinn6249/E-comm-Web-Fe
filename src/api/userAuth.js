import axiosInstance from "@/config/axiosInstance";
import Toast from "@/components/ui/Toast";
import 'react-toastify/dist/ReactToastify.css';


export const registerHandler = async (data) => {
  try {
    const response = await axiosInstance.post("user/register", data);
    Toast({ type: "success", message: response.data.message });
  } catch (error) {
    Toast({ type: "error", message: "Registraion Failed!" });
    throw error;
  }
};

export const LoginHandler = async (data) => {
  try {
    const response  = await axiosInstance.post("user/login", data,{
      withCredentials: true,
    });
    Toast({ type: "success", message: "Login  Successfull!" });
    return response.data;
  } catch (error) {
    Toast({ type: "error", message:"Login Failed!"});
    throw error;
  }
};

export const UserLogout = async () => {
  try {
    await axiosInstance.post("user/logout");
    Toast({ type: "success", message: "Logout successful!" });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred during logout.";
    Toast({ type: "error", message: errorMessage });
    throw error;
  }
};

