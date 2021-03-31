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
    gameService.create(req.body)
        .catch(err => console.log(err))
})

router.get('/getOne/:id', (req, res) => {
    gameService.getOne(req.params.id)
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})


module.exports = router