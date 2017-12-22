<template>
  <vue-text-editor :value="'text'" @change="handleChange"></vue-text-editor>
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
