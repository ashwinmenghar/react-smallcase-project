import React, { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { investmentAmountOptions } from "../constants/constant";

const InvestmentAmount = () => {
  const [investmentAmount, setInvestmentAmount] = useState(
    investmentAmountOptions[0].value
  );

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
      {investmentAmountOptions.map((option) => (
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
      {/* <div className="cursor-pointer hover:bg-gray-100 my-1 px-[4px] py-[3px] rounded">
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
      </div> */}
    </>
  );
};

export default InvestmentAmount;
