import { Link } from "react-router-dom";

import Mens from "../../assets/Avatar/Mens-avatar.jpeg";
import Womens from "../../assets/Avatar/Womens-avatar.jpeg";
import Kids from "../../assets/Avatar/Kids-avatar.jpeg";
import Mobile from "../../assets/Avatar/Mobile-avatar.jpeg";
import Home from "../../assets/Avatar/Home-avatar.jpeg";
import Electronics from "../../assets/Images/Home and Kitchen.jpeg";

export default function CategoryBar() {
  const navLinks = [
    {
      name: "Men",
      link: "/",
      img: Mens,
    },
    {
      name: "Women",
      link: "/about",
      img: Womens,
    },
    {
      name: "Kids",
      link: "/contact",
      img: Kids,
    },
    {
      name: "Home",
      link: "/login",
      img: Home,
    },
    {
      name: "Mobile",
      link: "/register",
      img: Mobile,
    },
    {
      name: "Electrnics",
      link: "/cart",
      img: Electronics,
    },
  ];
  return (
    <div className="group flex justify-around items-center  mt-2  gap-2  border-emerald-400 ">
      {navLinks.map((data, index) => (
        <Link to={"/user/category"} key={index}>
          <div className="flex flex-col md:flex-row mb-2 px-5  md:gap-3 justify-between items-center hover:scale-90  ">
            <img
              src={data.img}
              alt="Sale"
              className="w-6 h-6 md:w-10 md:h-10 rounded-2xl "
            />
            <span className="mt-2 text-center text-zinc-800 text-xs md:text-sm dark:text-zinc-200 items-center">
              {data.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
