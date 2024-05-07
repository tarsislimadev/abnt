const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const { PORT } = require('./config.js')
const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static('public'))

io.on('connection', (socket) => console.log('a user connected'))

server.listen(PORT, () => console.log(`Server listening on ${PORT}`))
