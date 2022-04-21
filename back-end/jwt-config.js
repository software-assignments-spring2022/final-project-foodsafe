require("dotenv").config({ silent: true }) 
const passportJWT = require("passport-jwt")
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy
const _ = require("lodash") 


let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt") 
jwtOptions.secretOrKey = process.env.JWT_SECRET 

const jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  
  const users = require("./user_data.js")

 
  const user = users[_.findIndex(users, { id: jwt_payload.id })] 
  if (user) {
    
    next(null, user)
  } else {
    
    next(null, false)
  }
})

module.exports = {
  jwtOptions,
  jwtStrategy,
}