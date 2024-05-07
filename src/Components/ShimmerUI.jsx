import React from "react";

const ShimmerUI = () => {
  const dummyDivs = Array.from({ length: 30 }, (_, index) => (
    <div
      key={index}
      className="bg-[#2E2E2E] rounded-lg w-40 h-40 mx-4 my-4 animate-pulse"
    ></div>
  ));
  return <div className="flex flex-wrap px-8 mt-10">{dummyDivs}</div>;
};

export default ShimmerUI;
