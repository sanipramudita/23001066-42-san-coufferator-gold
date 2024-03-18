const knexfile = require('../knexfile')
const knex = require('knex')(knexfile.development)

const getAllTransaction = () => {
    return knex('transaction').select('transaction.id', 'products.name as subscription', 'transaction.quantity', 'transaction.grind', 'transaction.product_id')
    .innerJoin('products', 'transaction.product_id', '=', 'products.id' )
}

const getByIdTransaction = (id) => {
    return knex('transaction').select('transaction.id', 'products.name as subscription', 'transaction.quantity', 'transaction.grind', 'transaction.product_id')
     .innerJoin('products', 'transaction.product_id', '=', 'products.id').where('transaction.id', id).first();
 }

const postTransaction = (transaction) => {
    return knex('transaction').insert(transaction)
}

const patchTransaction = (id, transaction) => {
    return knex('transaction').where('id', id).update(transaction)

}


module.exports = {getAllTransaction, postTransaction, patchTransaction, getByIdTransaction}