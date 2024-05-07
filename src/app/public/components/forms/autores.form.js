import { Form } from './form.js'

export class AutoresForm extends Form {
  onCreate() {
    super.onCreate()
    this.setText('autores')
  }
}
