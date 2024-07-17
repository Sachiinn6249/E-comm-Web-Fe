import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "@/Store/userAtom";
import Loading from "../Loader/Loading";

const UserRoute = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        // await new Promise(resolve => setTimeout(resolve, 500));
        const response = await axiosInstance.get("user/check");
        const user = response.data;
        
        if (user.success === false) {
          navigate("/grab/login", { replace: true });
        } else {
          setData(user.data);
        }
      } catch (error) {
        console.error("Error checking user", error);
        navigate("/grab/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [navigate, setData]);

  if (loading) {
    return <Loading/>; // Show a loading indicator while checking user
  }

  return data ? children : <Loading/>
};

export default UserRoute;
