import BarChart from "@/components/Admin/BarChart";
import RadialChart from "@/components/Admin/RadialChart";
import TopSection from "@/components/Admin/TopSection";

const AdminHome = () => {
  return (
      <>
        <div className="h-[450px]">
          <h1 className="dark:text-white text-2xl p-3 font-semibold">
            Trending Products & Category
          </h1>
          <TopSection />
          <div className=" flex my-4 h-full ">
            <RadialChart />
            <BarChart />
          </div>
        </div>
      </>
  );
};

export default AdminHome;
