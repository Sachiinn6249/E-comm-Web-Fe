import PropTypes from "prop-types";
import { BadgePlus } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { images, brand, name, rating = 5.0, price, _id, slug } = product;
  const imgUrl = images?.[0]?.url || 'placeholder-image-url'; // Provide a fallback image URL
  const id = _id;
  return (
    <Link to={`/user/product/${slug}/${id}`} className="max-w-[304px] mx-auto cursor-pointer rounded-lg p-1">
      <div className="flex justify-center bg-transparent rounded-md">
        <img
          className="h-60 w-72 object-cover rounded-xl border-black dark:border-white border-b-4 border-t-4 border-l-2 border-r-2"
          alt={name}
          src={imgUrl}
        />
      </div>
      <div className="group mx-auto p-2 w-72 dark:border-white">
        <p className="text-gray-500 text-sm">{brand}</p>
        <div className="flex text-lg font-medium mb-2">
          <p className="text-white text-md flex-1">{name}</p>
          <span className="h-4 mr-2 ml-3 rounded bg-green px-2.5 py-0.5 text-xs">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-white text-md">₹{price}</p>
          {/* <BadgePlus className="text-white hover:animate-spin" /> */}
        </div>
      </div>
    </Link>
  );
}
ProductCard.propTypes = {
  product: PropTypes.string.isRequired,
};
export default ProductCard;
