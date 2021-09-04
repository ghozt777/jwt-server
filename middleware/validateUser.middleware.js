const jwt = require("jsonwebtoken")
require('dotenv').config({path: "../.env"})

const validateUser = (req,res,next) => {
   const authHeader = req.headers['authorization'] 
   const token = authHeader && authHeader.split(' ')[1]

   if(token==null){
      return res.status(401).json({success:false,message:`you are not authorized to access `})
   }

   jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) => {
      if(err){ 
         return res.status(401).json({success:false})
      }
      req.validatedUser = user
      next()
   })
}

module.exports = {validateUser}