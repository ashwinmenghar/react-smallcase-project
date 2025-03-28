import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Tabs from "./Tabs";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdCheckCircleOutline } from "react-icons/md";
import {
  CheckCircleIcon,
  FireIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import RiskLevelSelector from "./RiskLevelSelector";

const Body = () => {
  return (
    <div className="lg:w-[1120px] mx-auto">
      <Tabs />

      <div className="flex mt-5">
        {/* Filter Section */}
        <div className="w-1/4 py-4 pr-4">
          <div className="border-b pb-3 border-gray-300 flex justify-between mb-4">
            <span className="text-sm text-gray-500">
              Filters
              <span className="bg-gray-200 text-gray-500 rounded py-1 px-2 ml-2">
                1
              </span>
            </span>
            <button className="ml-4 text-blue-500 text-xs font-semibold cursor-pointer">
              Clear All
            </button>
          </div>
          {/* Add more filter options here */}
          <div className="">
            <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
              <p>Subscription Type</p>
              <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
                <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
            </div>

            <div className="join mb-8">
              <button className="join-item btn border-r-0 bg-blue-50 text-blue-500 w-20 py-6 hover:bg-gray-200">
                Show all
              </button>
              <button className="join-item btn border-r-0 border-l-0 bg-blue-50 text-blue-500 w-20 py-6 hover:bg-gray-200">
                Free access
              </button>
              <button className="join-item btn border-l-0 bg-blue-50 text-blue-500 w-20 py-6 hover:bg-gray-200">
                Fee based
              </button>
            </div>

            {/* Investment Amount */}
            <div className="mb-3">
              <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
                <p>Investment Amount</p>
                <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
                  <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
              <div className="cursor-pointer hover:bg-gray-100 my-1 px-[4px] py-[3px] rounded">
                <input
                  type="radio"
                  className="mr-2 cursor-pointer"
                  name="investment-amount"
                  id="any"
                />
                <label
                  htmlFor="any"
                  className=" text-gray-600 text-[15px] cursor-pointer font-light"
                >
                  Any
                </label>
              </div>
              <div className="cursor-pointer hover:bg-gray-100 my-1 px-[4px] py-[3px] rounded">
                <input
                  type="radio"
                  className="mr-2 cursor-pointer"
                  name="investment-amount"
                  id="under-5000"
                />
                <label
                  htmlFor="under-5000"
                  className=" text-gray-600 text-[15px] cursor-pointer font-light"
                >
                  Under &#8377; 5,000
                </label>
              </div>
              <div className="cursor-pointer hover:bg-gray-100 my-1 px-[4px] py-[3px] rounded">
                <input
                  type="radio"
                  className="mr-2 cursor-pointer"
                  name="investment-amount"
                  id="under-25000"
                />
                <label
                  htmlFor="under-25000"
                  className=" text-gray-600 text-[15px] cursor-pointer font-light"
                >
                  Under &#8377; 25,000
                </label>
              </div>
              <div className="cursor-pointer hover:bg-gray-100 my-1 px-[4px] py-[3px] rounded">
                <input
                  type="radio"
                  className="mr-2 cursor-pointer"
                  name="investment-amount"
                  id="under-50000"
                />
                <label
                  htmlFor="under-50000"
                  className="text-gray-600 text-[15px] cursor-pointer font-light"
                >
                  Under &#8377; 50,000
                </label>
              </div>
            </div>

            {/* Volatility */}
            <div className="mb-2">
              <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
                <p>Investment Amount</p>
                <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
                  <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
              <RiskLevelSelector />
            </div>

            {/* Launch Date */}
            <div className="">
              <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
                <p>Launch Date</p>
                <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
                  <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full py-4">
          <div className="border border-gray-300 h-36 shadow rounded mb-5"></div>
          <div className="border border-gray-300 h-36 shadow rounded mb-5"></div>
          <div className="border border-gray-300 h-36 shadow rounded mb-5"></div>
          <div className="border border-gray-300 h-36 shadow rounded mb-5"></div>
          <div className="border border-gray-300 h-36 shadow rounded mb-5"></div>
          <div className="border border-gray-300 h-36 shadow rounded mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
