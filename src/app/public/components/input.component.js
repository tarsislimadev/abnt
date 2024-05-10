import { HTML, nInput } from '@brtmvdl/frontend'

export class InputComponent extends nInput {
  getName() {
    return 'input-component'
  }

  onCreate() {
    super.onCreate()
    this.setStyles()
  }

  setStyles() {
    this.setStyle('width', '100%')
    this.setStyle('padding', 'calc(1rem / 4)')
    this.setStyle('margin', '0rem 0rem calc(1rem / 2) 0rem')
    this.setContainerStyle('width', '100%')
  }
}
