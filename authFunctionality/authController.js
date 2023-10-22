const User = require('./models/User')
const Role = require('./models/Role')

class authController {

  async registration (req, res) {
    try {

    } catch (error) {
      console.error(error)
    }
  }

  async login (req, res) {
    try {

    } catch (error) {
      console.error(error)
    }
  }

  async getUsers (req, res) {
    try {
      // temp
        const userRole = new Role()
        const adminRole = new Role({value: "ADMIN"})

        await userRole.save()
        await adminRole.save()
      //temp

      res.json('Server work')
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new authController()