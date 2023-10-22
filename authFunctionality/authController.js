const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require ('bcrypt')

class authController {

  async registration (req, res) {
    try {
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