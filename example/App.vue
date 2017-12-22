<template>
  <main-component :value="'text'" @change="handleChange"></main-component>
</template>

<script>
import MainComponent from '@/components/main'

export default {
  name: 'VueTextEditor',
  components: {
    MainComponent
  },
  methods: {
    handleChange (newVal) {
    }
  }
}
</script>
