const Post =  require('../models/Post.js')

 const getPost = async(req,res)=>{
    try {
        const post = await Post.find()
        res.status(200).json({
            post: post,
            success: true
        });
    } catch (error) {
        res.status(404).json({ 
            success:false, 
            message: error.message 
        });
    }
}

 const createPost = async(req,res)=>{
    const {user, content, image, comment} = req.body
    if(!content) return {success: false, message: "Please fill content for this post"}
    try {
        const newPost = new Post({
            user, content, image, comment
        });
        await newPost.save();
        res.status(201).json({
            success: true,
            message: "Post created successfully",
            post: newPost,
        });
    } catch (error) {
        res.status(404).json({ 
            success:false, 
            message: error.message 
        });
    }
}

const putPost = async(req,res)=>{
    const {user, content, image, comment} = req.body
    const idPost = {_id: req.params.id}
    if(!content) return {success: false, message: "Please fill content for this post"}
    try {
        const post = await Post.findByIdAndUpdate(idPost, {user, content, image, comment}, {new: true})
        await post.save()
        res.status(200).json({
            success: true,
            message: "Post updated successfully",
            post: post,
        });
    } catch (error) {
        res.status(404).json({ 
            success:false, 
            message: error.message 
        });
    }
}

const patchComment = async(req,res)=>{
    const comment = req.body
    const idPost = {_id: req.params.id}
    try {
        const post = await Post.findById(idPost)
        post.comment.push(comment)
        await post.save()
        res.status(200).json({
            success: true,
            message: "Comment updated successfully",
            id: post._id,
            commentUpdate: comment
        });
    } catch (error) {
        res.status(404).json({ 
            success:false, 
            message: error.message 
        });
    }
}

const deletePost = async(req,res)=>{
    const idPost = {_id: req.params.id}
    try {
        const post = await Post.findByIdAndDelete(idPost)
        res.status(200).json({
            success: true,
            message: "Post deleted successfully",
        });
    } catch (error) {
        res.status(404).json({ 
            success:false, 
            message: error.message 
        });
    }
}

module.exports = {getPost, createPost, putPost, deletePost, patchComment}