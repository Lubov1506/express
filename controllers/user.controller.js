const User = require('../models/User')

module.exports.createUser = async (req, res, next) => {
  const { body: validateBody } = req
  const user = await new User(validateBody)
  res.status(201).send(user)
}
module.exports.getAllUsers = async (req, res, next) => {
    const users = await User.findAll()
    res.status(200).send(users)
}
