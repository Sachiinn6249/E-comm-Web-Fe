
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from './ProductCard';

const cards = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Card ${index + 1}`,
  image: 'https://via.placeholder.com/150', // Placeholder image URL
  description: 'This is a description for the card.',
}));

function NewStyle() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="p-4">
      <Slider {...settings}>
        {/* {cards.map((card) => (
          <div key={card.id} className="w-full px-2">
            <div className="h-[350px] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center items-center p-4">
              <img src={card.image} alt={card.title} className="w-full h-3/5 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-bold mb-2">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))} */}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Slider>
    </div>
  );
}

export default NewStyle;
