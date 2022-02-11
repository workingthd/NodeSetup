const express = require('express')
var indexRouter = require('./routes/index')
require('dotenv').config()
require('./database/config')
const app = express()

app.use('/v1', indexRouter)
app.use('*', (req, res) => {
  res.send('WELCOME TO SOO ZOO WATER PARK...😍😍😍')
})

const PORT = process.env.PORT || 4111

app.listen(PORT, console.log('Server has started at port ' + PORT))
module.exports = app
