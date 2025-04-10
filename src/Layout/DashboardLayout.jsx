import { Outlet } from "react-router";
import Sidebar from "../Components/DashboardCom/Sideber/Sideber";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen text-center md:flex">
      {/* Sidebar */}

      <Sidebar />
      {/* Outlet --> Dynamic content */}
      <div className="flex-1 md:ml-10">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
