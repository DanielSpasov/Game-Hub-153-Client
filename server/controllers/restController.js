const router = require('express').Router()


const gamesController = require('./gamesController')
const genreController = require('./genreController')
const devsController = require('./devsController')
const userController = require('./userController')



router.use('/games', gamesController)
router.use('/genre', genreController)
router.use('/devs', devsController)
router.use('/user', userController)



module.exports = router