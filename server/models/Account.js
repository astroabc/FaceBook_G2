const mongoose = require('mongoose')
require('mongoose-type-email');
const Schema = mongoose.Schema

const AccountSchema = new Schema({
    user: {
        type: String,
        unique: true,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('accounts', AccountSchema)