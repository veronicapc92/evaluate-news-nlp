const express = require("express");

let projectData = { text: "" };

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

app.use(express.static("dist"));

function transformText(text) {
  return text.replace(" ", "%20");
}

async function getAnalysis(text) {
  const transformedText = transformText(text);
  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&txt=${transformedText}&lang=en`
  );

  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

app.get("/", function (req, res) {
  getAnalysis(projecData.text).then((response) => res.send(response));
});

app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/", function (req, res) {
  projectData.text = req.body;
  res.send(projectData.text);
});
