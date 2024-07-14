import { getAllUsers } from "@/api/adminAuth";
import UserTable from "@/components/Admin/UserTable";
import { useQuery } from "@tanstack/react-query";


const UserDetails = () => {
    const {
        data:users,
        // isError,
        // isLoading,
        // error,
      } = useQuery({
        queryKey: ["allusers"],
        queryFn: getAllUsers,
        retry: false,
      });
  return <>
  <UserTable users={users}/>
  </>;
};

export default UserDetails;
