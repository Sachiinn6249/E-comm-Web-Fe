import ProductList from "./ProuductList";

function ProductWithFilter() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-3/4 p-4">
        <ProductList />
      </div>
      <div className="lg:w-1/4 p-4">
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Filters</h2>
          {/* Add filter options here */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>All</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Price Range</label>
            <input type="range" min="0" max="100" className="w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Rating</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>All</option>
              <option>1 Star & Up</option>
              <option>2 Stars & Up</option>
              <option>3 Stars & Up</option>
              <option>4 Stars & Up</option>
              <option>5 Stars</option>
            </select>
          </div>
          <button className="w-full bg-indigo-500 text-white py-2 rounded-md">Apply Filters</button>
        </div>
      </div>
    </div>
  );
}

export default ProductWithFilter;
