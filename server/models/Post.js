const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'accounts'
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    comment:[String],
})

module.exports = mongoose.model('posts', PostSchema)