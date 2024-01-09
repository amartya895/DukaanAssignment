import React from "react";
import logo from "../images/logo.png";
import NavOption from "./NavOption";
import { NavOptionSvg } from "../Data/navOptionSvg.js";
const Navbar = () => {
  return (
    <div className="w-[15%]   bg-[#1E2640] py-4 px-2 flex flex-col justify-between text-[#FFFFFF]">
      <div className="">
        <div className="flex text-white justify-between items-center mx-3">
          <img src={logo} alt="" className="h-10 w-10 rounded" />
          <div className="">
            <h1 className="text-sm font-medium">Nishyan</h1>
            <h1 className=" text-white/80 underline text-xs font-normal mt-1">
              Visit store
            </h1>
          </div>
          {NavOptionSvg.dropdown}
        </div>
        <div className="mt-6 text-white/80">
          <ul>
            <li className="py-2 px-4">
              <NavOption svg={NavOptionSvg.Home} title="Home" />
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.order} title="Orders" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.products} title="Products" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.delivery} title="Delivery" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.marketing} title="Marketing" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.analytics} title="Analytics" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.payments} title="Payments" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.tools} title="Tools" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.discount} title="Disounts" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.audience} title="Audience" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.appearance} title="Appearance" />
              </div>
            </li>
            <li className="py-2 px-4">
              <div className="flex justify-start items-center">
                <NavOption svg={NavOptionSvg.plugins} title="Plugins" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-3 py-2 flex justify-start items-center bg-[#353C53] mx-[2px] rounded">
        <div className="bg-black/10 p-2 inline-block rounded ">
          {NavOptionSvg.wallet}
        </div>
        <div className="ml-3">
          <h1 className="text-white/80  text-s">Available credits</h1>
          <h1 className="text-base">222.10</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
