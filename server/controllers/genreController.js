const router = require('express').Router()

const genreService = require('../services/genreService')

router.get('/getAll', (req, res) => {
    genreService.getAll()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.get('/getTopFive', (req, res) => {
    genreService.getTopFive()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})


module.exports = router