const jwt = require('jsonwebtoken')

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next()
    }

    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        return res.status(403).json('The user is not authorized')
      }

      const secretKey = process.env.JWT_SECRET_KEY

      const {roles: userRoles} = jwt.verify(token, secretKey)

      let hasRoles = false
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRoles = true
        }
      })

      if (!hasRoles) {
        return res.status(403).json('You do not have access to this')
      }

      next()
    } catch (error) {
      console.log(error)
      return res.status(403).json({message: "The user is not authorized"})
    }
  }
}