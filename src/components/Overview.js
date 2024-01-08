import React from "react";
import ViewBox from "./ViewBox";
import DataView from "./DataView";

const Overview = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-[#1A181E] font-medium">Overview</h1>
        <div className="border rounded ">
          <select
            name="months"
            id=""
            className="text-[#4D4D4D] outline-none text-sm pr-2"
          >
            <option value="Last Month">Last Month</option>
          </select>
        </div>
      </div>
      <div className="mt-6 flex">
        <ViewBox title="Online orders" value="231" />
        <div className="p-5"></div>
        <ViewBox title="Amount received" value="₹23,92,312.19" />
      </div>
      <div className="mt-8 text-xl font-medium text-[#1A181E] mb-5">
        <span>Transactions | This Month</span>
      </div>
      <DataView/>
    </div>
  );
};

export default Overview;
