import { HTML, nFlex } from '@brtmvdl/frontend'
import { FormComponent } from './components/form.component.js'
import { PDFComponent } from './components/pdf.component.js'
import * as API from '../utils/api.js'
import { location } from './utils/window.js'

export class Page extends HTML {
  children = {
    form: new FormComponent(),
    pdf: new PDFComponent(),
  }

  getId() {
    return location.get('id', null)
  }

  onCreate() {
    super.onCreate()
    this.append(this.getFlex())
  }

  getFlex() {
    const flex = new nFlex()
    flex.append(this.getForm())
    flex.append(this.getPDF())
    return flex
  }

  getForm() {
    this.children.form.setContainerStyle('width', '40%')
    this.children.form.on('save', () => this.saveDocument())
    return this.children.form
  }

  getPDF() {
    this.children.pdf.setContainerStyle('width', '40%')
    return this.children.pdf
  }

  saveDocument() {
    API.saveDocument(this.getParagraphsData(), this.getId())
      .then(() => this.dispatchEvent('saved'))
      .catch((err) => console.error(err))
  }

  getParagraphsData() {
    return Array.from(this.children.form.children.paragraphs)
      .map((p) => `${p.children.type.getValue()}: ${p.children.text.getValue()}`).join('\r\n')
  }

}
