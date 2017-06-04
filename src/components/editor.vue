<template>
  <div class="content" contenteditable></div>
</template>

<script>
export default {
  name: 'editor'
}
</script>

<style scoped>
  .content {
    min-height: 300px;
    width: 550px;
    border: 1px solid #ccc;
  }
</style>
