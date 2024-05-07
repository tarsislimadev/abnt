import { HTML, nButton } from '@brtmvdl/frontend'
import { H1Component } from '../h1.component.js'

export class Form extends HTML {
  name = 'form'
  data = {}

  onCreate() {
    super.onCreate()
    this.append(this.createTitle(this.name))
    this.append(this.getButtons())
  }

  getButtons() {
    const buttons = new HTML()
    buttons.append(this.getSaveButton())
    return buttons
  }

  createButton(text, onclick = (() => { })) {
    const button = new nButton()
    button.setText(text)
    button.on('click', () => onclick())
    return button
  }

  getSaveButton() {
    return this.createButton('save', () => this.dispatchEvent('save', { [this.name]: this.data }))
  }

  createTitle(text) {
    const h1 = new H1Component()
    h1.setText(text)
    return h1
  }

}
