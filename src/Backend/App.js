
const express = require('express')
const app = express()
const port = 3000
// const DB = require('./database.js')
const test = require('./test.js')

app.get('/', (req, res) => res.send('Football app!'))
// app.get('/rest/db', (req, res) => res.send(DB()))
app.get('/rest/test', (req, res) => res.send(test()))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))