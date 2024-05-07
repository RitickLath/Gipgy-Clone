import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GifState } from "../context/Context";
import FilterBtn from "../Components/FilterBtn";
import Display from "../Components/Display";
import ShimmerUI from "../Components/ShimmerUI";

const CategoriesPage = () => {
  const { gf, filter } = GifState();
  const { category } = useParams();
  const [res, setRes] = useState([]);
  const [hover, sethover] = useState(null);
  const [rendered, setrendered] = useState(true);

  useEffect(() => {
    const gifByCategory = async () => {
      try {
        const result = await gf.search(category, { type: filter });
        console.log(result.data);
        setRes(result?.data);
        setrendered(false);
      } catch (error) {
        console.error(`gifByCategory`, error);
      }
    };
    gifByCategory();
  });

  return (
    <div>
      <FilterBtn setrendered={setrendered} />
      {rendered && <ShimmerUI />}
      <div className="flex flex-wrap px-8 mt-10">
        {res.length &&
          res.map((a, index) => (
            <Display
              key={a.id}
              a={a}
              setHover={sethover}
              hover={hover}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
