const userService = require("../service/user.service");


const auth = async(req, res, next) => {
    const {email, password} = req.body;
    const data = await userService.getUser(email);
    if(data.length == 0)
        res.status(400).send("check the email");
    if(data[0].email === email && data[0].password === password)
        next();
    else
        res.status(400).send("check the password");
}

module.exports = auth;