const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 25,
    }
})

module.exports = mongoose.model('Game', gameSchema)