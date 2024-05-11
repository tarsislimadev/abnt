import { Model } from './model.js'

export class StateModel extends Model {
  state = {}

  constructor(state = {}) {
    super()
    this.setAll(state)
  }

  update(key, value = null) {
    this.state[key] = value
    return this
  }

  get(key, def = null) {
    return this.state[key] || def
  }

  setAll(state = {}) {
    this.state = state
  }

  toJSON() {
    return this.state
  }
}
