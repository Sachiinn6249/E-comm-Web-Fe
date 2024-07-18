import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '@/Store/userAtom';

import { getFavoriteList } from '@/api/productApi';
import NotAvailable from '@/Pages/ErrorPage/NotAvailable';
import Loading from '../Loader/Loading';

function FavoriteList() {
  const user =useRecoilValue(userState);
  const id = user?._id;
  
  const {
    data:favorites,
    isLoading,
  } = useQuery({
    queryKey: ["favorite", id],
    queryFn: getFavoriteList,
    retry: false,
  });
  console.log(favorites)
  if(isLoading){
    return <Loading/>
  }
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-white mb-8 max-lg:text-center">
            Favorite list
          </h2>
          {favorites?.length === 0 && (
          <div className="text-center mt-8 text-lg text-gray-500 w-full   flex flex-col justify-center">
           <h1>No Items Found in Favorite List ⌛{" "} </h1> 
           <div>
            <NotAvailable/>
           </div>
            <span>
              <button className="bg-black rounded-md px-3 py-1.5 text-white hover:scale-90">
                Shop Now!
              </button>
            </span>
          </div>
        )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         
            {
              favorites &&
              favorites?.map((favorite) => (
                <a
                key={favorite.productId?._id}
                href="javascript:;"
                className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto  transition-all duration-500"
              >
                <div key={favorite.id}
                 className="">
                  <img
                    src={favorite?.productId?.images[0].url}
                    alt="face cream image"
                    className="w-full aspect-square rounded-xl"
                  />
                </div>
                <div  key={favorite.id} className="mt-5">
                  <div className="flex items-center justify-between">
                    <h6 className="font-semibold text-xl leading-8 text-black dark:text-white transition-all duration-500 group-hover:text-indigo-600">
                     {favorite?.productId?.name}
                    </h6>
                    <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                    ₹ {favorite?.productId?.price}
                    </h6>
                  </div>
                  <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
                    {favorite?.productId?.brand}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FavoriteList;
