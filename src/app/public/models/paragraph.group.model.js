import { Model } from './model.js'
import { getParagraphTypesList } from '../utils/lists/paragraph.type.js'

export class ParagraphGroupModel extends Model {
  text = ''
  type = getParagraphTypesList()[0]

  toJSON() {
    const { text, type } = this
    return { text, type }
  }
}
