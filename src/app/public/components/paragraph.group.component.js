import { HTML, nSelect, nButton, nInput, nFlex } from '@brtmvdl/frontend'
import { getParagraphTypesList } from '../utils/lists/paragraph.type.js'

export class ParagraphGroupComponent extends HTML {
  state = {
    parent: null,
    index: 0,
  }

  children = {
    text: new nInput(),
    type: new nSelect(),
  }

  constructor(parent, index = 0, previous = null) {
    super()
    this.state.parent = parent
    this.state.index = index
    this.children.text.setValue(previous?.children.text.getValue())
    this.children.type.setValue(previous?.children.type.getValue())
  }

  onCreate() {
    super.onCreate()
    this.append(this.getFlex())
  }

  getFlex() {
    const flex = new nFlex()
    flex.append(this.getTextInput())
    flex.append(this.getTypeInput())
    flex.append(this.getButtons())
    return flex
  }

  getTextInput() {
    return this.children.text
  }

  getTypeInput() {
    Array.from(getParagraphTypesList()).map((type) => this.children.type.addOption(type, type))
    return this.children.type
  }

  createButton(text, onclick = (() => ({}))) {
    const button = new nButton()
    button.setText(text)
    button.on('click', () => onclick())
    return button
  }

  getButtons() {
    const html = new nFlex()
    html.append(this.getAddButton())
    html.append(this.getRemoveButton())
    html.append(this.getMoveUpButton())
    html.append(this.getMoveDownButton())
    return html
  }

  getAddButton() {
    return this.createButton('+', () => this.state.parent.dispatchEvent('add', this.state.index))
  }

  getRemoveButton() {
    return this.createButton('-', () => this.state.parent.dispatchEvent('remove', this.state.index))
  }

  getMoveUpButton() {
    return this.createButton('^', () => this.state.parent.dispatchEvent('moveup', this.state.index))
  }

  getMoveDownButton() {
    return this.createButton('v', () => this.state.parent.dispatchEvent('movedown', this.state.index))
  }

  setIndex(index = 0) {
    this.state.index = index
    return this
  }
}
