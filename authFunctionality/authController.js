const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { validationResult } = require('express-validator')

dotenv.config()

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  }

  const secretKey = process.env.JWT_SECRET_KEY

  return jwt.sign(payload, secretKey, {expiresIn: '24h'})
}
class authController {

  async registration (req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Registration error', errors})
      }

      const { username, password } = req.body

      const candidate = await User.findOne({username})
      if (candidate) {
        return res.status(400).json('This username is already taken')
      }

      const hashPassword = bcrypt.hashSync(password, 7)
      const userRole = await Role.findOne({value: "USER"})
      const user = new User({username, password: hashPassword, roles: [userRole.value]})
      await user.save()

      return res.json({message: 'User successfully registered'})

    } catch (error) {

      console.error(error)
      res.status(400).json({message: 'Registration error'})
    }
  }

  async login (req, res) {
    try {
      const { username, password } = req.body

      const user = await User.findOne({username})
      if (!user) {
        return res.status(400).json({message: `User "${username}" not found`})
      }

      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({message: `Password is incorrect`})
      }

      const token = generateAccessToken(user._id, user.roles)

      return res.json({token})

    } catch (error) {

      console.error(error)
      res.status(400).json({message: 'Login error'})
    }
  }

  async getUsers (req, res) {
    try {

      res.json('Server work')
    } catch (error) {

      console.error(error)
      res.status(400).json({message: 'Get users error'})
    }
  }
}

module.exports = new authController()