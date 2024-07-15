import AdminLayout from "@/Layout/AdminLayout";
import HomeLayout from "@/Layout/HomeLayout";
import UserLayout from "@/Layout/UserLayout";
import AdminHome from "@/Pages/Admin/AdminHome";
import Errorpage from "@/Pages/ErrorPage/Errorpage";
import HomePage from "@/Pages/Home/HomePage";
import SuccessPage from "@/Pages/SuccessPage/SuccessPage";
import CartPage from "@/Pages/User/CartPage";
import CategroryPage from "@/Pages/User/CategroryPage";
import CheckoutPage from "@/Pages/User/CheckoutPage";
import ConfirmPage from "@/Pages/User/ConfirmPage";
import OrderHistoryPage from "@/Pages/User/OrderHistoryPage";
import ProductDetailPage from "@/Pages/User/ProductDetailPage";
import ProductListpage from "@/Pages/User/ProductListpage";
import UserLogin from "@/Pages/User/UserLogin";
import UserRegister from "@/Pages/User/UserRegister";
import WhishListPage from "@/Pages/User/WhishListPage";
import AdminLogin from "@/Pages/Admin/AdminLogin";
import AdminRoute from "@/components/ProtectedRoute/AdminRoute";
import UserRoutes from "@/components/ProtectedRoute/UserRoute";
import OrderPage from "@/Pages/Admin/OrderPage";
import UserDetails from "@/Pages/Admin/UserDetails";
import SellerDetails from "@/Pages/Admin/SellerDetails";
import SellerLogin from "@/Pages/Seller/SellerLogin";
import SellerRegister from "@/Pages/Seller/SellerRegister";
import SellerRoute from "@/components/ProtectedRoute/SellerRoute";
import SellerLayout from "@/Layout/SellerLayout";
import SellerHomePage from "@/Pages/Seller/SellerHomePage";
import SellerOrderPage from "@/Pages/Seller/SellerOrderPage";
import AddProductPage from "@/Pages/Seller/AddProductPage";
import SellerProductPage from "@/Pages/Seller/SellerProductPage";

export const routes = [
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "grab/login",
    element: <UserLogin />,
  },
  {
    path: "grab/register",
    element: <UserRegister />,
  },

  {
    element: (
      <UserRoutes>
        <UserLayout />
      </UserRoutes>
    ),
    children: [
      {
        path: "user/home",
        element: <HomePage />,
      },
      {
        path: "user/category",
        element: <CategroryPage />,
      },
      {
        path: "user/product/:category",
        element: <ProductListpage/>,
      },
      {
        path: "user/product/:keyword",
        element: <ProductListpage/>,
      },
      {
        path: "user/product/:slug/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "user/cart",
        element: <CartPage />,
      },
      {
        path: "user/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/user/my-orders",
        element: <OrderHistoryPage />,
      },
      {
        path: "user/whish-list",
        element: <WhishListPage />,
      },
      {
        path: "user/confirm-checkout",
        element: <ConfirmPage/>,
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ],
  },
  {
    path: "user/order/success",
    element: <SuccessPage/>,
  },
  {
    path: "/seller/login",
        element:<SellerLogin/>
  },
  {
    path: "/seller/register",
        element:<SellerRegister/>
  },
  {
    element:(
      <SellerRoute>
        <SellerLayout/>
      </SellerRoute>
    ),
    children:[
      {
        path: "/seller/home",
        element: <SellerHomePage/>
      },
      {
        path: "/seller/orders",
        element: <SellerOrderPage/>
      },
      {
        path: "/seller/Add/products",
        element: <AddProductPage/>
      },
      {
        path: "/seller/product/list",
        element: <SellerProductPage/>
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ]
  },
  {
    path: "/admin/login",
        element: <AdminLogin/>
  },
  {
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children:[
      {
      path: "/admin/home",
      element: <AdminHome/>
      },
      {
        path: "/admin/orders",
        element: <OrderPage/>
      },
      {
        path: "/admin/users",
        element: <UserDetails/>
      },
      {
        path: "/admin/sellers",
        element: <SellerDetails/>
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ]
  },
  {
    path: "*",
    element: <Errorpage />,
  },
];
