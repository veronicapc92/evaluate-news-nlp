export const getAnalysis = async () => {
  const response = await fetch("http://localhost:8081/all");

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
