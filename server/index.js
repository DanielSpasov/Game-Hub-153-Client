const express = require('express')

const routes = require('./routes')
const { PORT } = require('./config/index')

const app = express()


require('./config/mongoose')


app.use(routes)


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`))