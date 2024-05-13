import { HTML } from '@brtmvdl/frontend'
import { TextInputGroupComponent } from './text.input.group.component.js'
import { ButtonComponent } from './button.component.js'
import * as API from '../utils/api.js'

export class FormComponent extends HTML {
  state = {
    id: 0,
  }

  children = {
    form: new HTML(),
    save: new ButtonComponent(),
    folhas_rosto: {
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
    },
    autores: {
      nome_autor: new TextInputGroupComponent('nome_autor', 'Nome do Autor'),
      email_autor: new TextInputGroupComponent('email_autor', 'E-mail do Autor'),
    },
  }

  constructor(id) {
    super()
    this.state.id = id
  }

  onCreate() {
    super.onCreate()
    this.setEvents()
    this.setStyles()
    this.append(this.getForm())
  }

  setEvents() {
    this.on('update', (ev) => this.onUpdate(ev))
  }

  onUpdate({ value } = {}) {
    console.log('on update', { value })
  }

  setStyles() {
    this.setStyle('padding', 'calc(1rem / 4)')
  }

  getForm() {
    this.children.form.append(this.children.folhas_rosto.titulo)
    this.children.form.append(this.children.folhas_rosto.subtitulo)
    this.children.form.append(this.children.folhas_rosto.universidade)
    this.children.form.append(this.children.folhas_rosto.instituto)
    this.children.form.append(this.children.folhas_rosto.departamento)
    this.children.form.append(this.children.folhas_rosto.curso)
    this.children.form.append(this.children.folhas_rosto.local)
    this.children.form.append(this.children.folhas_rosto.data_defesa)
    this.children.form.append(this.children.folhas_rosto.volume)
    this.children.form.append(this.children.folhas_rosto.orientador)
    this.children.form.append(this.children.folhas_rosto.tipo_trabalho)
    this.children.form.append(this.children.folhas_rosto.pre_ambulo)
    this.children.form.append(this.children.autores.nome_autor)
    this.children.form.append(this.children.autores.email_autor)
    this.children.form.append(this.getSaveButton())
    return this.children.form
  }

  getSaveButton() {
    this.children.save.setText('save')
    this.children.save.on('click', () => this.onSaveButtonClick())
    return this.children.save
  }

  onSaveButtonClick() {
    API.saveDocument(this.getData(), this.state.id)
      .then(() => this.dispatchEvent('save', this.getData()))
      .catch((err) => console.error(err))
  }

  getData() {
    return {
      titulo: this.children.folhas_rosto.titulo.children.input.getValue(),
      subtitulo: this.children.folhas_rosto.subtitulo.children.input.getValue(),
      universidade: this.children.folhas_rosto.universidade.children.input.getValue(),
      instituto: this.children.folhas_rosto.instituto.children.input.getValue(),
      departamento: this.children.folhas_rosto.departamento.children.input.getValue(),
      curso: this.children.folhas_rosto.curso.children.input.getValue(),
      local: this.children.folhas_rosto.local.children.input.getValue(),
      data_defesa: this.children.folhas_rosto.data_defesa.children.input.getValue(),
      volume: this.children.folhas_rosto.volume.children.input.getValue(),
      orientador: this.children.folhas_rosto.orientador.children.input.getValue(),
      tipo_trabalho: this.children.folhas_rosto.tipo_trabalho.children.input.getValue(),
      pre_ambulo: this.children.folhas_rosto.pre_ambulo.children.input.getValue(),
      nome_autor: this.children.autores.nome_autor.children.input.getValue(),
      email_autor: this.children.autores.email_autor.children.input.getValue(),
    }
  }
}
