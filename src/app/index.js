const express = require('express')
const { createServer } = require('http')
const PDFDocument = require('pdfkit')
const { Database } = require('@brtmvdl/database')
const { Response, ErrorResponse, } = require('./libs/express/index.js')
const db = new Database({ type: 'fs', config: '/data' })
const documents = db.in('documents')
const app = express()
const server = createServer(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.post('/save', ({ body }, res) => {
  let { id, data } = body
  try {
    let document = documents.findById(id)
    if (!document) document = documents.new()
    id = document.id
    document.writeMany({ id, data: data.toString() })
    const resp = new Response({ id, data })
    res.json(resp)
  } catch (e) {
    res.json(new ErrorResponse(e))
  }
})

const doc = (id) => documents.findById(id)?.toJSON()

const createDocument = (params = {}) => {
  const pdf = new PDFDocument({ font: 'Times-Roman', fontSize: 12 })
  pdf.text(`Titulo: ${params.titulo}`, { align: 'center' })
  pdf.addPage()
  pdf.text(`Subtitulo: ${params.subtitulo}`, { align: 'center' })
  pdf.end()
  return pdf
}

app.get('/documents/:id', ({ params }, res) => {
  try {
    createDocument(doc(params.id)).pipe(res)
  } catch (e) {
    res.json(new ErrorResponse(e))
  }
})

app.get('/data/:id', ({ params }, res) => {
  try {
    res.json(doc(params.id))
  } catch (e) {
    res.json(new ErrorResponse(e))
  }
})

server.listen(80, () => console.log('Server listening on 80'))
