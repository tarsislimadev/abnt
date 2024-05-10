import { HTML } from '@brtmvdl/frontend'
import { Form } from './form.js'
import { TextInputGroupComponent } from '../text.input.group.component.js'

export class AutoresForm extends Form {
  name = 'autores'

  title = 'Autores'

  children = {
    nome_autor: new TextInputGroupComponent('nome_autor', 'Nome do Autor'),
  }
}
