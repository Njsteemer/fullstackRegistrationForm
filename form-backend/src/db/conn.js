const mongoose = require("mongoose");
require('dotenv').config();

// const connection = mongoose.connect(`mongodb+srv://${process.env.MongoUserId}:${process.env.MongodbPassword}@cluster0.my4kv.mongodb.net/registertrationFromDB?retryWrites=true&w=majority&appName=Cluster0`, {  //remeber that this methods will return a promise in future

const connection = mongoose.connect(`mongodb+srv://${process.env.MongoUserId}:${process.env.MongodbPassword}@cluster0.1ph7ln7.mongodb.net/registrationFormDB?retryWrites=true&w=majority&appName=Cluster0`, {  //remeber that this methods will return a promise in future
    useNewUrlParser:true,
    useUnifiedTopology: true, 
    useCreateIndex: true
})
module.exports = connection;