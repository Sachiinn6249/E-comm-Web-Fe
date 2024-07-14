import PropTypes from "prop-types";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


function  ProductSlide({product}) {
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
    <div className="group max-w-6xl flex flex-col justify-center mx-auto mt-8">
      <div className='flex  items-center mt-5 mb-5'>
      <h1 className='dark:text-white  text-2xl ml-12 cursor-pointer'></h1>
      <ArrowRight className='w-5 ml-3 mr-3 dark:text-white group-hover:animate-pulse'/>
      <Link to={"/user/category"} className='dark:text-white'>View All Products</Link>
      </div>
      <Slider {...settings}>
       {product && product.length > 0 ? (
          product.map((product) => (
              <ProductCard  key={product.id} product={product}  />
          ))
        ) : (
          <div >No products available.</div>
        )}
      </Slider>
    </div>
  );
}
ProductSlide.propTypes = {
  product: PropTypes.string.isRequired,
};
export default ProductSlide;
