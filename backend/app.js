const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
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
