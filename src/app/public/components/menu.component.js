import { HTML } from '@brtmvdl/frontend'
import { ButtonComponent } from './button.component.js'
import { menuList } from '../utils/lists/menu.list.js'

export class MenuComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.setStyles()
    this.append(this.createMenuList())
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }

  createMenuList() {
    const html = new HTML()
    Array.from(menuList()).map(({ key, value }) => html.append(this.createMenuItem(key, value)))
    return html
  }

  createMenuItem(id, title = 'menu') {
    const button = new ButtonComponent()
    button.setText(title)
    button.on('click', () => this.dispatchEvent('menu', { id }))
    return button
  }
}
