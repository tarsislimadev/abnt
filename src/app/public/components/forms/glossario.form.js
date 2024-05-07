import { Form } from './form.js'

export class GlossarioForm extends Form {
  onCreate() {
    super.onCreate()
    this.setText('glossario')
  }
}
