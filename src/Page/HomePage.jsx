import React, { useEffect, useState } from "react";
import { GifState } from "../context/Context";

const HomePage = () => {
  const { gf } = GifState();
  const [arr, setArr] = useState([]);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const trending = async () => {
      try {
        const result = await gf.trending({
          limit: 20,
          rating: "g",
        });
        console.log(`trending`, result.data);
        setArr(result.data);
      } catch (error) {
        console.error(`trending`, error);
      }
    };
    trending();
  }, []);

  return (
    <div className="flex flex-wrap px-8">
      {arr.map((a, index) => (
        <div className="relative" key={a.images}>
          <img
            className="relative"
            style={{ marginRight: "10px", marginBottom: "10px" }}
            src={a.images.fixed_width.webp}
            alt=""
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          />
          {hover == index && (
            <div className="text-lg font-bold absolute top-5 left-3">
              {a.username}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
