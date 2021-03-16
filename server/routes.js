const router = require('express').Router()

const restController = require('./controllers/restController')


router.use('/api', restController)


router.get('*', (req, res) => {
    res.send('Error 404: Page not found')
})

module.exports = router