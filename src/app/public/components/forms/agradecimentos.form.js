import { Form } from './form.js'

export class AgradecimentosForm extends Form {
  onCreate() {
    super.onCreate()
    this.setText('agradecimentos')
  }
}
