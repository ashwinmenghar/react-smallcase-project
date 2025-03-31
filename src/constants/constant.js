export const INVESTMENTAMOUNTOPTIONS = [
  { id: "any", label: "Any", value: "any" },
  { id: "under-5000", label: "Under ₹5,000", value: "5000" },
  { id: "under-25000", label: "Under ₹25,000", value: "25000" },
  { id: "under-50000", label: "Under ₹50,000", value: "50000" },
];

export const SUBSCRIPTIONOPTIONS = [
  { label: "Show all", value: null },
  { label: "Free access", value: "public" },
  { label: "Fee based", value: "private" },
];

export const TIME_PERIOD_BTN = {
  0: { key: "monthly", value: "1M", label: "1M Returns" },
  1: { key: "halfyearly", value: "6M", label: "6M Returns" },
  2: { key: "yearly", value: "1Y", label: "1Y CAGR" },
  3: { key: "threeYear", value: "3Y", label: "3Y CAGR" },
  4: { key: "fiveYear", value: "5Y", label: "5Y CAGR" },
};

export const SORT = {
  popularity: "Popularity",
  minInvestAmount: "Minimum Amount",
  rebalanceDate: "Recently Rebalanced",
};

export const ORDERBY = {
  0: { key: "high-low", value: "High - Low", label: "H -> L" },
  1: { key: "low-high", value: "Low - High", label: "L -> H" },
};
