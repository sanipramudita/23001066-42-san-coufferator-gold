const { getUsers } = require("../models/userModel")

const getAllUsers = async (req, res) =>{
    try {
        const user = await getUsers()
        res.render('user', {user})
    } catch (error) {
        console.log(error);
    }
} 

module.exports = {getAllUsers}