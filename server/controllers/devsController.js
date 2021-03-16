const router = require('express').Router()

const devsService = require('../services/devsService')

router.get('/getAll', (req, res) => {
    devsService.getAll()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})


module.exports = router