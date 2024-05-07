import { Form } from './form.js'

export class TextoPrincipalForm extends Form {
  onCreate() {
    super.onCreate()
    this.setText('texto-principal')
  }
}
