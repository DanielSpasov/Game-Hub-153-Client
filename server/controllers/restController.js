const router = require('express').Router()


const gamesController = require('./gamesController')
const genreController = require('./genreController')
const devsController = require('./devsController')



router.use('/games', gamesController)
router.use('/genre', genreController)
router.use('/devs', devsController)



module.exports = router