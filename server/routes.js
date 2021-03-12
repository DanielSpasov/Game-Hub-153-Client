const router = require('express').Router()

const homeController = require('./controllers/homeController')


router.use('/', homeController)


router.get('*', (req, res) => {
    res.send('Error 404: Page not found')
})

module.exports = router