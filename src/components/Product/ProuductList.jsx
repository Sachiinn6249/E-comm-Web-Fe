import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';



const itemsPerPage = 9; // 3 columns * 3 rows

function ProductList({product}) {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    // Scroll to top when currentPage changes
    window.scrollTo({ top: 1, behavior: 'smooth' });
  }, [currentPage]);

  const totalPages = Math.ceil(product?.length / itemsPerPage);
  console.log(totalPages);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = product?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
        {selectedItems?.map((item) => (
          <ProductCard product={item} key={item.id}/>
        ))}
      </div>
      {
        totalPages > 1 && 
        <div className="flex justify-center my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      }
     
    </>
  );
}
ProductList.propTypes = {
  product: PropTypes.string.isRequired,
};
export default ProductList;
