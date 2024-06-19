import { motion } from "framer-motion";
import Noise from "../../assets/Icons/noise-black.png";
import LoadingBar from "./LoadingBar";


const Loader = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: `url(${Noise})`,
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <p className="text-center text-6xl font-black text-neutral-50">
        <span className="text-yellow-400">#</span>grab
      </p>
      <p className="text-center text-neutral-400">
        Unleash the Trendsetter Within.Crafted for the Modern Connoisseur 📺
      </p>
     <LoadingBar/>
    </div>
  );
};

export default Loader;
