import { HTML, nFlex } from '@brtmvdl/frontend'
import { MenuComponent } from './components/menu.component.js'
import { FormComponent } from './components/form.component.js'
import { PDFComponent } from './components/pdf.component.js'

export class Page extends HTML {
  children = {
    menu: new MenuComponent(),
    form: new FormComponent(),
    pdf: new PDFComponent(),
  }

  onCreate() {
    super.onCreate()
    this.append(this.getFlex())
  }

  getFlex() {
    const flex = new nFlex()
    flex.append(this.getMenu())
    flex.append(this.getForm())
    flex.append(this.getPDF())
    return flex
  }

  getMenu() {
    this.children.menu.setContainerStyle('width', '20%')
    this.children.menu.on('menu', ({ value: { id } }) => this.onMenuChange(id))
    return this.children.menu
  }

  onMenuChange(id) {
    this.children.form.dispatchEvent('menu', { id })
  }

  getForm() {
    this.children.form.setContainerStyle('width', '40%')
    this.children.form.on('save', ({ value }) => this.saveDocument(value))
    return this.children.form
  }

  saveDocument(data = {}) {
    console.log('save document', { data })
  }

  getPDF() {
    this.children.pdf.setContainerStyle('width', '40%')
    return this.children.pdf
  }

}
