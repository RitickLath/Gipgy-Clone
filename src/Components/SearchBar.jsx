import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [search, setSearch] = useState();
  return (
    <div className="lg:px-4 flex w-full pb-4">
      <input
        className="px-4 h-14 w-[95%]  rounded-md text-lg outline-none text-black"
        type="text"
        placeholder="Search all the GIFs and Stickers"
      />
      <button className="w-[60px] lg:w-[5%] bg-white rounded-sm flex justify-center items-center">
        <FaSearch size={20} className="text-black" />
      </button>
    </div>
  );
};

export default SearchBar;
