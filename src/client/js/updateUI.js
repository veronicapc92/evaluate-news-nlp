import { determinePolarity } from "./determinePolarity";

export const updateUI = (data) => {
  const polarity = determinePolarity(data);
  const subjectivity = data.subjectivity.toLowerCase();
  const irony = data.irony === "NONIRONIC" ? "non-ironic" : "ironic";
  return `The text can be considered as ${subjectivity}, ${polarity} and ${irony}.`;
};
