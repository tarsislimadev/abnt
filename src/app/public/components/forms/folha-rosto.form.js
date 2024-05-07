import { Form } from './form.js'

export class FolhaRostoForm extends Form {
  onCreate() {
    super.onCreate()
    this.setText('folha de rosto')
  }
}
