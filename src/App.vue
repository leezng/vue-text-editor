<template>
  <div class="vue-text-editor">
    <navbar @change="change"></navbar>
    <editor :value="content" @change="change"></editor>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Editor from './components/editor'

export default {
  name: 'VueTextEditor',
  props: ['value']
  components: {
    Navbar,
    Editor
  },
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    change (value) {
      if (value) {
        this.data = value
      }
      this.$emit('change', this.data)
    }
  }
}
</script>
