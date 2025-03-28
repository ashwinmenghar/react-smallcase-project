import { useState } from "react";
import {
  CheckCircleIcon,
  FireIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

const options = [
  {
    id: "low",
    label: "Low",
    icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
  },
  {
    id: "medium",
    label: "Medium",
    icon: <FireIcon className="w-5 h-5 text-yellow-500" />,
  },
  {
    id: "high",
    label: "High",
    icon: <XCircleIcon className="w-5 h-5 text-red-500" />,
  },
];

export default function RiskLevelSelector() {
  const [selected, setSelected] = useState(null);

  const toggle = (optionId) => {
    setSelected((prevOption) => (prevOption === optionId ? null : optionId));
  };

  return (
    <>
      <div className="flex gap-1">
        {options.map((option) => (
          <div
            key={option.id}
            className={`flex flex-col items-center py-2 w-17 text-sm  border border-gray-200 rounded-lg cursor-pointer transition-all ${
              selected === option.id
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300"
            }`}
            onClick={() => toggle(option.id)}
          >
            {option.icon}
            <span className=" font-medium mt-2 text-sm text-gray-500">
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
