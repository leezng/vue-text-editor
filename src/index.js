import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './components/app'

const install = function (Vue) {
  Vue.use(Button)
  Vue.use(Dropdown)
  Vue.use(DropdownMenu)
  Vue.use(DropdownItem)
  Vue.component(App.name, App)
}

export default {
  install
}
