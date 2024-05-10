const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server)

const { Response, ErrorResponse } = require('./libs/express/index.js')

const { Database } = require('@brtmvdl/database')

const db = new Database({ type: 'fs', config: '/data' })

const documents = db.in('documents')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.post('/documents/save', ({ body }, res) => {
  let id = body.id
  const data = body.data
  try {
    let document = documents.find(id)
    if (!document) document = documents.new()
    document.writeMany(data)
    res.json(new Response({ id: document.id, data }))
  } catch (e) {
    res.json(new ErrorResponse(e))
  }
})

io.on('connection', (socket) => console.log('a user connected'))

server.listen(80, () => console.log('Server listening on 80'))
