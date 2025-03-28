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
import InvestmentStrategy from "./InvestmentStrategy";
import InvestmentAmount from "./InvestmentAmount";

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
            </div>

            {/* Investment Amount */}
            <div className="mb-5">
              <InvestmentAmount />
            </div>

            {/* Volatility */}
            <div className="mb-5">
              <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
                <p>Volatility</p>
                <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
                  <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
              <RiskLevelSelector />
            </div>

            {/* Launch Date */}
            <div className="mb-5">
              <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
                <p>Launch Date</p>
                <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
                  <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
                    <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 cursor-pointer"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-sm font-medium text-gray-600 cursor-pointer"
                >
                  Include new smallcases .
                </label>
              </div>
            </div>

            {/* Investment Strategy */}
            <div className="mt-2">
              <InvestmentStrategy />
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
