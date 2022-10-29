
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/cloudnotes";

const connectToMongo = () => {
    mongoose.connect(mongoURI , () => {
        console.log("chutiye ");
    })
}

module.exports = connectToMongo ;