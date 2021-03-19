const router = require('express').Router()

const devsService = require('../services/devsService')

router.get('/getAll', (req, res) => {
    devsService.getAll(req.query)
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

router.get('/getTopFive', (req, res) => {
    devsService.getTopFive()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})


module.exports = router