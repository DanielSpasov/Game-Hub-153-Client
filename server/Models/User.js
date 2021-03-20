const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        maxLength: 25,
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema)