const jwt = require("jsonwebtoken")
require('dotenv').config({path:  "../.env"})

const generateToken = (user,time="100") => {

    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: time+"min"})
    const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
    return {accessToken,refreshToken}
}

module.exports = {generateToken}