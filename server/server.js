const path = require('path')
const express = require('express')
const superagent = require('superagent')


const products = require('./routes/products')

const server = express()
server.use(express.json())

server.use(express.static(path.join(__dirname, './public')))



//Routes



server.use('/v1/products', products)

server.post('/sendemail', (request, response) => {
    const order = request.body

    const subject = ``

    const message = `
        Hi there,

        Here is an order:
        ${order.name} wants ${order.quantity}!!
    `
    
    console.log(order)

    superagent.post('https://api.sendgrid.com/v3/mail/send') 
    .set("Authorization", "Bearer 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")
    .send(
        {
            "personalizations": [
              {
                "to": [
                  {
                    "email": "sophiescottmaunder@gmail.com"
                  }
                ],
                "subject": subject
              }
            ],
            "from": {
              "email": "from_address@example.com"
            },
            "content": [
              {
                "type": "text/plain",
                "value": message
              }
            ]
          }
    ).then(apiResponse => {
        console.log('message sent', message)
        response.json({})
    })
})

module.exports = server
