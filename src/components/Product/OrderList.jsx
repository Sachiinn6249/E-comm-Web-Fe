import PropTypes from "prop-types";
import Shipping from '../../assets/category/order-new2.jpeg'

const OrderList = ({ orders }) => {
  console.log(orders)
  const ordersArray = Array.isArray(orders) ? orders : [orders]; 
  console.log(ordersArray.length);
  function formatDate(dateString) {
    const formattedDate = new Date(dateString).toLocaleString(); // Format createdAt
    return formattedDate;
  }
  return (
    <>
    <div className="flex flex-col mt-8 max-w-6xl mx-5 ">
        <h1 className="text-white text-2xl m-2 font-semibold">Recent Order Details</h1>
       {
        orders?.length === 0 && 
        <div className="flex flex-col items-center text-center ">
          <img src={Shipping} alt="Shipping" className="w-20 h-20" />
          <h2 className="text-white text-xl">No recent orders found.</h2>
        </div>
       }
       {
        ordersArray?.length > 0 &&
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full ">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    OrderId
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    User
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Date
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Payment Status
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Verify Order
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
               {
                 ordersArray?.map((order) => (
                  <tr key={order?._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-4 flex items-center">
                      <img
                    src={Shipping}
                    alt="Product image 1"
                    className="w-12 h-12 rounded mr-4"
                  />
                        <div className="text-sm font-medium leading-5 text-gray-900">
                          #GB{order?._id}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td  key={order?._id} className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      {order?.shippingInfo?.fullName}
                    </div>
                  </td>

                  <td  key={order?._id} className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    {formatDate(order?.createdAt)}
                    </span>
                  </td>

                  <td  key={order?._id} className="px-6 py-4 text-sm leading-5 text-blue-500 whitespace-no-wrap border-b border-gray-200">
                    {order?.orderStatus}
                  </td>

                  <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                    {order?.totalPrice?.grandTotal}
                  </td>

                  <td  key={order?._id} className={`px-6 py-4 text-sm leading-5 ${!order?.paymentInfo?.status ? "text-orange-500" : "text-emerald-400" } text-gray-500 whitespace-no-wrap border-b border-gray-200`}>
                    {!order?.paymentInfo?.status ? "Not Paid" : "Paid"}
                  </td>

                  <td  key={order?._id} className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                  <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Verify
                    </a>
                  </td>

                  <td  key={order?._id} className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                   
                  </td>
                </tr>
                ))
               } 
              </tbody>
            </table>
          </div>
        </div>
          }
      </div>
    </>
  );
};
OrderList.propTypes = {
  orders: PropTypes.string.isRequired,
};
export default OrderList;
