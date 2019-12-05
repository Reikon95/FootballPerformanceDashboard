
const express = require('express')
const app = express()
const port = 3001
// const DB = require('./database.js')
const {test, getTeam} = require('./test.js')


app.get('/', (req, res) => res.send('Football app!'))
// app.get('/rest/db', (req, res) => res.send(DB()))
app.get('/rest/test', (req, res) => res.send(test()))
app.get('/rest/test/:id', (req, res) => 
    {let team = getTeam(Math.floor(Math.random() * Math.floor(5)) + 1); res.send(team)})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

