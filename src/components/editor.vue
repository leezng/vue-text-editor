<template>
  <div
    class="content"
    @input="handleInput"
    contenteditable
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  props: ['value'],
  name: 'editor',
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.innerHTML)
    }
  }
}
</script>

<style scoped>
  .content {
    min-height: 300px;
    width: 550px;
    border: 1px solid #ccc;
  }
</style>
