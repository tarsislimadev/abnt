import { Form } from './form.js'

export class AnexosForm extends Form {
  onCreate() {
    super.onCreate()
    this.setText('anexos')
  }
}
