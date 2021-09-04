const express = require("express")
require('dotenv').config()
const app = express()

const home = require("../routes/home.route")
const generateToken = require("../routes/generateToken.route")
const validateToken = require("../routes/validateToken.route")

app.use("/",home)
app.use("/gen-token",generateToken)
app.use("/validate",validateToken)


const PORT = 5000

app.listen(PORT,_ => console.log("server started on PORT: ",PORT))
