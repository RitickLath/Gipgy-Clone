// Not so modular component

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GifState } from "../context/Context";

import FirstDiv from "../Components/FirstDiv";
import SecondDiv from "../Components/SecondDiv";
import ThirdDiv from "../Components/ThirdDiv";

const SingleGIFPage = () => {
  const { SingleGIF } = useParams();
  const { gf } = GifState();
  const [a, setA] = useState([]);

  useEffect(() => {
    const gif = async () => {
      try {
        const result = await gf.gif(SingleGIF);

        setA(result?.data);
        console.log(result?.data);
      } catch (error) {
        console.error(`gif`, error);
      }
    };
    gif();
  }, []);

  return (
    <div>
      {/* First Div */}
      <div className="hidden sm:flex lg:px-4 justify-around h-screen mt-10">
        {/* First Div */}
        <FirstDiv a={a} />
        {/* Seconds Div */}
        <SecondDiv a={a} />
        {/* Third Div */}
        <ThirdDiv a={a} />
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flexflex-rows space-y-9 h-screen mt-10">
        <SecondDiv a={a} />
        <FirstDiv a={a} />
        <ThirdDiv a={a} />
      </div>
    </div>
  );
};

export default SingleGIFPage;
