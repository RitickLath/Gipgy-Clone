import React, { useEffect, useState } from "react";
import { GifState } from "../context/Context";

const HomePage = () => {
  const { gf, filter, setFilter } = GifState();
  const [arr, setArr] = useState([]);
  const [selected, setSelected] = useState("GIFs");

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
    <div>
      <div className="flex md:justify-end lg:mr-4">
        <div className="w-full flex justify-around md:w-[60%] lg:w-[40%] bg-[#2E2E2E] rounded-xl">
          <button
            onClick={() => setSelected("GIFs")}
            className={`text-lg rounded-xl font-semibold flex-1 py-2 ${
              selected === "GIFs" ? "bg-gray-600" : ""
            }`}
          >
            GIFs
          </button>
          <button
            onClick={() => setSelected("Stickers")}
            className={`text-lg rounded-xl font-semibold flex-1 py-2 ${
              selected === "Stickers" ? "bg-gray-600" : ""
            }`}
          >
            Stickers
          </button>
          <button
            onClick={() => setSelected("Clips")}
            className={`text-lg rounded-xl font-semibold flex-1 py-2 ${
              selected === "Clips" ? "bg-gray-600" : ""
            }`}
          >
            Clips
          </button>
        </div>
      </div>
      <div className="flex flex-wrap px-8 mt-10">
        {arr.map((a, index) => (
          <div className="relative" key={a.id}>
            <img
              className="relative group"
              style={{ marginRight: "10px", marginBottom: "10px" }}
              src={a.images.fixed_width.webp}
              alt=""
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            />
            {hover == index && (
              <div className="text-lg flex space-x-5 font-bold  absolute top-5 left-3">
                {/* <img src={a.user.avatar_url} alt="" /> */}
                <img className="w-[20px]" src={a?.user?.avatar_url} alt="" />
                {a?.username}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
