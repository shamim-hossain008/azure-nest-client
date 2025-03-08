import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Home/Shared/Footer/Footer";
import Nav from "../pages/Home/Shared/NavBar/Nav";

const MainLayout = () => {
  return (
    <div className="className=”max-w-[2520px] max-auto xl:px20 md:px-10 sm:px-2 px-4”">
      <Nav />

      <div className="flex-1 bg-green-800">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
