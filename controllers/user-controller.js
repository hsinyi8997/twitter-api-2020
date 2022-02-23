const userService = require('../services/user-services')

const userController = {
  signIn: (req, res, next) => {
    userService.signIn(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  signUp: (req, res, next) => {
    userService.signUp(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  }
}

module.exports = userController