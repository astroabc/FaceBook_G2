const express = require('express')
const router = express.Router()
const { getPost, createPost, putPost, deletePost, patchComment } = require('../controllers/Post')
const verifyToken = require('../middlewares/VerifyToken')

router.route('/post').get(verifyToken, getPost).post(verifyToken, createPost)
router.route('/post/:id').put(verifyToken, putPost).delete(verifyToken, deletePost).patch(verifyToken, patchComment)

module.exports = router