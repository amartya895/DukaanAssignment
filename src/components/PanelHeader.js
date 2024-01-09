import React from "react";
import { panelSvg } from "../Data/panelSvg";
const PanelHeader = () => {
  return (
    <div className="flex px-8 py-3 justify-between items-center">
      <div className=" flex items-center">
        <h1 className="mr-4 text-[#1A181E]">Payments</h1>
        <div className="flex items-center">
          {panelSvg.questionMark}
          <h1 className="ml-2 text-[#4D4D4D] text-xs">How it works</h1>
        </div>
      </div>
      <div className="bg-[#F2F2F2] px-4 py-2 w-1/3 rounded-md flex items-center">
        {panelSvg.search}
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-transparent ml-1 outline-none text-sm w-full"
        />
      </div>
      <div className="flex float-right">
        <div className="bg-[#E6E6E6] w-10 h-10 rounded-full flex items-center justify-center mr-3">
          {panelSvg.messages}
        </div>
        {panelSvg.play}
      </div>
    </div>
  );
};

export default PanelHeader;
