const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const posts = req.body;
  console.log(posts);
  res.status(201).json({
    message: "Post addded succesfully ",
    posts: posts,
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fad124122",
      title: "First server-side post",
      content: "This is coming from server",
    },
    {
      id: "fawerwef",
      title: "second server-side post",
      content: "This is coming from server!!",
    },
  ];
  res.status(200).json({ message: "Posts fetched succesfully", posts: posts });
});

module.exports = app;
