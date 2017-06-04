<template>
  <div id="app">
    <navbar></navbar>
    <editor></editor>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Editor from './components/editor'

export default {
  name: 'app',
  components: {
    Navbar,
    Editor
  }
}
</script>

<style>
@import "~@/assets/less/basic.less"
</style>
