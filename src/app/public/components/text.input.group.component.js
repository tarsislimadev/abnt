import { HTML, nInput } from '@brtmvdl/frontend'

export class TextInputGroupComponent extends HTML {
  children = {
    header: new HTML(),
    input: new nInput(),
    footer: new HTML(),
    error: new HTML(),
  }

  constructor(name = 'input-text') {
    super()
    this.name = name
  }

  onCreate() {
    super.onCreate()
    this.append(this.getHeader())
    this.append(this.getInput())
    this.append(this.getFooter())
    this.append(this.getError())
  }

  getHeader() {
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
