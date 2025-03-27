import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Tabs = () => {
  return (
    <main className="lg:w-[1120px] mx-auto mt-6">
      <header>
        <h1 className="text-2xl font-semibold">Discover</h1>
      </header>

      <div className="tab-container mt-5">
        <div className="border-b border-gray-300 flex justify-between">
          <div role="tablist" className="tabs">
            <a role="tab" className="tab text-[16px] font-normal">
              <p className="text-gray-500 font-normal">Collections</p>
            </a>
            <a
              role="tab"
              className="tab tab-active text-blue-500 text-[17px] font-normal hover:text-blue-500 border-b border-blue-500"
            >
              All smallcases
            </a>
            <a role="tab" className="tab text-[16px] font-normal">
              <p className="text-gray-500 font-normal">Managers</p>
            </a>
          </div>
          <div className="flex">
            <div className="dropdown dropdown-center">
              <div
                tabIndex={0}
                role="button"
                className="btn border-0 bg-white border-b border-black rounded-none text-left"
              >
                <span className="text-gray-400 font-light text-md mr-2">
                  Sort by
                </span>
                <span className="text-gray-600 font-light w-20">
                  Popularity
                </span>
                <span className="ml-16">
                  <FaChevronDown color="gray" fontSize="12px" />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md"
              >
                <li>
                  <div className="flex justify-between">
                    <label htmlFor="popularity">Popularity</label>
                    <input type="radio" name="filter" id="popularity" />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <label htmlFor="minimum-amount">Minimum Amount</label>
                    <input type="radio" name="filter" id="minimum-amount" />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <label htmlFor="recently-rebalanced">
                      Recently Rebalanced
                    </label>
                    <input
                      type="radio"
                      name="filter"
                      id="recently-rebalanced"
                    />
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-b ml-4 flex justify-start items-center">
              <IoSearch color="gray" />
              <input
                type="text"
                placeholder="smallcase, manager, or a stock..."
                className="text-black p-2 focus:outline-0 text-sm placeholder:text-gray-600 w-64"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tabs;
