import React, { useState } from "react";
import { GifState } from "../context/Context";
import Display from "../Components/Display";
import FilterBtn from "../Components/FilterBtn";

const SearchPage = () => {
  const { gifs } = GifState();
  const [hover, setHover] = useState();

  return (
    <div>
      {/* {rendered && <ShimmerUI />} */}
      <div className="flex flex-wrap px-8 mt-10">
        {gifs.length &&
          gifs.map((a, index) => (
            <div className="relative" key={a.id}>
              <Display a={a} index={index} setHover={setHover} hover={hover} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
