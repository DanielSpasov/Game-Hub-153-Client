const router = require('express').Router()

const userService = require('../services/userService')


router.post('/register', (req, res) => {
    userService.register(req.body)
})

router.post('/login', (req, res) => {
    userService.login(req.body)
})


module.exports = router