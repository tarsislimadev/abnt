import { HTML } from '@brtmvdl/frontend'

export class HeaderComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.append(this.createText('ABNT'))
  }

  createText(text) {
    const html = new HTML()
    html.setStyle('padding', 'calc(1rem / 4)')
    html.setText(text)
    return html
  }
}
