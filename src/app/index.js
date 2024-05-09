const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static('public'))

io.on('connection', (socket) => console.log('a user connected'))

server.listen(80, () => console.log('Server listening on 80'))
