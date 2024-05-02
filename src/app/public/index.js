import { PageComponent } from './components/page.component.js'
import { ContainerComponent } from './components/container.component.js'

export class Page extends PageComponent {
  getBodyComponent() {
    const html = new ContainerComponent()
    html.setText('body')
    html.setText('component')
    return html
  }
}
