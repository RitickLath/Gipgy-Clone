import React, { useEffect, useState } from "react";
import { GifState } from "../context/Context";
import FilterBtn from "../Components/FilterBtn";
import Display from "../Components/Display";
import ShimmerUI from "../Components/ShimmerUI";

const HomePage = () => {
  const { gf, filter, setFilter, gifs, setGifs } = GifState();
  const [hover, setHover] = useState(null);
  const [rendered, setrendered] = useState(true);

  const trending = async () => {
    try {
      const { data } = await gf.trending({
        limit: 20,
        type: filter,
        rating: "g",
      });
      console.log(`trending`, data);
      setGifs(data);
      setrendered(false);
    } catch (error) {
      console.error(`trending`, error);
    }
  };

  useEffect(() => {
    trending();
  }, [filter]);

  return (
    <div>
      <FilterBtn setrendered={setrendered} />
      {rendered && <ShimmerUI />}
      <div className="flex flex-wrap justify-center sm:justify-normal px-8 mt-10">
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

export default HomePage;
