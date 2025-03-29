import React, { useState } from "react";
import Tabs from "./Tabs";
import { RiErrorWarningFill } from "react-icons/ri";
import RiskLevelSelector from "./RiskLevelSelector";
import InvestmentStrategy from "./InvestmentStrategy";
import InvestmentAmount from "./InvestmentAmount";
import SubscriptionType from "./SubscriptionType";
import InvestmentCard from "./InvestmentCard";
import LaunchDate from "./LaunchDate";

const Body = () => {
  const [filters, setFilters] = useState({
    subscriptionType: null,
    investmentAmount: "any",
    riskLevelSelector: [],
    investmentStrategy: [],
    launchDate: true,
  });

  // Function to update filters dynamically
  const updateFilter = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  // Function to clear all filters
  const clearFilters = () => {
    setFilters({
      subscriptionType: null,
      investmentAmount: "any",
      riskLevelSelector: [],
      investmentStrategy: [],
      launchDate: true,
    });
  };

  // **Calculate the count of applied filters**
  const appliedFiltersCount = Object.values(filters).filter(
    (value) => value !== null && value != "any"
  ).length;

  return (
    <div className="lg:w-[1120px] mx-auto">
      {/* TABS */}
      <Tabs />

      <div className="flex mt-5">
        {/* Filter Section */}
        <div className="w-1/4 py-4 pr-4">
          <div className="border-b pb-3 border-gray-300 flex justify-between mb-4">
            <span className="text-sm text-gray-500">
              Filters
              <span className="bg-gray-200 text-gray-500 rounded py-1 px-2 ml-2">
                {appliedFiltersCount}
              </span>
            </span>
            <button
              className="ml-4 text-blue-500 text-xs font-semibold cursor-pointer"
              onClick={clearFilters}
            >
              Clear All
            </button>
          </div>
          {/* Add more filter options here */}
          <div className="mb-1">
            <SubscriptionType
              subscriptionType={filters.subscriptionType}
              setSubscriptionType={(value) =>
                updateFilter("subscriptionType", value)
              }
            />
          </div>

          {/* Investment Amount */}
          <div className="mb-5">
            <InvestmentAmount
              investmentAmount={filters.investmentAmount}
              setInvestmentAmount={(value) =>
                updateFilter("investmentAmount", value)
              }
            />
          </div>

          {/* Volatility */}
          <div className="mb-5">
            <RiskLevelSelector
              riskLevelSelector={filters.riskLevelSelector}
              setRiskLevelSelector={(value) =>
                updateFilter("riskLevelSelector", value)
              }
            />
          </div>

          {/* Launch Date */}
          <div className="mb-5">
            <LaunchDate
              launchDate={filters.launchDate}
              setLaunchDate={(value) => updateFilter("launchDate", value)}
            />
          </div>

          {/* Investment Strategy */}
          <div className="mt-2">
            <InvestmentStrategy
              investmentStrategy={filters.investmentStrategy}
              setInvestmentStrategy={(value) =>
                updateFilter("investmentStrategy", value)
              }
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full py-4">
          <InvestmentCard filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default Body;
