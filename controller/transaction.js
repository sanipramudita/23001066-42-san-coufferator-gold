const { getAllTransaction, postTransaction, patchTransaction } = require("../models/transactionModel");



const getTransaction = async (req, res) => {
    try {
        const transaction = await getAllTransaction()
        res.render ('transaction', {transaction})
    } catch (error) {
        console.log(error);        
    }
    
}

const createTransaction = async (req, res) => {
    try {
        const { product_id, grind, quantity } = req.body
        const newTransaction = {
            product_id: Number(product_id),
            grind: grind,
            quantity: Number(quantity)
        }
        await postTransaction(newTransaction)

        res.redirect('/transaction')

    } catch (error) {
        console.log(error);
    } 

}

const updateTransaction = async (req, res) =>{
    try {
        const ID = req.params.id
        const { product_id, grind, quantity } = req.body
        const newTransaction = {
            product_id: Number(product_id),
            grind: grind,
            quantity: Number(quantity)
        }

        await patchTransaction(ID, newTransaction)
        res.redirect('/transaction')
    } catch (error) {
        console.log(error);
    }
}



module.exports = {getTransaction, createTransaction, updateTransaction}