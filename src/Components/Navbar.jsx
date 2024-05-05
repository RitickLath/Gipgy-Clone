import React, { useState } from "react";
import GIPHY from "../assets/GIPHY.png";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className="mb-8  relative">
      <div className=" flex justify-around">
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
        <div className="w-full bg-yellow-100 lg:h-[200px] mt-3"></div>
      )}
    </div>
  );
};

export default Navbar;
