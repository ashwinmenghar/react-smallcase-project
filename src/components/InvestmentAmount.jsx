import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { INVESTMENTAMOUNTOPTIONS } from "../constants/constant";

const InvestmentAmount = ({ investmentAmount, setInvestmentAmount }) => {
  // Function to handle radio button selection
  const handleCheckedVolatility = (amount) => {
    if (investmentAmount == amount) {
      return;
    }
    setInvestmentAmount(amount);
  };

  return (
    <>
      <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
        <p>Investment Amount</p>
        <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
          <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
      {INVESTMENTAMOUNTOPTIONS.map((option) => (
        <div
          className="cursor-pointer hover:bg-gray-100 my-1 px-[4px] py-[3px] rounded"
          key={option.id}
          onClick={() => handleCheckedVolatility(option.value)}
        >
          <input
            type="radio"
            className="mr-2 cursor-pointer"
            name="investment-amount"
            id={option.id}
            checked={investmentAmount === option.value}
            onChange={() => handleCheckedVolatility(option.value)}
          />
          <label
            htmlFor={option.id}
            className=" text-gray-600 text-[15px] cursor-pointer font-light"
          >
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default InvestmentAmount;
