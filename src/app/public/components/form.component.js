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
    this.append(this.getForm())
  }

  setEvents() {
    this.on('menu', ({ value: { id } }) => this.onMenu(id))
  }

  onMenu(id) {
    this.children.form.clear()
    const form = this.getFormById(id)
    form.on('save', ({ value }) => this.dispatch('save', value))
    this.children.form.append(form)
  }

  getFormById(id) {
    switch (id) {
      case 'agradecimentos': return new forms.AgradecimentosForm()
      case 'anexos': return new forms.AnexosForm()
      case 'apendices': return new forms.ApendicesForm()
      case 'autores': return new forms.AutoresForm()
      case 'dedicatoria': return new forms.DedicatoriaForm()
      case 'folha-rosto': return new forms.FolhaRostoForm()
      case 'glossario': return new forms.GlossarioForm()
      case 'resumo': return new forms.ResumoForm()
      case 'texto-principal': return new forms.TextoPrincipalForm()
    }

    return new HTML()
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }

  getForm() {
    return this.children.form
  }
}
