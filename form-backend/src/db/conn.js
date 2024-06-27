const mongoose = require("mongoose");
require('dotenv').config();

const connection = mongoose.connect(`mongodb://localhost:27017/registerDb`, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // createIndexes: true
    }).then(() => {
    console.log("Database Connected Successfully.");
    }).catch((err) => {
    console.log(err);
    });

module.exports = connection;