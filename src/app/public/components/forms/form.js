import { HTML, nButton } from '@brtmvdl/frontend'
import { TextComponent } from '../text.component.js'
import { ButtonComponent } from '../button.component.js'

export class Form extends HTML {
  name = 'form'
  title = null
  children = {}

  onCreate() {
    super.onCreate()
    this.append(new TextComponent(this.title || this.name))
    this.append(this.getButtons())
    this.append(this.getBody())
  }

  getButtons() {
    const buttons = new HTML()
    buttons.append(this.getSaveButton())
    return buttons
  }

  createButton(text, onclick = (() => { })) {
    const button = new ButtonComponent()
    button.setText(text)
    button.on('click', () => onclick())
    return button
  }

  getSaveButton() {
    return this.createButton('Save', () => this.dispatchEvent('save', this.getData()))
  }

  getData() {
    return Object.keys(this.children).reduce((data, key) => {
      data[key] = this.children[key].children.input.getValue()
      return data
    }, {})
  }

  getBody() {
    const body = new HTML()
    Object.keys(this.children).map((component) => body.append(this.children[component]))
    return body
  }

}
