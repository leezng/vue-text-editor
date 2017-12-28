<template>
  <vue-text-editor
    class="example"
    :value="'text'"
    @change="handleChange">
  </vue-text-editor>
</template>

<script>
import VueTextEditor from '@/components/app'

export default {
  components: {
    VueTextEditor
  },
  methods: {
    handleChange (newVal) {
    }
  }
}
</script>

<style lang="less">
  body {
    margin: 0;
  }
  .example {
    width: 720px;
    margin: 15px auto;
  }
</style>
