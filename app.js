const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = express.json()
const {validate: validateBody} = require('./middlewares/validate.mw')
const UserController = require('./controllers/user.controller')

app.get('/users', UserController.getAllUsers)
app.post('/', bodyParser, validateBody, UserController.createUser)

app.listen(PORT, () => {
  console.log(`server started on ${PORT} port`)
})



