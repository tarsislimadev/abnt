import { HTML, nButton } from '@brtmvdl/frontend'

export class Form extends HTML {
  name = 'form'

  onCreate() {
    super.onCreate()
    this.append(this.createText(this.name))
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
    return this.createButton('Save', () => { })
  }

  createText(text) {
    const html = new HTML()
    html.setText(text)
    return html
  }
}
