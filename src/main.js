import Vue from 'vue'
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
