require('dotenv').config()
const express = require("express")


const app = express()
const PORT = process.env.PORT

const router = express.Router()

app.use(express.json())
app.use(express.static(__dirname + '/client/build'))


router.get('/', async (req, res) => {
  res.status(200)
})

app.listen(PORT, () => {
  console.log(`Portfolio on: ${PORT}`)
})
