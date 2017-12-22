import Vue from 'vue'
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tooltip
} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
