const router = require('express').Router()

const genreService = require('../services/genreService')

router.get('/getAll', (req, res) => {
    genreService.getAll(req.query)
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.get('/getTopFive', (req, res) => {
    genreService.getTopFive()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.post('/addGenre', (req, res) => {
    console.log('Genre ' + req.body)
})


module.exports = router