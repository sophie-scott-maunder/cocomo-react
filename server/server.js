const path = require('path')
const express = require('express')

const products = require('./routes/products')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

//Routes

server.use('/products', products)


module.exports = server
