const express = require('express')

const app = express()
const PORT = 3000
const {validate: validateBody} = require('./middlewares/validate.mw')
const {createUser} = require('./controllers/user.controller')
const bodyParser = express.json()

app.post('/', bodyParser, validateBody, createUser)

app.listen(PORT, () => {
  console.log(`server started on ${PORT} port`)
})



