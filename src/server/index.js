const express = require("express");

let projectData = {};

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");
const CircularJSON = require("circular-json");

app.use(express.static("dist"));

async function getAnalysis(text) {
  const response = await axios.get(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&txt=${text}&lang=en`
  );

  try {
    return response;
  } catch (error) {
    console.log("error", error);
  }
}

app.get("/all", function (req, res) {
  getAnalysis(projectData.text)
    .then((response) => {
      resData = CircularJSON.stringify(response);
      res.send(JSON.parse(resData));
    })
    .catch((error) => console.log("error", error));
});

app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/all", function (req, res) {
  projectData.text = req.body.text;
  res.send(projectData);
});
