const express = require('express')
const cors = require('cors')
const chefs = require('./chef.json')
const recipes = require('./recipe.json')
const app = express()
app.use(cors())
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello, Server is running')
})

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const chef = chefs.find(chef => chef.id === id) || {} ;
  res.send(chef)
})

app.get('/recipes', (req, res) => {
  res.send(recipes)
})

app.listen(port, () => {
  console.log(`server is running ${port}`)
})