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
      res.json('Server work')
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new authController()