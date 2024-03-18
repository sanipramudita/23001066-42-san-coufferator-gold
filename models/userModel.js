const knexfile = require('../knexfile')
const knex = require('knex')(knexfile.development)


const getUsers = () => {
    return knex('users').select('*')
}

module.exports = {getUsers}