import React from "react";
import orderDetails from "../Data/orderDetails.json";
import Pagination from "./Pagination";
import {panelTable} from "../Data/panelSvg.js"
const DataView = () => {
  return (
    <div className="px-3 pb-6 pt-3 shadow-md ">
      <div className=" flex justify-between items-center mb-3">
        <div className=" px-4 py-2 w-1/3 rounded-md border flex items-center">
         {panelTable.search}
          <input
            type="text"
            placeholder="Search by order ID..."
            className="bg-transparent ml-1 outline-none text-sm w-full"
          />
        </div>
        <div className="flex">
          <div className="flex items-center px-3 py-1 border rounded mr-3">
            <h1 className="mr-1">Sort</h1>
           {panelTable.updown}
          </div>
          <div className="flex items-center px-3 py-1 border rounded">
           {panelTable.download}
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm rounded border">
          <thead className="text-xs  bg-[#F2F2F2] font-medium text-left text-[#4D4D4D]  rounded">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Order date
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Order amount
              </th>
              <th
                scope="col"
                className="px-6 py-3  flex flex-row-reverse items-center"
              >
              {panelTable.iIcon}
                <h1 className="mr-1">Transaction</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((order, index) => {
              return (
                <tr class="bg-transparent border " key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[#146EB4] font-medium text-left"
                  >
                    {order.orderId}
                  </th>
                  <td className="px-6 py-4 text-[#1A181E] ">
                    {order.orderDate}
                  </td>
                  <td className="px-6 py-4  text-[#1A181E] text-right ">
                    ₹{order.orderAmount}
                  </td>
                  <td className="px-6 py-4  text-[#1A181E] text-right">
                    ₹{order.transactionFee}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default DataView;
