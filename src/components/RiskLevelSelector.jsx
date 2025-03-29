import {
  CheckCircleIcon,
  FireIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { RiErrorWarningFill } from "react-icons/ri";

const INVESTMENT_OPTIONS = [
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

const RiskLevelSelector = ({ riskLevelSelector, setRiskLevelSelector }) => {
  // Store risk levels
  const toggle = (optionId) => {
    const newRiskLevel = riskLevelSelector.includes(optionId)
      ? riskLevelSelector.filter((id) => id !== optionId)
      : [...riskLevelSelector, optionId];
    setRiskLevelSelector(newRiskLevel);
  };

  return (
    <>
      <div className="font-bold text-sm mb-4 text-gray-600 flex items-center gap-1 group">
        <p>Volatility</p>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <RiErrorWarningFill className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-1">
        {INVESTMENT_OPTIONS.map((option) => (
          <div
            key={option.id}
            className={`flex flex-col items-center py-2 w-16 text-sm rounded-lg cursor-pointer border ${
              riskLevelSelector.includes(option.id)
                ? "border-2 border-blue-500"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => toggle(option.id)}
          >
            {option.icon}
            <span className="font-medium mt-2 text-sm text-gray-500">
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default RiskLevelSelector;
