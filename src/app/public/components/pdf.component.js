import { HTML } from '@brtmvdl/frontend'
import { TextComponent } from './text.component.js'

export class PDFComponent extends HTML {
  children = {
    pdf: new HTML(),
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
    this.children.pdf.clear()
    this.children.pdf.append(new TextComponent(`http://localhost:8080/documents/${value.id}`))
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }

  getPDF() {
    return this.children.pdf
  }

}
