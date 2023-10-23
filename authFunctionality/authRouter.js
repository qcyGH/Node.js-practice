const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')

router.post('/registration', [
  check('username', 'Username must be filled').notEmpty(),
  check('password', 'Password length must be between 4 and 24').isLength({min: 4, max: 24})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router