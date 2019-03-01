const express = require('express')

const HubsRouter = require('./hubs/hubs-router.js')

const server = express()

server.use(express.json())
server.use('/api/hubs', HubsRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `)
})

server.get('*', (req, res) => {
  res.status(404).send(`
        <h2>Page not found</h>
        <p>Maybe your url is wrong?</p>
    `)
})

module.exports = server
