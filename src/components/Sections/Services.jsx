import Delivery from "../../assets/Icons/delivery-icon.svg";
import Customer from "../../assets/Icons/customer-care.svg";
import Guarantee from "../../assets/Icons/returun-guaranty.svg";

function Services() {
  return (
    <section className="text-gray-700 body-font">
      <div className="flex justify-center mt-10 text-4xl font-regular dark:text-white">
        Why Us?
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src={Delivery} className="w-24 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900 dark:text-white">
                FREE AND FAST DELIVERY
              </h2>
              <p className="text-zinc-600 dark:text-white opacity-60">
                Free delivery for all orders over ₹800
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src={Guarantee} className="w-24 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900 dark:text-white">
                MONEY BACK GUARANTEE
              </h2>
              <p className="text-zinc-600 dark:text-white opacity-60">
                We return money within 30 days
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src={Customer} className="w-24 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900 dark:text-white">
                24/7 CUSTOMER SERVICE
              </h2>
              <p className="text-zinc-600 dark:text-white opacity-60">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>

          {/* <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div> */}
        </div>
      </div>
    </section>
  );
}

export default Services;
