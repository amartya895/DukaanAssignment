import React from "react";

const ViewBox = ({ title, value }) => {
  return (
    <div className="p-5 shadow-md w-1/2 rounded-lg">
      <h1 className="text-base text-[#4D4D4D] mb-4 font-normal">{title}</h1>
      <h1 className="text-4xl text-[#1A181E] font-medium">{value}</h1>
    </div>
  );
};

export default ViewBox;
