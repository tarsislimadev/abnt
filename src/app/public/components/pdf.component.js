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
    this.children.pdf.append(new TextComponent(JSON.stringify(value, null, 4)))
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }

  getPDF() {
    return this.children.pdf
  }

}
