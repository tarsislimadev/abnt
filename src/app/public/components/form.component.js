import { HTML } from '@brtmvdl/frontend'
import { ButtonComponent } from './button.component.js'
import * as forms from './forms/index.js'

export class FormComponent extends HTML {
  children = {
    form: new HTML(),
  }

  onCreate() {
    super.onCreate()
    this.setEvents()
    this.setStyles()
    this.append(this.getSaveButton())
    this.append(this.getForm())
  }

  setEvents() {
    this.on('menu', ({ value: { id } }) => this.onMenu(id))
  }

  onMenu(id) {
    this.children.form.clear()
    this.children.form.append(this.getFormById(id))
  }

  getFormById(id) {
    switch (id) {
      case 'folha-rosto': return new forms.FolhaRostoForm()
    }

    return new HTML()
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }

  getSaveButton() {
    const button = new ButtonComponent()
    button.setText('Save')
    button.on('click', () => this.dispatchEvent('save'))
    return button
  }
}
