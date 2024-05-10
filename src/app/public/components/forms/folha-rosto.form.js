import { HTML } from '@brtmvdl/frontend'
import { Form } from './form.js'
import { TextInputGroupComponent } from '../text.input.group.component.js'

export class FolhaRostoForm extends Form {
  name = 'folha-de-rosto'

  children = {
    titulo: new TextInputGroupComponent('titulo'),
    subtitulo: new TextInputGroupComponent('subtitulo'),
    universidade: new TextInputGroupComponent('universidade'),
    instituto: new TextInputGroupComponent('instituto'),
    departamento: new TextInputGroupComponent('departamento'),
    curso: new TextInputGroupComponent('curso'),
    local: new TextInputGroupComponent('local'),
    data_defesa: new TextInputGroupComponent('data_defesa'),
  }

}
