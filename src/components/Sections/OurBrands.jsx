import Dior from '../../assets/Brands/Dior_new.svg'
import Nike from '../../assets/Brands/nike-11.svg'
import Channel from '../../assets/Brands/chanel-2.svg'
import Ralph from '../../assets/Brands/ralphlauren.svg'
import Addidas from '../../assets/Brands/adidas-8.svg'
import LouisVuiton from '../../assets/Brands/output.svg'
import Puma from '../../assets/Brands/Puma-svg.svg'
import Mango from '../../assets/Brands/mango-4.svg'

function OurBrands() {
  return <>
    <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
                <span className="text-indigo-600 dark:text-white text-center font-medium mb-4 block">OUR PARTNERS</span>
                <h1 className="text-4xl text-gray-900 dark:text-white text-center font-bold">Associated Premium Brands</h1>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4">
                <a href="#"
                    className="flex justify-center items-center border border-solid dark:bg-zinc-400 border-gray-200 shadow-sm h-24 b rounded-2xl">
                    <img src={Channel} alt="" className=' h-24  p-3 rounded-2xl ' />

                </a>
                <a href="#"
                    className="flex justify-center items-center border border-solid dark:bg-zinc-400  border-gray-200 shadow-sm h-24 b rounded-2xl">
                    <img src={LouisVuiton} alt="" className=' h-24 p-3 rounded-2xl ' />

                </a>
                <a href="#"
                    className="flex justify-center items-center border border-solid dark:bg-zinc-400 border-gray-200 shadow-sm h-24 b rounded-2xl">
                    <img src={Ralph} alt="" className=' object-cover h-24 p-3 rounded-2xl ' />

                </a>
                <a href="#"
                    className="flex justify-center items-center border border-solid dark:bg-zinc-400 border-gray-200 shadow-sm h-24 b rounded-2xl">
                    <img src={Dior} alt="" className=' object-cover h-24 p-3 rounded-2xl ' />

                </a>
                <a href="#"
                    className="flex justify-center items-center border border-solid dark:bg-zinc-400 border-gray-200 shadow-sm h-24 b rounded-2xl">
                    <img src={Mango} alt="" className='  h-24 p-3 rounded-2xl ' />

                </a>
                <a href="#"
                    className="flex justify-center items-center border border-solid dark:bg-zinc-400 border-gray-200 shadow-sm h-24 b rounded-2xl">
                    <img src={Addidas} alt="" className=' h-24 p-3 rounded-2xl ' />

                </a>
                <a href="#"
                    className="flex justify-center items-center border border-solid dark:bg-zinc-400 border-gray-200 shadow-sm h-24 b rounded-2xl">
                    <img src={Nike} alt="" className=' object-cover h-24 p-3 rounded-2xl ' />

                </a>
                <a href="#"
                    className="flex justify-center items-center border border-solid dark:bg-zinc-400 border-gray-200 shadow-sm h-24 b rounded-2xl">
                    <img src={Puma} alt="" className='  h-24 p-3rounded-2xl ' />

                </a>
            </div>
        </div>
    </section>
                                            
  </>;
}

export default OurBrands;
