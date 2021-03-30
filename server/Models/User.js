const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { SALT_ROUNDS } = require('../config/index')

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
    },
    followedGames: {
        type: Array,
        default: []
    },
    followedGenres: {
        type: Array,
        default: []
    },
    followedDevs: {
        type: Array,
        default: []
    }
})

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password)
    }
}

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash
                next()
            })
        })
        return
    }
    next()
})

module.exports = mongoose.model('User', userSchema)