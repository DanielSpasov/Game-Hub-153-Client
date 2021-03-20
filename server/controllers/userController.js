const router = require('express').Router()

const userService = require('../services/userService')


router.post('/register', (req, res) => {
    console.log(req.body)
})

router.post('/login', (req, res) => {
    console.log(req.body)
})


module.exports = router