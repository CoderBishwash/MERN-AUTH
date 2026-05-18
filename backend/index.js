const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/authRouter");

// middleware to use environment variables
require("dotenv").config();

// connecting to DB
require("./models/db");

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

// middleware to take the request from the user
app.use(bodyParser.json());
// middleware to allow requests from other ports
app.use(cors());

// Routes
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
