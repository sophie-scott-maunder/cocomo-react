const path = require('path')
const express = require('express')

const products = require('./routes/products')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.post('/email', (request, response) => {
    console.log('Data: ', request.body)
    response.json({ message: "Message received!!!!"})
})

//Routes

server.use('/v1/products', products)


module.exports = server
