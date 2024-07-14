import PropTypes from "prop-types";
import Shop from "../../assets/Icons/shop-logo.png";


function SellerTable({seller}) {
  
    return (
      <>
        <div className="flex flex-col mt-8 max-w-6xl mx-5 ">
          <h1 className="text-white text-2xl m-2 font-semibold">Seller Details</h1>
          <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full ">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Email
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                     Owner 
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Verified
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>
  
                <tbody className="bg-white">
                  {
                    seller?.map((seller) => (
                      <tr key={seller?._id}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={Shop}
                              alt=""
                            />
                          </div>
    
                          <div className="ml-4">
                            <div className="text-sm font-medium leading-5 text-gray-900">
                              {seller?.storeName}
                            </div>
                          </div>
                        </div>
                      </td>
    
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">
                          {seller?.email}
                        </div>
                      </td>
    
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          {seller?.name}
                        </span>
                      </td>
    
                      <td className="px-6 py-4 text-sm leading-5 text-emerald-500 whitespace-no-wrap border-b border-gray-200">
                        Verified
                      </td>
    
                      <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                        {/* <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a> */}
                      </td>
                    </tr>
                    ))
                  }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
  SellerTable.propTypes = {
    seller: PropTypes.string.isRequired,
  };
  export default SellerTable;
  