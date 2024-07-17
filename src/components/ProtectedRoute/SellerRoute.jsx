import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sellerState } from "@/Store/sellerAtom";
import Loading from "../Loader/Loading";

const SellerRoute = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useRecoilState(sellerState);
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const checkSeller = async () => {
      const response = await axiosInstance.get("seller/check", {
        withCredentials: true,
      });
      const seller = response.data;
      console.log(seller);
      if (seller.success === false) {
        navigate("/seller/login", { replace: true });
      }
      setSeller(seller.data);
      setData(seller.data);
    };
    checkSeller();
  }, [navigate,setData]);

  return seller ? children : <Loading/>;
};

export default SellerRoute;
