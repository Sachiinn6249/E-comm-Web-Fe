
import AutoScroll from "../ui/AutoScroll";
import Fashion from '../../assets/Images/Fashion Cover.jpeg'
import Cover from '../../assets/Images/Adidas Poster design _ Made with pixellab.jpeg'
function NewHero() {
  return(<>
     <div className=" h-screen  ">
     <div className="relative flex h-screen flex-col md:flex-row gap-3 mx-8 -z-10 logoAni2 ">      
       <div className="bg-emerald-500  md:w-4/6 h-[77%] my-5 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
       <img src={Cover} alt="Fashion Trends" className="w-full object-cover h-full   rounded-2xl    "/>
            <div className="absolute inset-5  flex flex-col justify-center items-start p-4">
              <h2 className="text-white text-2xl font-bold">Grab The Trends</h2>

            </div>
       </div>
       <div className="hidden md:block bg-yellow-400 w-full h-[77%] my-5 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
       <img src={Fashion} alt="Fashion Trends" className="w-full object-cover h-full   rounded-2xl    "/>
            <div className="absolute inset-5  flex flex-col justify-center items-start p-4">
              <h2 className="text-white text-2xl font-bold">Grab The Trends</h2>

            </div>
       </div>
       <div className="md:hidden"><button className="bg-red-400 w-full h-[80px] text-white text-2xl rounded-2xl text-center font-bold">Shop Now</button></div>
    </div>
     </div>
    <AutoScroll/>
    </>
  );
}

export default NewHero;
