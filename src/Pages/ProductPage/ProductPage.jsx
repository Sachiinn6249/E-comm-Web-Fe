import { Heart } from "lucide-react"
import Delivery from '../../assets/Icons/delivery-icon.svg'
import Return from '../../assets/Icons/returun-guaranty.svg'
import BreadCrumb from "@/components/ui/BreadCrumb"
import SimilarProuducts from "@/components/Sections/SimilarProducts"

export default function ProductPage() {
    return (
      <>
        <div className="container mt-10  mx-auto p-5  dark:text-zinc-200 md:px-20 shadow-lg rounded-md  ">
          <div className="flex flex-col md:flex-row  ">
            <div className=" flex flex-col-reverse gap-3 md:gap-8 md:flex-row flex-1  object-contain md:mx-5   ">
            <div className="flex mb-5 md:flex-col gap-x-2 md:ml-5 md:gap-5 ">
              <img src="https://placehold.co/100x100" alt="Gamepad Image 1" className="w-15 h-20 md:w-24 md:h-24 object-cover"/>
              <img src="https://placehold.co/100x100" alt="Gamepad Image 2" className="w-15 h-20 md:w-24 md:h-24 object-cover"/>
              <img src="https://placehold.co/100x100" alt="Gamepad Image 3" className="w-15 h-20 md:w-24 md:h-24 object-cover"/>
              <img src="https://placehold.co/100x100" alt="Gamepad Image 4" className="w-15 h-20 md:w-24 md:h-24 object-cover"/>
              
            </div>
            <div className="  overflow-hidden rounded-lg px-5 ">
                 <img src="data:image/jpeg;base64,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" alt="Main  Image" className=" w-full h-full  object-cover " />
            </div>
            </div>
            <div className="flex-1 px-5 md:px-0 ">
            <BreadCrumb/>
              <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="text-zinc-500 text-sm ml-2">(150 Reviews)</span>
                </div>
                <span className="text-green-500 text-sm">In Stock</span>
              </div>
              <p className="text-2xl font-bold mt-2">₹192.00</p>
              <p className="text-zinc-600 dark:text-zinc-200/80 mt-2">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.</p>
              <div className="mt-4">
                <h2 className="font-semibold">Colours:</h2>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="w-6 h-6 bg-red-500 rounded-full"></button>
                  <button className="w-6 h-6 bg-blue-500 rounded-full"></button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-semibold">Size:</h2>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="px-2 py-1 border rounded">XS</button>
                  <button className="px-2 py-1 border rounded">S</button>
                  <button className="px-2 py-1 border rounded bg-red-500 text-white">M</button>
                  <button className="px-2 py-1 border rounded">L</button>
                  <button className="px-2 py-1 border rounded">XL</button>
                </div>
              </div>
              <div className="flex items-center mt-4 space-x-2">
                {/* <button className="px-2 py-1 border rounded">-</button>
                <span>2</span>
                <button className="px-2 py-1 border rounded">+</button> */}
                <button className="px-4 py-2 bg-red-500 text-white rounded">Buy Now</button>
                <button className="px-4 py-2 border rounded"><Heart/></button>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex items-center space-x-2">
                  <img src={Delivery} alt="Free Delivery Icon" className="w-6 h-6"/>
                  <div>
                    <p className="font-semibold">Free Delivery</p>
                    <p className="text-zinc-600 dark:text-zinc-200/50 text-sm">Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <img src={Return} alt="Return Delivery Icon" className="w-6 h-6"/>
                  <div>
                    <p className="font-semibold">Return Delivery</p>
                    <p className="text-zinc-600 dark:text-zinc-200/50 text-sm">Free 30 Days Delivery Returns. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <SimilarProuducts title={"Similar Products"}/>
         <div>
       </div>
       </>
    )
}