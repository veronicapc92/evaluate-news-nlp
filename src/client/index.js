import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import { postText } from "./js/postText";
import { getAnalysis } from "./js/getAnalysis";
import { updateUI } from "./js/updateUI";

const input = document.getElementById("input");
const submitButton = document.getElementById("submit-button");
const resultsContainer = document.getElementById("results");

// Creating the results paragraph and appending it to the results container
const paragraph = document.createElement("P");
resultsContainer.appendChild(paragraph);

// Callback function
const handleClick = (e) => {
  e.preventDefault();
  postText(input.value).then(
    getAnalysis().then((res) => updateUI(res.data, paragraph))
  );
};

submitButton.addEventListener("click", (e) => handleClick(e));
