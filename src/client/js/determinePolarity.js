export const determinePolarity = (data) => {
  let polarity;
  switch (data.score_tag) {
    case "P+":
      polarity = "strongly positive";
      break;
    case "P":
      polarity = "positive";
      break;
    case "NEU":
      polarity = "neutral";
      break;
    case "N":
      polarity = "negative";
      break;
    case "N+":
      polarity = "strongly negative";
      break;
    default:
      polarity = "without sentiment";
  }
  return polarity;
};
