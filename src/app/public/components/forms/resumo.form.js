import { Form } from './form.js'

export class ResumoForm extends Form {
  onCreate() {
    super.onCreate()
    this.setText('resumo')
  }
}
