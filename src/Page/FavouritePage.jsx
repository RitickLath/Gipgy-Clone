import React, { useState } from "react";
import { GifState } from "../context/Context";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavouritePage = () => {
  const { favourite, setFavourite } = GifState();
  const [selected, setSelected] = useState(false);

  const removeFromFavourite = (a) => {
    const updatedFavourite = favourite.filter((item) => item !== a);

    setFavourite(updatedFavourite);
  };

  //console.log(favourite[0]);
  return (
    <div className="flex flex-wrap">
      {favourite.map((f, index) => (
        <div key={index} className="relative">
          <img
            className="relative"
            style={{ marginRight: "10px", marginBottom: "10px" }}
            src={f}
            alt=""
          />
          <FaHeart
            onClick={() => {
              setSelected(!selected);
              removeFromFavourite(f);
            }}
            size={40}
            className="absolute top-4 right-8 cursor-pointer text-red-500"
          />
        </div>
      ))}
    </div>
  );
};

export default FavouritePage;
