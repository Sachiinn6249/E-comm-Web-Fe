import Banner1 from '../../assets/Banner/Banner3.jpeg';
import Banner2 from '../../assets/Banner/Banner8.jpeg';

const Banner = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 py-16 flex flex-row  gap-2 items-center">
        <img src={Banner1} alt="Image 1" className="w-1/2 rounded-lg object-cover shadow-lg" />
        <img src={Banner2} alt="Image 2" className="w-1/2 rounded-lg object-cover shadow-lg" />
      </div>
    </section>
  );
};

export default Banner;
