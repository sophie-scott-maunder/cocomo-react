const config = require('../../knexfile').development
const connection = require('knex')(config)

//Get the db information so that it can be displayed on the front end

//functions live here

function getData(db = connection) {
    return db('products').select().map(product => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            ingredients: product.ingredients,
            weight: product.weight,
            dateAvailable: product.date_available,
            inStock: product.in_stock,
        }
    })
    
}

module.exports = {
    getData
}