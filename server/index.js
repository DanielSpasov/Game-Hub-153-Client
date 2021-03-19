const express = require('express')

const routes = require('./routes')
const { PORT } = require('./config/index')

const app = express()


require('./config/mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use(routes)


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`))