import React from "react";
import PanelHeader from "./PanelHeader";
import Overview from "./Overview";

const Panel = () => {
  return <div className="w-[85%]  bg-[#FAFAFA]">
    <PanelHeader/>
   <div className="p-8">
    <Overview/>
   </div>
  </div>;
};

export default Panel;
