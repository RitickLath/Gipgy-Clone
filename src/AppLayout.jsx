import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="bg-[#121212] pt-6 px-28 text-white w-full h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
