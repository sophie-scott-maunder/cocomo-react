import request from 'superagent'

export function getProducts () {
    return request.get('/v1/products')
    .then(response => {
        const products = response.body
        return products
    })
}

