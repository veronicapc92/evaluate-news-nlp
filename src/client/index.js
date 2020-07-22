import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import { updateUI } from "./js/updateUI";

const input = document.getElementById("input");
const submitButton = document.getElementById("submit-button");
const resultsContainer = document.getElementById("results");

// Creating the results paragraph and appending it to the results container
const paragraph = document.createElement("P");
resultsContainer.appendChild(paragraph);

// Posts to the server the text entered by the user in the form
export const postText = async (text) => {
  const data = { text: text };
  const response = await fetch("http://localhost:8081/all", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// Calls the server which then calls the API
export const getAnalysis = async () => {
  const response = await fetch("http://localhost:8081/all");

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// Callback function
const handleClick = async (e) => {
  e.preventDefault();
  if (input.value.length <= 5) {
    paragraph.textContent = "Please enter a longer text";
    return;
  }
  await postText(input.value);
  const response = await getAnalysis();
  const results = updateUI(response.data);
  paragraph.textContent = results;
};

submitButton.addEventListener("click", (e) => handleClick(e));
