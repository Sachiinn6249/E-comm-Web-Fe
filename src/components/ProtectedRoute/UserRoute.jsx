// import { useEffect, useState } from "react";
// import axiosInstance from "@/config/axiosInstance";
// import { useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { userState } from "@/Store/userAtom";
// import UserLogin from "@/Pages/User/UserLogin";

// const UserRoute = ({ children }) => {
  
//   const navigate = useNavigate();
  
//   const [data, setData] = useRecoilState(userState);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const checkUser = async () => {
//       const response = await axiosInstance.get("user/check", {
//         withCredentials: true,
//       });
      
//       const user = response.data;
//       console.log(user.success);
     
//       if (user.success === false || !user) {
//         navigate("/grab/login", { replace: true });
//       }
//       await setUser(user.data);
//       await setData(user.data);
//     };
//     checkUser();
//   }, [navigate, setData]);

//   return user ? children : <UserLogin/>;
// };

// export default UserRoute;
