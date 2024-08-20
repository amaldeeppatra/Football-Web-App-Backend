const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path");

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

mongoose.connect(process.env.mongodbURL).then((e) => console.log("Mongodb connected"))

app.use(cors({ origin: 'https://fieldfuse.vercel.app', credentials: true }));
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use("/api", require('./routes/api/index'));

app.use("/admin", require("./routes/admin"));
app.use("/data", require("./routes/data"));


app.listen(PORT, () => console.log(`Server running at ${PORT}`));