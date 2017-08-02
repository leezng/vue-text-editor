<template>
  <div class="vue-text-editor">
    <navbar
      :user-config="config"
      @change="handleChange"
    ></navbar>
    <editor
      :value="content"
      @change="handleChange"
    ></editor>
  </div>
</template>

<script>
import Navbar from './navbar'
import Editor from './editor'

export default {
  name: 'VueTextEditor',
  props: ['value', 'config'],
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
    handleChange (value) {
      if (value) {
        this.data = value
      }
      this.$emit('change', this.data)
    }
  }
}
</script>
