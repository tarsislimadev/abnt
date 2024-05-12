const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

class DocumentResponse {
  state = {}

  constructor(state = {}) {
    this.state = state
  }

  buildPDF(filename = 'file.pdf') {
    const doc = new PDFDocument()

    doc.pipe(fs.createWriteStream(filename))

    doc
      .font('Times-Roman')
      .fontSize(12)
      .text('Some text with an embedded font!', 100, 100)

    doc
      .addPage()
      .fontSize(12)
      .text('Here is some vector graphics...', 100, 100)

    doc
      .addPage()
      .fillColor('blue')
      .text('Here is a link!', 100, 100)
      .link(100, 100, 160, 27, 'http://google.com/')

    doc.end()
  }

  getDir() {
    return path.join(process.env.DATA_PATH, this.state.id)
  }

  toString() {
    return path.join(this.getDir(), 'file.pdf')
  }
}

module.exports = { DocumentResponse }
