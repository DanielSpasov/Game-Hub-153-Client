const router = require('express').Router()

const categoryService = require('../services/categoriesService')
const gameService = require('../services/gameService')
const devService = require('../services/devService')

router.get('/categories.getAll', (req, res) => {
    categoryService.getAll()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.get('/games/getAll', (req, res) => {
    gameService.getAll()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.get('/games/getTopFive', (req, res) => {
    gameService.getTopFive()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.get('/devs/getAll', (req, res) => {
    devService.getAll()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

module.exports = router