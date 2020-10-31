require("dotenv").config();
const functions = require("firebase-functions");

const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/config");

const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(
  cors(/* {
    origin:
      process.env.NODE_ENV === "development"
        ? config.devAdminURL
        : /admin.example\.com$/,
    credentials: true,
  } */)
);
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

app.use(cookieParser());
app.use(require("./routes/admin-user/index"));

app.get("/hello", (req, res) => {
  // Return success response
  return res.status(200).json({ message: "Hello there...." });
});

exports.admin = functions.https.onRequest(app);
