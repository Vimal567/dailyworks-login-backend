const mongoose = require('mongoose');
const mongo_url = "mongodb://127.0.0.1:27017/test";
const PORT = 8082;
const routes = require("./routes/user.route");

mongoose.set("strictQuery", false);
const express = require('express');
const app = express();

mongoose.connect(mongo_url).then(() => {
    console.log("connected to mongodb");

    app.use(express.json());
    app.use(routes);
    
    app.listen(PORT, () => {
        console.log("connected to the port 8082");
    });
});


