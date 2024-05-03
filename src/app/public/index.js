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
    flex.append(this.getMenu().setContainerStyle('width', '20%'))
    flex.append(this.getForm().setContainerStyle('width', '40%'))
    flex.append(this.getPDF().setContainerStyle('width', '40%'))
    return flex
  }

  getMenu() {
    return this.children.menu
  }

  getForm() {
    return this.children.form
  }

  getPDF() {
    return this.children.pdf
  }
}
