import Loader from "@/components/Loader/Loader";
import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [setLoading]);

  if (loading) {
    return <Loader/>;
  }

  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
      <div className="w-full bg-black text-white">
        <Link to={"/admin/login"} className="px-2 flex gap-2 items-center">
          Admin Support
          <span><MoveRight className="text-white"/></span>
          </Link>
      </div>
    </>
  );
}

export default HomeLayout;
