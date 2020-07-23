// Setting up empty JS object to store the text entered
// by the user via the input form on the client side
let projectData = {};

// Express to run server and routes
const express = require("express");

// Starting up an instance of app
const app = express();

// Using body-parser as middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin allowance
const cors = require("cors");
app.use(cors());

// Dotenv for hiding API key
const dotenv = require("dotenv");
dotenv.config();

// Axios for making HTTP requests
const axios = require("axios");
const CircularJSON = require("circular-json");

// Initializing the main project folder
app.use(express.static("dist"));

const port = 8081;
// Spinning up the server
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

// Creating a function to call the MeaningCloud API
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

// GET route
app.get("/all", function (req, res) {
  getAnalysis(projectData.text)
    .then((response) => {
      resData = CircularJSON.stringify(response);
      res.send(JSON.parse(resData));
    })
    .catch((error) => console.log("error", error));
});

// POST route
app.post("/all", function (req, res) {
  projectData.text = req.body.text;
  res.send(projectData);
});
