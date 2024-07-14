import { getAllSellers } from "@/api/adminAuth";
import SellerTable from "@/components/Admin/SellerTable";
import { useQuery } from "@tanstack/react-query";


const SellerDetails = () => {
    const {
        data:sellers,
        // isError,
        // isLoading,
        // error,
      } = useQuery({
        queryKey: ["allsellers"],
        queryFn: getAllSellers,
        retry: false,
      });
      console.log(sellers);
  return <>
  <SellerTable seller={sellers}/>
  </>;
};

export default SellerDetails;
