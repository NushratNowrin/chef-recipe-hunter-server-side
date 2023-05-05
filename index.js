const express = require('express')
const cors = require('cors')
const chefs = require('./chef.json')
const app = express()
app.use(cors())
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello, Server is running')
})

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.listen(port, () => {
  console.log(`server is running ${port}`)
})