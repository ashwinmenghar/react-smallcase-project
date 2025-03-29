import React from "react";
import Smallcases from "../smallcases.json";
import {
  CheckCircleIcon,
  FireIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

import { FaRegBookmark } from "react-icons/fa";

const riskLabelConfig = {
  "Low Volatility": {
    color: "text-green-500",
    label: "Low Volatility",
    icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
  },
  "Medium Volatility": {
    color: "text-yellow-500",
    label: "Med. Volatility",
    icon: <FireIcon className="w-5 h-5 text-yellow-500" />,
  },
  "High Volatility": {
    color: "text-red-500",
    label: "High Volatility",
    icon: <XCircleIcon className="w-5 h-5 text-red-500" />,
  },
};

const InvestmentCard = () => {
  return (
    <>
      {Smallcases.data.map((data) => {
        const {
          _id,
          scid,
          info: { name },
          flags: { private: isPrivate },
          stats: {
            minInvestAmount,
            ratios: { riskLabel },
          },
          platformData: {
            ratios: { cagrDuration },
          },
        } = data;

        return (
          <div
            className="hover:shadow-2xs border border-transparent hover:border-[#dde0e4] rounded mb-5 cursor-pointer group"
            key={_id}
          >
            <div className="flex gap-3 p-4">
              <img
                src={`https://assets.smallcase.com/images/smallcases/200/${scid}.png`}
                alt={name}
                className="rounded object-cover w-16 h-16 mt-1"
              />
              <div className="flex gap-7">
                <div className="w-90">
                  <div className="flex gap-2">
                    <h2 className="text-lg font-normal hover:text-blue-400">
                      {name}
                    </h2>
                    {!isPrivate && (
                      <span className="text-blue-500 font-bold text-[9px] bg-blue-50 p-1 rounded text-center h-fit">
                        Free Access
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 font-thin mb-3">
                    One investment for all market conditions. Works for everyone
                  </p>
                  <span className="text-[#81878c] text-[15px] font-normal">
                    by Windmill Capital
                  </span>
                </div>

                <div className="flex justify-center items-center gap-5">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Min. Amount</p>
                    <p className="text-gray-600">
                      ₹ {minInvestAmount.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">{cagrDuration}</p>
                    <p className="text-green-600 blur-xs">13.31%</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <div className="h-fit flex border border-gray-300 py-1 px-3 gap-2 rounded justify-center items-center">
                    <div className="text-sm text-gray-600 flex gap-2">
                      {riskLabel && riskLabelConfig[riskLabel].icon}
                      {riskLabel && riskLabelConfig[riskLabel].label}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <FaRegBookmark className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-gray-200 group-hover:border-transparent" />
          </div>
        );
      })}

      {/* <div className="">
        <div className="bg-gray-100 flex py-3.5 rounded-lg justify-center items-center cursor-pointer">
          <p className="text-md text-blue-500 font-medium">
            Load more smallcase
          </p>
          <MdKeyboardArrowDown className="w-6 h-6" />
        </div>
      </div> */}
    </>
  );
};

export default InvestmentCard;
