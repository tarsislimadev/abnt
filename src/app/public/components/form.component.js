import { HTML, nButton } from '@brtmvdl/frontend'

export class FormComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.append(this.getTitle('Form'))
    this.append(this.getSaveButton())
  }

  getTitle(text = '') {
    const html = new HTML()
    html.setText(text)
    return html
  }

  getSaveButton() {
    const button = new nButton()
    button.setText('save')
    button.on('click', () => this.dispatchEvent('save'))
    return button
  }

}
