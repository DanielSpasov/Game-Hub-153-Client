const mongoose = require('mongoose')

const devSchema = new mongoose.Schema({
    orgName: {
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
    follows: {
        type: Number,
        default: 0,
    },
})

module.exports = mongoose.model('Dev', devSchema)