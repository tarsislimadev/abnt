const express = require('express')
const { createServer } = require('http')
const PDFDocument = require('pdfkit')
const { Response, ErrorResponse, } = require('./libs/express/index.js')

const app = express()
const server = createServer(app)

const { Database } = require('@brtmvdl/database')
const db = new Database({ type: 'fs', config: '/data' })

const documents = db.in('documents')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.post('/save', ({ body }, res) => {
  let { id, data } = body
  try {
    let document = documents.findById(id)
    if (!document) document = documents.new()
    document.writeMany(data)
    res.json(new Response({ id: document.id, data }))
  } catch (e) {
    res.json(new ErrorResponse(e))
  }
})

const createDocument = (params = {}) => {
  const pdf = new PDFDocument({ font: 'Times-Roman', fontSize: 12 })
  pdf.moveDown()
  pdf.text(`Title (1): ${params.titulo}`)
  pdf.moveDown()
  pdf.text(`Title (2): ${params.titulo}`)
  pdf.moveDown()
  pdf.end()
  return pdf
}

app.get('/documents/:id', ({ params }, res) => {
  try {
    const doc = documents.findById(params.id)?.toJSON()
    createDocument(doc).pipe(res)
  } catch (e) {
    res.json(new ErrorResponse(e))
  }
})

server.listen(80, () => console.log('Server listening on 80'))
