import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import TopButton from "../ui/TopButton";
import MobileMenu from "./MobileMenu";


function Footer() {
  const {  isAuthenticated } = useAuth0();
  return <>
    <div className="hidden md:block relative">
        <TopButton/>
       </div>
   <div className=" bg-black text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Exclusive</h3>
            <p className="mb-2">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex items-center border border-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white p-2 flex-grow outline-none"
              />
              <button className="bg-white text-black p-2">
                <img  alt="arrow" src="https://placehold.co/20x20" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Support</h3>
            <p>47 W 13th St, New York, NY 10011, USA.</p>
            <p>grabtrends@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Account</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Link</h3>
            <ul>
              <li>
                <Link to={ !isAuthenticated  && "/admin/login"} className="hover:underline">
                  Admin Support
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Download App</h3>
            <p className="mb-2">20% off  with App "New User Only"</p>
            <div className="flex space-x-2 mb-4">
              <img src="https://placehold.co/50x50" alt="QR Code" />
              <div className="flex flex-col space-y-2">
                <img src="https://placehold.co/100x30" alt="Google Play" />
                <img src="https://placehold.co/100x30" alt="App Store" />
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-zinc-400">
                <img  alt="facebook" src="https://placehold.co/20x20" />
              </a>
              <a href="#" className="hover:text-zinc-400">
                <img  alt="twitter" src="https://placehold.co/20x20" />
              </a>
              <a href="#" className="hover:text-zinc-400">
                <img  alt="instagram" src="https://placehold.co/20x20" />
              </a>
              <a href="#" className="hover:text-zinc-400">
                <img  alt="linkedin" src="https://placehold.co/20x20" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-zinc-500">
          <p>© Copyright grab 2024. All rights reserved</p>
        </div>
       <div className="md:hidden" >
       <MobileMenu/>
        </div>
      </div>
  </>;
}

export default Footer;
