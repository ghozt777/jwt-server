const express = require("express")
const bodyParser = require("body-parser")

const router = express.Router()
router.use(bodyParser.json())

const {generateToken} = require("../utility/generateToken.utility")



router.route("/")
.get((req,res) => {
    res.status(401).json({success:false,message:"get request is invalid for this route"})
})
.post((req,res) => {
    const {user} = req.body
    if(!user) return res.status(500).json({success:false,message:"no user found !"})
    const {accessToken,refreshToken} = generateToken(user)
    res.status(201).json({accessToken,refreshToken})
})

module.exports = router