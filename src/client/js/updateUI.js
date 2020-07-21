import { determinePolarity } from "./determinePolarity";

export const updateUI = (data, paragraph) => {
  const polarity = determinePolarity(data);
  const subjectivity = data.subjectivity.toLowerCase();
  const irony = data.irony === "NONIRONIC" ? "non-ironic" : "ironic";

  paragraph.textContent = `The text can be considered as ${subjectivity}, ${polarity} and ${irony}.`;
};
