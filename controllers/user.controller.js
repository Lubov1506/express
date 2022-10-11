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
module.exports.deleteUser = async (req, res, next) => {
    const {params: {id}} = req
    const user = await User.findOne(id)
    const verdict = await user.delete()
    res.status(200).send(verdict)
}
