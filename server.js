const
  express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  app = express(),
  request = require('request'),
  path = require('path'),
  port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, './client')))
app.use(logger('dev'))
app.use(bodyParser.json())



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client', 'index.html'))
})

app.listen(port, function() {
  console.log("Listening for requests on port:", port)
})
