const User = require('./models/User')
const Role = require('./models/Role')

class authController {

  async registration (req, res) {
    try {

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