import React, { useEffect, useState } from "react";
import GIPHY from "../assets/GIPHY.png";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import { GifState } from "../context/Context";

const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [categories, setCategories] = useState([]);

  const { gf, gifs, setGifs, filter, setFilter, favourite } = GifState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await gf.categories();
        //console.log(result.data);
        setCategories(result?.data);
      } catch (error) {
        console.error(`categories`, error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="mb-8">
      <div className=" flex justify-between lg:justify-around">
        <Link to="/">
          <img className="w-[150px]" src={GIPHY} alt="" />
        </Link>

        {/* Dynamic Take 4 Category */}
        <Link className="hidden lg:block mt-2">Category-1</Link>
        <Link className="hidden lg:block mt-2">Category-1</Link>
        <Link className="hidden lg:block mt-2">Category-1</Link>
        <Link className="hidden lg:block mt-2">Category-1</Link>
        <button onClick={() => setShowDiv(!showDiv)}>
          <IoMdMore size={25} className="mt-3" />
        </button>
        {/* Favourite */}
        <Link to="/favourite" className="hidden lg:block mt-2">
          Favourite
        </Link>
      </div>

      {showDiv && (
        <div className="w-full lg:w-[90%] mx-auto px-4 py-4 lg:px-12 bg-yellow-100 text-black lg:h-[200px] mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 font-bold">
          {categories.map((categories) => (
            <Link to={`/${categories.name}`} key={categories.name}>
              {categories.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
