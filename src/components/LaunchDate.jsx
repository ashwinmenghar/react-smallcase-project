import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const LaunchDate = ({ launchDate = false, setLaunchDate }) => {
  return (
    <div>
      <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
        <p>Launch Date</p>
        <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
          <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
      <div
        className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer"
        onClick={() => setLaunchDate(!launchDate)}
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={launchDate}
          className="w-4 h-4 cursor-pointer"
          onClick={(e) => e.stopPropagation()}
          readOnly
        />
        <label
          htmlFor="link-checkbox"
          className="ms-2 text-sm font-medium text-gray-600 cursor-pointer"
        >
          Include new smallcases .
        </label>
      </div>
    </div>
  );
};

export default LaunchDate;
