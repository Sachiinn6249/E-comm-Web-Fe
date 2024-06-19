import  { useState } from 'react';
import { GanttChartIcon } from 'lucide-react';
import { XIcon } from 'lucide-react';
import { MenuGrid } from '../ui/MenuGrid';
const AnimatedMenu = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="hidden md:block ">
        <GanttChartIcon  className=" text-black dark:text-white hover:animate-bounce" size={'35px'} onClick={() => setHovered(!hovered)}
      />
      <div className={`absolute z-2000  top-0  right-3.5    w-[98%]  h-[80vh] bg-blend-darken rounded-3xl   shadow-2xl  bg-dark-gradient  ${hovered ? 'appear' : 'disappear'} `}>
       <div className=' w-full rounded-l-3xl '>
       <div className='flex justify-between mx-5  my-2    bg-transparent rounded-lg '>
        <div className=''>
        <h1 className='text-5xl font-bold text-white mb-3'><span className='text-yellow-300'>#</span>grab</h1>
        </div>
        <div className='cursor-pointer'>
          <XIcon size={'40px'} color='white' onClick={() => setHovered(!hovered)} />
        </div>
          </div>   
          <MenuGrid/>     
        </div>      
      </div>
    </div>
  );
};

export default AnimatedMenu;
// import Arrow from '../assets/New-arrow.svg'

// function AnimatedMenu() {
//   return <>
//   <div className="menu flex flex-col">
//   <div className="label login flex w-20  ">
//   <img src={Arrow} alt="" className='w-80'/>
//   </div>
//   <div className="spacer"></div>
//   <div className="item"><span className='login'>Twitter</span></div>
//   <div className="item"><span>Instagram</span></div>
//   <div className="item"><span>Flickr</span></div>
//   <div className="item"><span>Behance</span></div>
//   <div className="item"><span>MixCloud</span></div>
// </div>
//   </>;
// }

// export default AnimatedMenu;
