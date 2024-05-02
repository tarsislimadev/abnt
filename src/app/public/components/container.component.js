import { HTML } from '@brtmvdl/frontend'

export class ContainerComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.setStyles()
  }

  setStyles() {
    this.setContainerStyle('margin', '0 auto')
    this.setContainerStyle('width', '40rem')
  }
}
