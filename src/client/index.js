import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

const input = document.getElementById("input");
const submitButton = document.getElementById("submit-button");

const postText = async (text) => {
  const data = { text: text };
  const response = await fetch("http://localhost:8081/all", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

const getAnalysis = async () => {
  const response = await fetch("http://localhost:8081/all");

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

const handleClick = (e) => {
  e.preventDefault();
  postText(input.value).then(getAnalysis().then((data) => console.log(data)));
};

submitButton.addEventListener("click", (e) => handleClick(e));
