const express = require('express')
const yup = require('yup')
const app = express()

const PORT = 3000

const bodyParser = express.json()
const users = []
app.post('/', bodyParser, async (req, res, next) => {
  const { body } = req
  const validateSchema = yup.object({
    name: yup.string().required(),
    email: yup
      .string()
      .email()
      .required(),
    password: yup.string().required(),
    gender: yup.string().required(),
    isSubscribe: yup.string()
  })
  try {
    const validatedBody = await validateSchema.validate(body)
    validatedBody.id = users.length
    validatedBody.createdAt = new Date()
    delete validatedBody.password
    users.push(validatedBody)
    res.send(users)
  } catch (error) {
    res.send(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`server started on ${PORT} port`)
})

/* const express = require('express')
const PORT = 3000
const app = express()




app.listen(PORT, () => {
  console.log(`sever started on ${PORT}`)
})
app.get('/', (req, res)=>{
res.send('hello from express')
}) */
