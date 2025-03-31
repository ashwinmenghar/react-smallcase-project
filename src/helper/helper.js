export const sortSmallcases = (data, sort) => {
  Object.entries(sort).every(([, value]) => {
    return data.sort((a, b) => {
      switch (value) {
        case "popularity": {
          const rankA = a?.brokerMeta?.flags?.popular?.rank ?? 0;
          const rankB = b?.brokerMeta?.flags?.popular?.rank ?? 0;

          return rankA - rankB || a.info.name.localeCompare(b.info.name);
        }

        case "minInvestAmount": {
          const minInvestAmountOfA = a?.stats?.minInvestAmount ?? 0;
          const minInvestAmountOfB = b?.stats?.minInvestAmount ?? 0;

          return minInvestAmountOfA - minInvestAmountOfB;
        }

        case "rebalanceDate": {
          const dateA = new Date(a?.info?.lastRebalanced ?? 0);
          const dateB = new Date(b?.info?.lastRebalanced ?? 0);
          return dateB - dateA;
        }
        case "monthly":
        case "halfyearly":
        case "yearly":
        case "threeYear":
        case "fiveYear": {
          const periods = {
            monthly: 1,
            halfyearly: 1,
            yearly: 1,
            threeYear: 3,
            fiveYear: 5,
          };

          const period = periods[value];
          const calculateCAGROfA = calculateCAGR(
            a?.stats?.indexValue ?? 0,
            a?.stats?.returns?.[value] ?? 0,
            period
          );
          const calculateCAGROfB = calculateCAGR(
            b?.stats?.indexValue ?? 0,
            b?.stats?.returns?.[value] ?? 0,
            period
          );

          a.stats["calculatedCAGR"] = parseFloat(calculateCAGROfA);
          b.stats["calculatedCAGR"] = parseFloat(calculateCAGROfB);

          return sort.orderby === "low-high"
            ? parseFloat(calculateCAGROfA) - parseFloat(calculateCAGROfB)
            : parseFloat(calculateCAGROfB) - parseFloat(calculateCAGROfA);
        }
        default:
          break;
      }
    });
  });
};

export const truncateText = (text, maxLength = 100) => {
  return text.length > maxLength
    ? text.slice(0, maxLength).trimEnd() + "..."
    : text;
};

export const isLessThanOneYearOld = (dateString) => {
  const givenDate = new Date(dateString);
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return givenDate > oneYearAgo;
};

export const calculateCAGR = (finalValue, returnRate, years) => {
  if (years <= 0) return 0;
  const initialValue = finalValue / (1 + returnRate); // Reverse calculate initial value
  return (((finalValue / initialValue) ** (1 / years) - 1) * 100).toFixed(2);
};
