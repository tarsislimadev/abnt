import { HTML } from '@brtmvdl/frontend'
import { Form } from './form.js'
import { TextInputGroupComponent } from '../text.input.group.component.js'

export class FolhaRostoForm extends Form {
  name = 'folha-de-rosto'
  title = 'Folha de rosto'

  children = {
    titulo: new TextInputGroupComponent('titulo', 'Título'),
    subtitulo: new TextInputGroupComponent('subtitulo', 'Subtítulo'),
    universidade: new TextInputGroupComponent('universidade', 'Universidade'),
    instituto: new TextInputGroupComponent('instituto', 'Instituto'),
    departamento: new TextInputGroupComponent('departamento', 'Departamento'),
    curso: new TextInputGroupComponent('curso', 'Curso'),
    local: new TextInputGroupComponent('local', 'Local'),
    data_defesa: new TextInputGroupComponent('data_defesa', 'Data de Defesa'),
    volume: new TextInputGroupComponent('volume', 'Volume'),
    orientador: new TextInputGroupComponent('orientador', 'Orientador'),
    tipo_trabalho: new TextInputGroupComponent('tipo_trabalho', 'Tipo de Trabalho'),
    pre_ambulo: new TextInputGroupComponent('pre_ambulo', 'Prêambulo'),
  }
}
