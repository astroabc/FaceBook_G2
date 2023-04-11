const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    user: {
        type: String,
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    comment:[Object],
}, {
    timestamps: true
})

module.exports = mongoose.model('posts', PostSchema)