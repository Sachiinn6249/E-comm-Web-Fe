import { UserLogout } from "@/api/userAuth";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Bell,
  Cross,
  GanttChartIcon,
  Headset,
  Heart,
  Home,
  LogOut,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link,useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "@/Store/userAtom";
export function Drawer() {
  const navigate = useNavigate();
  const data = useRecoilState(userState);
 const  user= data[0]
  const handleLogout = () => {
    UserLogout();
    navigate("/")
  };
  return (
    <Sheet >
      <SheetTrigger asChild>
        <button>
          <GanttChartIcon
            className=" text-black dark:text-white hover:animate-bounce mr-5"
            size={"30px"}
          />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-light-gradient shadow-xl shadow-yellow-200 rounded-">
        <SheetHeader>
          <SheetTitle className=" border-b-4 border-emerald-300">
            {" "}
            <div className="flex items-center space-x-4 mb-6 ">
              <img
                src={user.avatarUrl}
                alt="User profile picture"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-xs">Good Day 👋</p>
                <p className="font-bold">{user.username}</p>
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-screen w-64 bg-card text-card-foreground p-4">
          <nav className="flex flex-col space-y-2">
          <SheetClose asChild>
            <Link
              to={"/user/home"}
              className="flex bg-black/20 items-center space-x-2 text-foreground hover:bg-muted p-2 rounded hover:bg-emerald-400"
            >
              <Home/>
              <span className="font-semibold">Home</span>
            </Link>
            </SheetClose>
          <SheetClose asChild>
            <Link
              to={"#"}
              className="flex bg-black/20 items-center space-x-2 text-foreground hover:bg-muted p-2 rounded hover:bg-emerald-400"
            >
              <User />
              <span className="font-semibold">Account</span>
            </Link>
            </SheetClose>
            <SheetClose asChild>
            <Link
              to={"/user/my-orders"}
              className="flex items-center bg-black/20 space-x-2  text-primary-foreground p-2 rounded hover:bg-emerald-400"
            >
              <ShoppingCart />
              <span className="font-semibold">Orders</span>
            </Link>
            </SheetClose> 

            <SheetClose asChild>
            <Link
              to={"user/whish-list"}
              className="flex items-center space-x-2 bg-black/20 text-foreground hover:bg-muted p-2 rounded hover:bg-emerald-400"
            >
              <Heart />
              <span className="font-semibold">Wishlist</span>
            </Link>
            </SheetClose>
            
            <SheetClose asChild>
            <Link
              to={"#"}
              className="flex items-center space-x-2 text-foreground bg-black/20 hover:bg-muted p-2 rounded hover:bg-emerald-400"
            >
              <Bell />
              <span className="font-semibold">Notification</span>
            </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                to="#"
                className="flex items-center space-x-2 text-foreground bg-black/20 hover:bg-muted p-2 rounded hover:bg-emerald-400"
              >
                <Headset />
                <span className="font-semibold">Customer Support</span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
            <button
              href="#"
              className="flex items-center space-x-2 bg-black/20 text-foreground hover:bg-muted p-2 rounded hover:bg-emerald-400"
              onClick={ handleLogout}
           >
              <LogOut />
              <span className="font-semibold">Logout</span>
            </button>
            </SheetClose>
          </nav>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button type="submit"><Cross/></button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
