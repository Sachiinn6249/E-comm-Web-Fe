import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { adminState } from "@/Store/adminAtom";
import Loading from "../Loader/Loading";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useRecoilState(adminState);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      const response = await axiosInstance.get("admin/check", {
        withCredentials: true,
      });
      const admin = response.data;
      if (admin.success === false) {
        navigate("/admin/login", { replace: true });
      }
      setAdmin(admin.data);
      setData(admin.data);
    };
    checkAdmin();
  }, [navigate,setData]);
  console.log(admin);
  return admin ? children : <Loading/>;
};

export default AdminRoute;
