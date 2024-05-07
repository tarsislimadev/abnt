import { HTML } from '@brtmvdl/frontend'

export class PDFComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.setStyles()
    this.setText('pdf')
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }
}
