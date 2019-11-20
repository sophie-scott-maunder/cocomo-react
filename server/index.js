const server = require('./server')

// server.post('/api/form', (request, response) => {
//   const {
//     email = '',
//     name = '',
//     quantity = '',
//     deliveryAddress = '',
//   }
// })

const port = process.env.PORT || 3000

server.listen(port, function () {

  console.log('Listening on port', port)
})

