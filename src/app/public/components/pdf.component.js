import { HTML } from '@brtmvdl/frontend'

class nIframe extends HTML {

  getTagName() {
    return 'iframe'
  }

  getName() {
    return 'iframe'
  }
}

export class PDFComponent extends HTML {
  children = {
    pdf: new nIframe(),
  }

  onCreate() {
    super.onCreate()
    this.setEvents()
    this.setStyles()
    this.append(this.getPDF())
  }

  setEvents() {
    this.on('update', (ev) => this.onUpdate(ev))
  }

  onUpdate({ value } = {}) {
    this.children.pdf.setAttr('src', `http://localhost:8080/documents/${value.id}`)
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }

  getPDF() {
    return this.children.pdf
  }
}
