import { Model } from './model.js'

export class MenuItemModel extends Model {
  key = null
  value = null

  constructor(key, value = '') {
    super()
    this.key = key
    this.value = value
  }

}
