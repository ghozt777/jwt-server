const express = require("express")

const router = express.Router()
const {validateUser} = require("../middleware/validateUser.middleware")

router.use(validateUser)

router.route('/')
.get((req,res) => {
    res.status(401).json({success:false,message:"get request is invalid for this route"})
})
.post((req,res) => {
    const {validatedUser} = req
    res.status(200).json({success:true,validatedUser})
})

module.exports = router