import React from "react";
import { FaShare } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";
import { MdFavorite } from "react-icons/md";

const ThirdDiv = ({ a }) => {
  return (
    <div className="md:block third lg:pl-4">
      <div className="sm:mt-12">
        <h1 className="flex space-x-4 text-white font-bold mb-4 mt-1">
          <MdFavorite className="mt-1" size={20} />
          <span>Favourite</span>
        </h1>
        <h1 className="flex space-x-4 text-white font-bold mb-4 mt-1">
          <FaShare className="mt-1" size={20} />
          <span>Share</span>
        </h1>
        <h1 className="flex space-x-4 text-white font-bold mb-4 mt-1">
          <ImEmbed2 className="mt-1" size={20} />
          <span>Embed</span>
        </h1>
      </div>
    </div>
  );
};

export default ThirdDiv;
