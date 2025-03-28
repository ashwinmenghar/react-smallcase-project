import React, { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const SubscriptionType = () => {
  const [subscriptionType, setSubscriptionType] = useState(null);

  const subscriptionOptions = [
    { label: "Show all", value: null },
    { label: "Free access", value: "public" },
    { label: "Fee based", value: "private" },
  ];

  return (
    <div>
      <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
        <p>Subscription Type</p>
        <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      <div className="join mb-8">
        {subscriptionOptions.map((option, index) => (
          <button
            key={option.value}
            className={`join-item btn bg-blue-50 w-20 py-6 hover:bg-gray-200 
        first:rounded-l-md last:rounded-r-md border border-gray-300
        ${index !== 0 ? "border-l-0" : ""} 
        ${
          subscriptionType === option.value
            ? "text-blue-500 border border-blue-500 bg-blue-50"
            : "text-gray-400 bg-white"
        }`}
            onClick={() => setSubscriptionType(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionType;
