const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = express.json()
const {validate: validateBody} = require('./middlewares/validate.mw')
const UserController = require('./controllers/user.controller')

app.get('/users', UserController.getAllUsers)
app.get('/user/:id', UserController.getSingleUser)
app.post('/', bodyParser, validateBody, UserController.createUser)
app.put('/user/:id', bodyParser, validateBody, UserController.updateUser)
app.delete('/user/:id', UserController.deleteUser)

app.listen(PORT, () => {
  console.log(`server started on ${PORT} port`)
})



