import { HTML } from '@brtmvdl/frontend'

export class PageComponent extends HTML {

  state = {
    socket: this.createSocket(),
  }

  createSocket() {
    const socket = io()
    socket.on('connect', () => this.onSockeConnect())
    socket.on('disconnect', () => this.onSockeDisconnect())
    return socket
  }

  onSockeConnect() { }

  onSockeDisconnect() { }
}
