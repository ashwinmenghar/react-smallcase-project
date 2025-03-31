import React, { useEffect, useState } from "react";
import { isLessThanOneYearOld, sortSmallcases } from "../helper/helper";
import { TIME_PERIOD_BTN } from "../constants/constant";
import InvestmentCardItem from "./InvestmentCardItem";
import * as SmallcaseAPIService from "../api/api.js";

const InvestmentCard = ({ filters, sort }) => {
  const [smallcaseData, setSmallcaseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await SmallcaseAPIService.getData();
        setSmallcaseData(data);
      } catch (error) {
        console.error("Error fetching smallcase data:", error.message);
      }
    };

    fetchData();
  }, []);

  sortSmallcases(smallcaseData, sort);

  const statsLabel = Object.values(TIME_PERIOD_BTN).find(
    (value) => value.key === sort.sortBy
  );

  const filteredSmallcases = smallcaseData.filter((data) =>
    Object.entries(filters).every(([key, value]) => {
      switch (key) {
        case "subscriptionType":
          return value === null || data.flags.private !== (value === "public");
        case "investmentAmount":
          return value === "any" || data.stats.minInvestAmount <= Number(value);
        case "riskLevelSelector":
          return (
            !value.length ||
            value.some((risk) =>
              data.stats.ratios?.riskLabel?.toLowerCase().includes(risk)
            )
          );
        case "launchDate":
          return (
            value === false ||
            (value === true &&
              isLessThanOneYearOld(data.info.nameAttributes.createdAt))
          );
        case "investmentStrategy":
          return (
            !value.length ||
            data.info.investmentStrategy?.some((strategy) =>
              value.includes(strategy.key)
            )
          );
        default:
          return true;
      }
    })
  );

  return (
    <>
      {filteredSmallcases.map((data) => (
        <InvestmentCardItem
          key={data._id}
          data={data}
          statsLabel={statsLabel}
        />
      ))}
    </>
  );
};

export default InvestmentCard;
