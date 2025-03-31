import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Home/Shared/Footer/Footer";
import Nav from "../pages/Home/Shared/NavBar/Nav";

const MainLayout = () => {
  return (
    <div className="max-w-[2520px] max-auto xl:px20 md:px-10 sm:px-2 px-4 ">
      <Nav />

      <div className="pt-20 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
