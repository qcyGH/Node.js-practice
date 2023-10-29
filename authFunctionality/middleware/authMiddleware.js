const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(403).json('The user is not authorized')
    }

    const secretKey = process.env.JWT_SECRET_KEY

    const decodedData = jwt.verify(token, secretKey)
    req.user = decodedData
    next()
  } catch (error) {
    console.log(error)
    return res.status(403).json({message: "The user is not authorized"})
  }
}