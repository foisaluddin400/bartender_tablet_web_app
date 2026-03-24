import { Outlet } from "react-router-dom";
import Header from "../../components/LayoutComponents/Header";
import SidBar from "../../components/LayoutComponents/SidBar";

const DashboardLayout = () => {
  return (
    <div className=" bg-[#0F0B1A] font-nunito">
      

      <div className=" ">
        <Header />
        <div className=" bg-[#0F0B1A]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
