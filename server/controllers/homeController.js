const router = require('express').Router()

const categoryService = require('../services/categoriesService')

router.get('/', (req, res) => {
    categoryService.getAll()
        .then(data => res.send(JSON.stringify(data)))
        .catch(err => console.log(err))
})

module.exports = router