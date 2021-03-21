const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const routes = require('./routes')
const { PORT, SECRET } = require('./config/index')

const app = express()


require('./config/mongoose')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(SECRET))


app.use(routes)


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`))