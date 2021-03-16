const mongoose = require('mongoose')

const devSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30,
    }
})

module.exports = mongoose.model('Dev', devSchema)