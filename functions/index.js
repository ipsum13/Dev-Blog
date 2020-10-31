require('dotenv').config();
const functions = require("firebase-functions");

const express = require("express");
const helmet = require("helmet");

const cors = require("cors")({ origin: true });
const connectDB = require('./config/db');
const app = express();


connectDB();

app.use(cors);
app.use(helmet());
app.use(require("./routes/index.js"))

app.get("/hello", (req, res) => {
  // Return success response
  return res.status(200).json({ message: "Hello there...." });
});

exports.api = functions.https.onRequest(app);
