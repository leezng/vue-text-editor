import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tooltip
} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MainComponent from './components/main'

const install = function (Vue) {
  Vue.use(Button)
  Vue.use(Dropdown)
  Vue.use(DropdownMenu)
  Vue.use(DropdownItem)
  Vue.use(Tooltip)
  Vue.component(MainComponent.name, MainComponent)
}

export default {
  install
}
