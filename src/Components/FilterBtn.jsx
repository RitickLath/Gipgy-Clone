import React from "react";
import { GifState } from "../context/Context";

const FilterBtn = ({ setrendered }) => {
  const { filter, setFilter } = GifState();
  return (
    <div className="flex md:justify-end lg:mr-4">
      <div className="w-full flex justify-around md:w-[60%] lg:w-[40%] bg-[#2E2E2E] rounded-xl">
        <button
          onClick={() => {
            setFilter("gifs");
            setrendered(true);
          }}
          className={`text-lg rounded-xl font-semibold flex-1 py-2 ${
            filter === "gifs" ? "bg-gray-600" : ""
          }`}
        >
          GIFs
        </button>
        <button
          onClick={() => {
            setFilter("stickers");
            setrendered(true);
          }}
          className={`text-lg rounded-xl font-semibold flex-1 py-2 ${
            filter === "stickers" ? "bg-gray-600" : ""
          }`}
        >
          Stickers
        </button>
        <button
          onClick={() => {
            setFilter("text");
            setrendered(true);
          }}
          className={`text-lg rounded-xl font-semibold flex-1 py-2 ${
            filter === "text" ? "bg-gray-600" : ""
          }`}
        >
          Clips
        </button>
      </div>
    </div>
  );
};

export default FilterBtn;
