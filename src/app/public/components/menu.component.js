import { HTML } from '@brtmvdl/frontend'

export class MenuComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.append(this.createMenuList([
      ['folha-rosto', 'Folha de rosto'],
      ['autores', 'Autores'],
    ]))
  }

  createMenuList(list = []) {
    const html = new HTML()
    Array.from(list).map(([a, b]) => html.append(this.createMenuItem(a, b)))
    return html
  }

  createMenuItem(id, title = 'menu') {
    const html = new HTML()
    html.setText(title)
    html.on('click', () => this.dispatchEvent('menu', { id }))
    return html
  }

}
