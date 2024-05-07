import { HTML } from '@brtmvdl/frontend'
import { ButtonComponent } from './button.component.js'

export class MenuComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.setStyles()
    this.append(this.createMenuList([
      ['folha-rosto', 'Folha de rosto'],
      ['autores', 'Autores'],
      ['dedicatoria', 'Dedicatória'],
      ['agradecimentos', 'Agradecimentos'],
      ['resumo', 'Resumo'],
      ['texto-principal', 'Texto Principal'],
      ['apendices', 'Apêndices'],
      ['anexos', 'Anexos'],
      ['glossario', 'Glossário'],
    ]))
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }

  createMenuList(list = []) {
    const html = new HTML()
    Array.from(list).map(([a, b]) => html.append(this.createMenuItem(a, b)))
    return html
  }

  createMenuItem(id, title = 'menu') {
    const button = new ButtonComponent()
    button.setText(title)
    button.on('click', () => this.dispatchEvent('menu', { id }))
    return button
  }
}
