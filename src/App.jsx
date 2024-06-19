import {createBrowserRouter} from "react-router-dom";

import HomeLayout from "./Layout/HomeLayout.jsx";
import AdminLogin from './Pages/Admin/AdminLogin.jsx';
import UserLayout from "./Layout/UserLayout.jsx";
import Errorpage from "./Pages/ErrorPage/Errorpage.jsx";
import AdminLayout from "./Layout/AdminLayout.jsx";
import './index.css'
import ProductPage from "./Pages/ProductPage/ProductPage.jsx";
import CategoryList from "./Pages/ProductPage/CategoryList.jsx";


import UserLogin from "./Pages/User/UserLogin.jsx";
import UserSignIn from "./Pages/User/UserSignIn.jsx";
import ProuductLayout from "./Layout/ProuductLayout.jsx";
import ProductList from "./Pages/ProductPage/ProuductList.jsx";

const App = createBrowserRouter([
  {   
    path:'/',                      
    element: (
     <HomeLayout/>
    ),
  },
  {
    path:'/user/signin',
    element: <UserSignIn/>,
  },
  {
    path:'/user/login',
    element: <UserLogin/>,
  },
  {
    path:'/user/home',
    element: <UserLayout/>, 
  },
  {
    path:'/user/list',
    element: <ProuductLayout/>,
    children:[
      
      {
        path:'category',
        element: <CategoryList/>
      },
      {
        path:'products',
        element: <ProductList/>
      },
      {
        path:'product',
        element: <ProductPage/>
      },
    ]
  },
  {
    path:'/admin/login',
    element: <AdminLogin/>
  },
  {
    path:'/admin/dashboard',
    element: <AdminLayout/>
  },
  {
    path:'*',
    element: <Errorpage/>
  }
  
]);
export default App;
