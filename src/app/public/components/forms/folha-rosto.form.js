import { HTML, nButton } from '@brtmvdl/frontend'
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

  getBody() {
    const body = new HTML()
    body.append(this.getTituloInput())
    body.append(this.getSubtituloInput())
    body.append(this.getUniversidadeInput())
    body.append(this.getInstitutoInput())
    body.append(this.getDepartamentoInput())
    body.append(this.getCursoInput())
    body.append(this.getLocalInput())
    body.append(this.getDataDefesaInput())
    return body
  }

  getTituloInput() {
    this.children.titulo.children.header.setText('titulo')
    return this.children.titulo
  }

  getSubtituloInput() {
    this.children.subtitulo.children.header.setText('subtitulo')
    return this.children.subtitulo
  }

  getUniversidadeInput() {
    this.children.universidade.children.header.setText('universidade')
    return this.children.universidade
  }

  getInstitutoInput() {
    this.children.instituto.children.header.setText('instituto')
    return this.children.instituto
  }

  getDepartamentoInput() {
    this.children.departamento.children.header.setText('departamento')
    return this.children.departamento
  }

  getCursoInput() {
    this.children.curso.children.header.setText('curso')
    return this.children.curso
  }

  getLocalInput() {
    this.children.local.children.header.setText('local')
    return this.children.local
  }

  getDataDefesaInput() {
    this.children.data_defesa.children.header.setText('data defesa')
    return this.children.data_defesa
  }
}
