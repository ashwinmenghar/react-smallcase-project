import React, { useEffect, useState } from "react";
import Smallcases from "../smallcases.json";
import { RiErrorWarningFill } from "react-icons/ri";

const InvestmentStrategy = ({ investmentStrategy, setRiskLevelSelector }) => {
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    const getAllStrategies = () => {
      const strategiesMap = new Map();

      Object.values(Smallcases)[2].forEach((smallcase) => {
        smallcase.info.investmentStrategy.forEach((strategy) => {
          if (!strategiesMap.has(strategy.key)) {
            strategiesMap.set(strategy.key, strategy);
          }
        });
      });

      setStrategies(
        Array.from(strategiesMap.values()).sort((a, b) => a.key.localeCompare(b.key))
      );
    };
    getAllStrategies();
  }, []);

  const handleStrategies = (strategy) => {
    const newInvestmentStrategy = investmentStrategy.includes(strategy.key)
      ? investmentStrategy.filter((key) => key !== strategy.key)
      : [...investmentStrategy, strategy.key];

    setRiskLevelSelector(newInvestmentStrategy);
  };

  return (
    <>
      <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
        <p>Investment Strategy</p>
        <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
          <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-200">
            <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
      {strategies?.map((strategy) => (
        <div
          className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer"
          key={strategy.key}
          onChange={() => handleStrategies(strategy)}
        >
          <input
            id={strategy.key}
            type="checkbox"
            value={strategy.key}
            className="w-4 h-4 cursor-pointer"
          />
          <label
            htmlFor={strategy.key}
            className="ms-2 text-sm font-medium text-gray-600 cursor-pointer"
          >
            {strategy.displayName}
          </label>
        </div>
      ))}
    </>
  );
};

export default InvestmentStrategy;
