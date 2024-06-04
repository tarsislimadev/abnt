// 

class Response {
  status = 0
  message = ''
  data = {}

  responseText = null

  constructor({ responseText }) {
    this.responseText = responseText

    const response = JSON.parse(responseText)

    this.status = response['status']
    this.message = response['message']
    this.data = response['data']
  }

  getStatus() {
    return this.status
  }

  getMessage() {
    return this.message || ''
  }

  getData() {
    return this.data || {}
  }

  get(key) {
    return this.getData()[key]
  }
}

class SuccessResponse extends Response {
}

class ErrorResponse extends Response {
  type = 'network'
}

const request = (method = 'POST', url = [], data = {}) => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url.join('/'), true)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const onComplete = (xhr) => {
      xhr.status == '200'
        ? res(new SuccessResponse(xhr))
        : rej(new ErrorResponse(xhr))
    }

    xhr.onload = () => onComplete(xhr)
    xhr.onerror = () => onComplete(xhr)

    xhr.send(JSON.stringify(data))
  })
}

export const saveDocument = (paragraphs, id = null) => request('POST', ['save'], { id, data: paragraphs })

export const getDocument = (id) => request('GET', ['documents', id])
