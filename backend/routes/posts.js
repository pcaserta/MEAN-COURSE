const express = require("express");
const Post = require("../models/post");
const router = express.Router();

router.post("", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save().then((createdResult) => {
    res.status(201).json({
      message: "Post addded succesfully ",
      postId: createdResult._id,
    });
  });
});

router.put("/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    console.log(result);
    res.status(200).json({ message: "update successfull" });
  });
});

router.get("", (req, res, next) => {
  Post.find().then((documents) => {
    res
      .status(200)
      .json({ message: "Posts fetched succesfully", posts: documents });
  });
});

router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "succesfully deleted" });
  });
});

module.exports = router;
