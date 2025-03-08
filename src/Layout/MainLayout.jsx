import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <h2>MainLayout</h2>
      <Nav />
      <div>
        <Outlet />
      </div>
      <footer />
    </div>
  );
};

export default MainLayout;
