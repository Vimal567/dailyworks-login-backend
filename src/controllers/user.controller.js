const userService = require("../service/user.service");

const getAllUsers = async(req, res) => {
    try{
        const data = await userService.getAllUsers();
        res.status(200).send(data);
    }catch(error){
        console.log(error);
    }
}

const register = async(req, res) => {
    try{
        const payload = req.body;
        const data = await userService.register(payload);
        res.status(201).send(data);
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    register
}