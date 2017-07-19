import Vue from 'vue'
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tooltip
} from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)

Vue.config.productionTip = false

Vue.component(App.name, App)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
