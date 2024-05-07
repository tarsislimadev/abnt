import { Form } from './form.js'

export class DedicatoriaForm extends Form {
  onCreate() {
    super.onCreate()
    this.setText('dedicatoria')
  }
}
