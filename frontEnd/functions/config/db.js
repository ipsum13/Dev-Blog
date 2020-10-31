require('dotenv').config();
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const db = process.env.mongoURI;

const connectDB = async () => {
    await mongoose
    .connect(db, {
      promiseLibrary: require("bluebird"), useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log("connection succesful"))
    .catch(err => console.error(err));
  }

  module.exports = connectDB;