const express = require('express')
const getHello = require('../controller/hello')
const { getAllProducts } = require('../controller/product')
const { getAllUsers } = require('../controller/user')
const { getTransaction, createTransaction, updateTransaction } = require('../controller/transaction')
const formTransaction = require('../controller/form')
const { getByIdTransaction, getAllTransaction } = require('../models/transactionModel')
const { getProducts } = require('../models/productModel')
const router = express.Router()

router.get('/', getHello)
router.get('/products', getAllProducts)

router.get('/user', getAllUsers)


router.get('/transaction', getTransaction )
router.post('/addTransaction', createTransaction)
router.post('/editTransaction/:id', updateTransaction)

router.get('/editTransaction/:id', async (req,res) =>{

    const ID = req.params.id    
    const transaction = await getByIdTransaction(ID)
    const product = await getProducts()
    const allTransaction = await getAllTransaction()
    // console.log(product);
    res.render('editTransaction', {transaction, product, allTransaction})

})

router.get('/formTransaction', formTransaction)
module.exports = router