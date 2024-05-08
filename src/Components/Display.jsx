import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GifState } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Display = ({ a, setHover, index, hover }) => {
  const [selected, setSelected] = useState(false);
  const { favourite, setFavourite } = GifState();
  const navigate = useNavigate();

  const addToFavourite = () => {
    setFavourite([...favourite, a.images.fixed_width.webp]);
  };

  const removeFromFavourite = () => {
    const updatedFavourite = favourite.filter(
      (item) => item !== a.images.fixed_width.webp
    );
    setFavourite(updatedFavourite);
  };

  return (
    <div className="relative" key={index}>
      <img
        className="relative group"
        style={{ marginRight: "10px", marginBottom: "10px" }}
        src={a.images.fixed_width.webp}
        alt=""
        onMouseEnter={() => setHover(index)}
        onMouseLeave={() => setHover(null)}
        onClick={() => {
          // console.log(a.id);
          navigate(`/clips/${a?.id}`);
        }}
      />
      {selected ? (
        <FaHeart
          onClick={() => {
            setSelected(!selected);
            removeFromFavourite();
          }}
          size={20}
          className="absolute top-4 right-8 cursor-pointer text-red-500"
        />
      ) : (
        <FaRegHeart
          onClick={() => {
            setSelected(!selected);
            addToFavourite();
          }}
          size={20}
          className="absolute top-4 right-8 cursor-pointer"
        />
      )}
      {hover === index && (
        <div className="text-lg flex space-x-5 font-bold  absolute top-5 left-3">
          <img className="w-[20px]" src={a?.user?.avatar_url} alt="" />
          {a?.username}
        </div>
      )}
    </div>
  );
};

export default Display;
