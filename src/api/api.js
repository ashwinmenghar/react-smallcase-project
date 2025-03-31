export const getData = async () => {
  try {
    const data = await fetch("smallcases.json");
    const smallCaseData = await data.json();
    return smallCaseData;
  } catch (error) {
    console.log(error);
  }
};
