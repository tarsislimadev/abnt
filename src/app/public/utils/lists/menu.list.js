import { MenuItemModel } from '../../models/menu.item.model.js'

export const menuList = () => Array.from([
  new MenuItemModel('folha-rosto', 'Folha de rosto'),
  new MenuItemModel('autores', 'Autores'),
  new MenuItemModel('dedicatoria', 'Dedicatória'),
  new MenuItemModel('agradecimentos', 'Agradecimentos'),
  new MenuItemModel('resumo', 'Resumo'),
  new MenuItemModel('texto-principal', 'Texto Principal'),
  new MenuItemModel('apendices', 'Apêndices'),
  new MenuItemModel('anexos', 'Anexos'),
  new MenuItemModel('glossario', 'Glossário'),
])
