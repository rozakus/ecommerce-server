// express
const express = require('express')
const app = express()

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('assets'))

// router
const router = require('./router')
const errorHandlers = require('./middleware/errorHandlers')

app.use('/', (req, res) => { res.send('Welcome to ecommerce server by abdul rozak') })
app.use('', router)
app.use(errorHandlers)

module.exports = app