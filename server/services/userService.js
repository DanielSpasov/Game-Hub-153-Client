const User = require('../Models/User')

function register(data) {
    const { username, password } = data

    User.create({ username, password })
        .then(createdUser => console.log(createdUser))
        .catch(err => console.log(err))
}

function login(data) {
    console.log(data)
}

module.exports = {
    register,
    login
}