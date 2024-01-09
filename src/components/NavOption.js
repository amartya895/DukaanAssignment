import React from "react";

const NavOption = ({ svg, title }) => {
  return (
    <div className="flex justify-start items-center">
      {svg}
      <h1 className="ml-3">{title}</h1>
    </div>
  );
};

export default NavOption;
