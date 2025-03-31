import {
  CheckCircleIcon,
  FireIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

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

const RiskLabel = ({ riskLabel }) => {
  if (!riskLabel) return null;
  const config = riskLabelConfig[riskLabel];
  return (
    <div className="h-fit flex border border-gray-300 py-1 px-3 gap-2 rounded justify-center items-center">
      <div className="text-sm text-gray-600 flex gap-2">
        {config.icon}
        {config.label}
      </div>
    </div>
  );
};

export default RiskLabel;
