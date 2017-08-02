<template>
  <main-component :value="'text'" @change="handleChange"></main-component>
</template>

<script>
import MainComponent from './components/main'

MainComponent.install = function (Vue) {
  Vue.component(MainComponent.name, MainComponent)
}

export default {
  name: 'VueTextEditor',
  components: {
    MainComponent
  },
  methods: {
    handleChange (newVal) {
      console.log(newVal)
    }
  }
}
</script>
