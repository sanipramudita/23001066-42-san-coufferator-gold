const knexfile = require('../knexfile')
const knex = require('knex')(knexfile.development)

const getProducts = () => {
    return knex('products').select('*')
}


module.exports = {getProducts}