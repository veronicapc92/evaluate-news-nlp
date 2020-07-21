import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

const input = document.getElementById("input");
const submitButton = document.getElementById("submit-button");

const postText = async (text) => {
  const data = { text: text };
  const response = await fetch("http://localhost:8081/", {
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

const getNews = async () => {
  const response = await fetch("http://localhost:8081/");

  try {
    const data = await response.text();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const handleClick = (e) => {
  e.preventDefault();
  postText(input.value).then(getNews());
};

submitButton.addEventListener("click", (e) => handleClick(e));
