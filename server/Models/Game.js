const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    title: {
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

module.exports = mongoose.model('Game', gameSchema)