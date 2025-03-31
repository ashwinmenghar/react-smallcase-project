import { FaRegBookmark } from "react-icons/fa";
import { calculateCAGR, truncateText } from "../helper/helper";
import RiskLabel from "./RiskLabel";

const InvestmentCardItem = ({ data, statsLabel }) => {
  const {
    _id,
    scid,
    info: { name, shortDescription, publisherName },
    flags: { private: isPrivate },
    stats: {
      minInvestAmount,
      ratios: { riskLabel },
      calculatedCAGR: preCalculatedCAGR,
      indexValue,
      returns: { threeYear },
    },
    platformData: {
      ratios: { cagrDuration },
    },
  } = data;

  const calculatedCAGR =
    preCalculatedCAGR ?? calculateCAGR(indexValue, threeYear, 3);

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
              <h2 className="text-lg font-normal group-hover:text-blue-400">
                {truncateText(name, 30)}
              </h2>
              {!isPrivate && (
                <span className="text-blue-500 font-bold text-[9px] bg-blue-50 p-1 rounded text-center h-fit">
                  Free Access
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 font-thin mb-3">
              {truncateText(shortDescription)}
            </p>
            <span className="text-[#81878c] text-[15px] font-normal">
              by {publisherName}
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
              <p className="text-gray-400 text-sm mb-2">
                {statsLabel?.label || cagrDuration}
              </p>
              <p
                className={`${
                  calculatedCAGR >= 0 ? "text-green-600" : "text-red-600"
                }  blur-xs1`}
              >
                {calculatedCAGR}%
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <RiskLabel riskLabel={riskLabel} />
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
};

export default InvestmentCardItem;
