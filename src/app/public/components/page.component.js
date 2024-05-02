import { HTML } from '@brtmvdl/frontend'
import { ContainerComponent } from './container.component.js'

export class PageComponent extends HTML {
  socket = this.createSocket()

  createSocket() {
    const socket = io()
    socket.on('connect', () => this.onSocketConnect())
    socket.on('disconnect', () => this.onSocketDisconnect())
    return socket
  }

  onSocketConnect() {
    console.log('connect')
  }

  onSocketDisconnect() {
    console.log('disconnect')
  }

  onCreate() {
    super.onCreate()
    this.append(this.getHeaderComponent())
    this.append(this.getBodyComponent())
    this.append(this.getFooterComponent())
  }

  getHeaderComponent() {
    return new ContainerComponent()
  }

  getBodyComponent() {
    return new ContainerComponent()
  }

  getFooterComponent() {
    return new ContainerComponent()
  }

}
