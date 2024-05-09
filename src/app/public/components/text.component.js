import { HTML, nButton } from '@brtmvdl/frontend'

export class TexTComponent extends HTML {
  text = ''

  constructor(text = '') {
    super()
    this.text = text
  }

  onCreate() {
    super.onCreate()
    this.setText(this.text)
  }
}
