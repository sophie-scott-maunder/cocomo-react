import request from 'superagent'

export function sendOrder(order){
    console.log(order)
    return request
    .post('/sendemail')
    .send(order)
    .then(res => res)
}


