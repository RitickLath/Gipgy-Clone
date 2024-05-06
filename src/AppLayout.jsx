import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import SearchBar from "./Components/SearchBar";

const AppLayout = () => {
  return (
    <div className="bg-[#121212] pt-6 px-3 sm:px-8 lg:px-28 text-white w-full">
      <Navbar />
      <SearchBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
