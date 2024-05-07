import React from "react";

const Display = ({ a, setHover, index, hover }) => {
  return (
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
  );
};

export default Display;
