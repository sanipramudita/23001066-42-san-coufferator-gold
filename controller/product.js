const { getProducts } = require("../models/productModel")

const getAllProducts = async (req, res) => {
    try {
        const product = await getProducts()
        res.render ('product', {product})
    } catch (error) {
        console.log(error);        
    }
    
}


module.exports = {getAllProducts}