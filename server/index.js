

const express = require('express')
const path = require('path')
const port = 3001;

const app = express()
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

const guests_model = require('./db/guests_model')

app.get('/', (req, res)=> {
  // console.log('req.query.name', req)
  guests_model.getGuests(req.query.name)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error=>{
    res.status(500).send(error)
  })
})

app.patch('/',  (req, res, next) => {
  // console.log('req.body', req)
     guests_model.updateGuest(req.body.id, req.body.RSVPResponse, req.body.RSVPMessage)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error=> {
      console.log('error', error)
      res.status(500).send(error)
    })
})

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api')) // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app