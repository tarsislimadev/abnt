// 

class Response {
  status = 'ok'
  message = null
  data = {}

  constructor(data = {}, status = 'ok', message = null) {
    this.status = status
    this.message = message
    this.data = data
  }
}

module.exports = { Response }
