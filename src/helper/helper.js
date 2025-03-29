export const sortSmallcases = (data) => {
  return data.sort((a, b) => {
    const rankA = a?.brokerMeta?.flags?.popular?.rank ?? Infinity;
    const rankB = b?.brokerMeta?.flags?.popular?.rank ?? Infinity;

    return rankA - rankB || a.info.name.localeCompare(b.info.name);
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
