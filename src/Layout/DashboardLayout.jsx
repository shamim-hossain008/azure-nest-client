import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Components/DashboardCom/Sideber/Sideber";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen bg-red-200 md:flex">
      {/* Sidebar */}
      <h3 className="text-center text-green font-bold">
        This is Dashboard Layout
      </h3>
      <Sidebar />
      {/* Outlet --> Dynamic content */}
      <div className="flex-1 bg-green-400 md:ml-10">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
