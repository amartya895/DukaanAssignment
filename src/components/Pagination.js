import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-6 cursor-pointer">
      <div className=" flex p-[6px] rounded shadow-sm pr-[12px] ml-6 border  items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
            fill="#4D4D4D"
          />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
            fill="#4D4D4D"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
