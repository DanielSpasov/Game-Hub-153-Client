const router = require('express').Router()

const gameService = require('../services/gameService')

router.get('/getAll', (req, res) => {
    gameService.getAll(req.query)
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.get('/getTopFive', (req, res) => {
    gameService.getTopFive()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.post('/addGame', (req, res) => {
    console.log('Game ' + req.body)
})


module.exports = router