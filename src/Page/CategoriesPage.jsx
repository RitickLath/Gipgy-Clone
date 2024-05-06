import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GifState } from "../context/Context";

const CategoriesPage = () => {
  const { gf } = GifState();
  const { category } = useParams();
  const [res, setRes] = useState([]);

  useEffect(() => {
    const gifByCategory = async () => {
      try {
        const result = await gf.gifs(category, "arrested-development");
        console.log(result.data);
        setRes(result?.data);
      } catch (error) {
        console.error(`gifByCategory`, error);
      }
    };
    gifByCategory();
  });

  return <div>{category}</div>;
};

export default CategoriesPage;
