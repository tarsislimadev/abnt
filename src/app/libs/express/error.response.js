
class ErrorResponse extends Error {
  error = null

  constructor(error = new Error('Undefined error')) {
    super(error.message)
    this.error = error
  }

  toJSON() {
    return { status: 'error', message: this.error?.message, data: {} }
  }
}

module.exports = { ErrorResponse }
