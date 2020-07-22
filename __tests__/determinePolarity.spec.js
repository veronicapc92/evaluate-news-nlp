import { determinePolarity } from "../src/client/js/determinePolarity";

test("Polarity should be positive", () => {
  expect(determinePolarity({ score_tag: "P" })).toBe("positive");
});

test("Polarity should be without sentiment", () => {
  expect(determinePolarity({ score_tag: "NONE" })).toBe("without sentiment");
});
