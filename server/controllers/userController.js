const router = require('express').Router()

const { AUTH_COOKIE } = require('../config/index')
const User = require('../Models/User')
const jwt = require('../utils/jwt')


router.post('/register', (req, res, next) => {
    const { username, password } = req.body
    User.create({ username, password })
        .then((createdUser) => res.send(createdUser))
        .catch(next)

})

router.use('/login', (req, res, next) => {
    const { username, password } = req.body
    User.findOne({ username })
        .then((user) => Promise.all([user, user.matchPassword(password)]))
        .then(([user, match]) => {
            if (!match) {
                res.status(401).send('Invalid password')
                return
            }

            const token = jwt.createToken({ id: user._id })
            res.send({ token })
        })
        .catch(next)
})


module.exports = router