import { HTML } from '@brtmvdl/frontend'
import { InputComponent } from './input.component.js'

export class TextInputGroupComponent extends HTML {
  children = {
    header: new HTML(),
    input: new InputComponent(),
    footer: new HTML(),
    error: new HTML(),
  }

  state = {
    name: '',
    title: '',
  }

  constructor(name, title = null) {
    super()
    this.state.name = name
    this.state.title = title
  }

  onCreate() {
    super.onCreate()
    this.append(this.getHeader())
    this.append(this.getInput())
    this.append(this.getFooter())
    this.append(this.getError())
  }

  getHeader() {
    this.children.header.setText(this.state.title || this.state.name)
    return this.children.header
  }

  getInput() {
    return this.children.input
  }

  getFooter() {
    return this.children.footer
  }

  getError() {
    return this.children.error
  }
}
