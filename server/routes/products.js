const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (request, response) => {

})

router.get('/product', (request, response) => {
    // db.getData(request.body)
    // console.log(request.body)
    response.send("hi")
})

module.exports = router