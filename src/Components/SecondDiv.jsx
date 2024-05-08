import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const SecondDiv = ({ a }) => {
  const [render, setRender] = useState(false);
  return (
    <div className="second relative">
      <div className=" flex space-x-3 mb-2">
        <div className="text-sm text-[#949090]">{a?.title}</div>
        <BsThreeDots
          onClick={() => {
            setRender(!render);
          }}
          className="mt-1"
          size={20}
        />
      </div>
      {render && (
        <div className="absolute grid grid-cols-2 gap-x-1 lg:gap-x-4 top-10 z-10 text-xs bg-black opacity-70 p-4">
          <div>Uploaded: {a?.import_datetime}</div>
          <div>Rating: {a?.rating}</div>
          <div>Source: 476x 274 px</div>
          <div>Size: 1.7MB</div>
          <div>Frames: 39</div>
        </div>
      )}

      <img
        className="relative group w-[300px] lg:w-[450px] "
        src={a?.images?.fixed_width.webp}
        alt=""
      />
    </div>
  );
};

export default SecondDiv;
