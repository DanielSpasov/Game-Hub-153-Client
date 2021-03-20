const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        maxLength: 25,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    },
    upvotes: {
        type: Number,
        default: 0,
    },
})

module.exports = mongoose.model('Genre', genreSchema)