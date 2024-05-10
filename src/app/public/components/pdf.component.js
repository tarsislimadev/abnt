import { HTML } from '@brtmvdl/frontend'

export class PDFComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.setEvents()
    this.setStyles()
    this.setText('pdf')
  }

  setEvents() {
    this.on('update', ({ value }) => console.log('update', value))
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }

}
