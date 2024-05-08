import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GifState } from "../context/Context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const search = useRef("");
  const { gf, gifs, setGifs } = GifState();
  const navigate = useNavigate();

  const searchFetch = async () => {
    try {
      const result = await gf.search(search?.current?.value, {
        sort: "recent",
      });
      // console.log(`search`, result);
      setGifs(result?.data);
      navigate(`/search/${search?.current?.value}`);
    } catch (error) {
      console.error(`search`, error);
    }
  };

  return (
    <div className="px-2 lg:px-4 flex w-full space-x-2 pb-4">
      <input
        ref={search}
        className="px-4 h-14 w-[95%]  rounded-md text-lg outline-none text-black"
        type="text"
        placeholder="Search all the GIFs and Stickers"
      />
      <button
        onClick={() => {
          // console.log(search?.current?.value);
          searchFetch();
        }}
        className="w-[60px] lg:w-[5%] bg-red-500 rounded-md flex justify-center items-center"
      >
        <FaSearch size={20} className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
