const express = require('express')

const db = require('../db/db')

const router = express.Router()

// router.get('/', (request, response) => {

// })

router.get('/', (request, response) => {
    db.getData().then(products => {
    response.json(products)

    })
    // console.log(request.body)
   
})

module.exports = router