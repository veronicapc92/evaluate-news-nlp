import { updateUI } from "../src/client/js/updateUI";

test("Returns the right text", () => {
  const object = {
    score_tag: "P",
    subjectivity: "SUBJECTIVE",
    irony: "NONIRONIC",
  };
  expect(
    updateUI(object).toMatch(
      "The text can be considered as subjective, positive and non-ironic."
    )
  );
});
