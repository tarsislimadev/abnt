import { HTML, nFlex } from '@brtmvdl/frontend'
import { FormComponent } from './components/form.component.js'
import { PDFComponent } from './components/pdf.component.js'
import { StateModel } from './models/state.model.js'

export class Page extends HTML {
  children = {
    form: new FormComponent(),
    pdf: new PDFComponent(),
  }

  state = new StateModel({
    id: this.getId(),
    data: {},
  })

  getId() {
    const search = new URLSearchParams(window.location.search)
    return search.get('id')
  }

  onCreate() {
    super.onCreate()
    this.append(this.getFlex())
    this.saveDocument()
  }

  getFlex() {
    const flex = new nFlex()
    flex.append(this.getForm())
    flex.append(this.getPDF())
    return flex
  }

  getForm() {
    this.children.form.setContainerStyle('width', '40%')
    this.children.form.on('save', ({ value }) => this.saveDocument(value))
    return this.children.form
  }

  getPDF() {
    this.children.pdf.setContainerStyle('width', '40%')
    return this.children.pdf
  }
}
