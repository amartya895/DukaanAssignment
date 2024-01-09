import React from "react";
import { panelTable } from "../Data/panelSvg";
const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-6 cursor-pointer">
      <div className=" flex p-[6px] rounded shadow-sm pr-[12px] ml-6 border  items-center">
        {panelTable.arrowLeft}
        <h1 className="ml-3">Previous</h1>
      </div>
      <div className="">
        <ul className="flex text-[#4D4D4D]">
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            1
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            ...
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            10
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            11
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            12
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            13
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            14
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            15
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            16
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            17
          </li>
          <li className="p-1 h-7 w-7 hover:rounded flex justify-center items-center hover:bg-[#146EB4] hover:text-white">
            18
          </li>
        </ul>
      </div>
      <div className="flex  p-[6px] rounded shadow-sm pr-[12px] ml-6 border  items-center">
        <h1 className="mr-3">Next</h1>
        {panelTable.arrowRight}
      </div>
    </div>
  );
};

export default Pagination;
