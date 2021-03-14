const router = require('express').Router()

const categoryService = require('../services/categoriesService')
const gameService = require('../services/gamesService')

router.get('/categories', (req, res) => {
    categoryService.getAll()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.get('/games', (req, res) => {
    gameService.getAll()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

module.exports = router