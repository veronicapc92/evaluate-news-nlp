const express = require("express");
const axios = require("axios");

let projectData = { title: "Hey" };

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

app.use(express.static("dist"));

async function getNews() {
  return axios
    .get("https://api.aylien.com/news/stories", {
      params: {
        title: `${projectData.title}`,
      },
      headers: {
        "X-AYLIEN-NewsAPI-Application-ID": process.env.APP_ID,
        "X-AYLIEN-NewsAPI-Application-Key": process.env.API_KEY,
      },
    })
    .then((r) => {
      let dataSet = r.stories;
      return dataSet.map((data) => {
        return data.title;
      });
    });
}

app.get("/", async function (req, res) {
  getNews().then((data) => res.send(data));
});

app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/", function (req, res) {
  projectData.title = req.body;
  res.send(projectData.title);
});
