const Post = require("../models/Post.js");

const getPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json({
      post: post,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const createPost = async (req, res) => {
  const { user, content, image, comment, avatarUser } = req.body;
  try {
    const newPost = new Post({
      user,
      content,
      image,
      comment,
      avatar: avatarUser,
    });
    await newPost.save();
    res.status(201).json({
      success: true,
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const putPost = async (req, res) => {
  const { user, content, image, comment } = req.body;
  const idPost = { _id: req.params.id };
  try {
    const post = await Post.findByIdAndUpdate(
      idPost,
      { user, content, image, comment },
      { new: true },
    );
    await post.save();
    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post: post,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const patchComment = async (req, res) => {
  const comment = req.body;
  const idPost = { _id: req.params.id };
  try {
    const post = await Post.findById(idPost);
    post.comment.push(comment);
    await post.save();
    res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      id: post._id,
      commentUpdate: comment,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const patchLikes = async (req, res) => {
  const idPost = { _id: req.params.id };
  const { status } = req.body;
  try {
    const post = await Post.findById(idPost);
    if (status === "down") {
      if (post.likes > 0) {
        post.likes -= 1;
      }
    }
    if (status === "up") {
      post.likes += 1;
    }
    await post.save();
    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post: post,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  const idPost = { _id: req.params.id };
  try {
    const post = await Post.findByIdAndDelete(idPost);
    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllMyPost = async (req, res) => {
  const { user } = req.body;
  try {
    const post = await Post.find({ user: user });
    let arrComment = [];
    for (let i = 0; i < post.length; i++) {
      if (post[i].comment.length > 0) {
        arrComment.push(...post[i].comment);
      }
    }
    const all = arrComment.filter((el) => {
      return el.user !== user;
    });

    res.status(200).json({
      allComment: all,
      success: true,
      message: "Get all successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getPost,
  createPost,
  putPost,
  deletePost,
  patchComment,
  patchLikes,
  getAllMyPost,
};
