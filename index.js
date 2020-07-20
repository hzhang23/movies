require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/movies", (req, res) => {
  //fetchL http://www.omdbapi.com/?apikey=87fd6b8c&s=req.query.s
  const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_APIKEY}&s=${req.query.s}`;
  axios.get(url).then((returnData) => {
    console.log(returnData);
    return res.json(returnData.data);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server listening");
});
