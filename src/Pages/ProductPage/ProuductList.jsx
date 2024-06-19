import { useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    image: "https://pagedone.io/asset/uploads/1701157826.png",
    title: "Men's Facial",
    price: "$25",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600x360",
    title: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x360",
    title: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/600x360",
    title: "Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/600x360",
    title: "Product 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/600x360",
    title: "Product 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/600x360",
    title: "Product 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/600x360",
    title: "Product 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    image: "https://via.placeholder.com/600x360",
    title: "Product 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10,
    image: "https://via.placeholder.com/600x360",
    title: "Product 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 11,
    image: "https://via.placeholder.com/600x360",
    title: "Product 11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 12,
    image: "https://via.placeholder.com/600x360",
    title: "Product 12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 13,
    image: "https://via.placeholder.com/600x360",
    title: "Product 13",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 14,
    image: "https://via.placeholder.com/600x360",
    title: "Product 14",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 15,
    image: "https://via.placeholder.com/600x360",
    title: "Product 15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 16,
    image: "https://via.placeholder.com/600x360",
    title: "Product 16",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 17,
    image: "https://via.placeholder.com/600x360",
    title: "Product 17",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 18,
    image: "https://via.placeholder.com/600x360",
    title: "Product 18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more products as needed
];

const itemsPerPage = 9; // 3 columns * 3 rows

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
        {selectedItems.map((item) => (
          <Link to={"/user/list/product"} key={item.id} >
          <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative">
              <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />
              {item.price && (
                <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">{item.price}</div>
              )}
            </div>
            <div className="p-4">
              <div className="text-lg font-medium text-gray-800 mb-2">{item.title}</div>
              {item.description && (
                <p className="text-gray-500 text-sm">{item.description}</p>
              )}
            </div>
          </div>
          </Link>
        ))}
      </div>
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
    </>
  );
}

export default ProductList;
