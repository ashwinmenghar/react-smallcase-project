import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { ORDERBY, SORT, TIME_PERIOD_BTN } from "../constants/constant";

const Tabs = ({ setSort, sort }) => {
  const [showOrderBy, setShowOrderBy] = useState(false);
  const [label, setLabel] = useState({
    orderByLabel: "H -> L",
    timePeriodLabel: "",
  });

  const handleSort = (key) => {
    setSort((prev) => ({ ...prev, sortBy: key }));
    setShowOrderBy(false);
  };

  const handleTimePeriod = (label, key) => {
    setSort((prev) => ({ ...prev, sortBy: key }));
    setLabel((prev) => ({ ...prev, timePeriodLabel: label }));
    setShowOrderBy(true);
  };

  const handleOrderBy = (label, key) => {
    setSort((prev) => ({
      ...prev,
      orderby: key,
    }));
    setLabel((prev) => ({ ...prev, orderByLabel: label }));
  };

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
                <span className="text-gray-600 font-light w-36">
                  {SORT[sort.sortBy] ? (
                    <p>{SORT[sort.sortBy]}</p>
                  ) : (
                    <span className="text-sm">
                      <span>{label.timePeriodLabel} </span>

                      <span className="text-gray-400 font-medium">
                        ({label.orderByLabel})
                      </span>
                    </span>
                  )}
                </span>
                <span className="">
                  <FaChevronDown color="gray" fontSize="12px" />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md"
              >
                {Object.keys(SORT).map((key) => (
                  <li
                    className="cursor-pointer active:bg-transparent focus:bg-transparent"
                    key={key}
                  >
                    <div
                      className="flex justify-between"
                      onChange={() => handleSort(key)}
                    >
                      <label
                        htmlFor={key}
                        className="text-gray-600 cursor-pointer"
                      >
                        {SORT[key]}
                      </label>
                      <input
                        type="radio"
                        name="filter"
                        id={key}
                        checked={sort.sortBy === key}
                        readOnly
                      />
                    </div>
                  </li>
                ))}

                <div className="mt-4 ml-3 w-44">
                  <p className="mb-1 text-gray-600">Returns</p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">Time period</p>

                    <div className="border border-gray-300 rounded flex my-1">
                      {[...Object.values(TIME_PERIOD_BTN)].map((btn) => (
                        <button
                          className={`p-1 cursor-pointer text-center w-full  font-semibold text-sm ${
                            sort.sortBy == btn.key
                              ? "bg-blue-100 text-blue-500"
                              : "text-gray-400 hover:bg-gray-100"
                          }`}
                          key={btn.key}
                          onClick={() => handleTimePeriod(btn.label, btn.key)}
                        >
                          {btn.value}
                        </button>
                      ))}
                    </div>

                    {showOrderBy && (
                      <div className="my-3">
                        <p className="text-sm text-gray-500">Order by</p>
                        <div className="flex border border-gray-300 rounded mt-1">
                          {[...Object.values(ORDERBY)].map((orderby) => (
                            <button
                              className={`py-1 hover:bg-gray-100 cursor-pointer text-center w-full font-semibold text-[12px] ${
                                sort.orderby == orderby.key
                                  ? "bg-blue-100 text-blue-500"
                                  : "text-gray-400 hover:bg-gray-100"
                              }`}
                              key={orderby.key}
                              onClick={() =>
                                handleOrderBy(orderby.label, orderby.key)
                              }
                            >
                              {orderby.key}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
