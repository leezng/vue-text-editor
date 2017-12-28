<template>
  <div
    class="content"
    @input="handleInput"
    contenteditable>
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
    padding: 4px 8px;
    min-height: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
