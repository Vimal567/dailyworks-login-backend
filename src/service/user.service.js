const User = require("../model/user.model");

const getAllUsers = async() => {
    return await User.find();
}

const getUser = async(email) => {
    return await User.find({email: email});
}

const register = async(payload) => {
    const newUser = new User(payload);
    const data = await newUser.save();
    return data;
}

module.exports = {
    getAllUsers,
    register,
    getUser
}