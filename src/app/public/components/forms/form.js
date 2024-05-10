import { HTML, nButton } from '@brtmvdl/frontend'
import { TexTComponent } from '../text.component.js'

export class Form extends HTML {
  name = 'form'
  children = {}

  onCreate() {
    super.onCreate()
    this.append(new TexTComponent(this.name))
    this.append(this.getButtons())
    this.append(this.getBody())
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
    return this.createButton('save', () => this.dispatchEvent('save', this.getData()))
  }

  getData() {
    return Object.keys(this.children).reduce((data, key) => {
      data[key] = this.children[key].children.input.getValue()
      return data
    }, {})
  }

  getBody() {
    return new HTML()
  }

}
