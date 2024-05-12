import { HTML } from '@brtmvdl/frontend'

class nIframe extends HTML {

  getTagName() {
    return 'iframe'
  }

  getName() {
    return 'iframe'
  }

  onCreate() {
    super.onCreate()
    this.setContainerStyle('height', '100%')
    this.setStyle('height', '100%')
    this.setStyle('width', '100%')
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
    this.setStyle('height', (window.innerHeight - 32) + 'px')
    this.setStyle('padding', 'calc(1rem / 4)')
    this.setStyle('width', '100%')
  }

  getPDF() {
    this.children.pdf.setContainerStyle('width', (4 * window.innerWidth / 10) + 'px')
    return this.children.pdf
  }
}
