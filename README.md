# vue-text-editor

Version: dev 0.1.0

A Vue.js project for quill-editor. [leezng/vue-text-editor](https://github.com/leezng/vue-text-editor)


## Installation

```js
npm install vue-text-editor
```

## Usage in vue

```js
import VueTextEditor from 'vue-text-editor'
import "vue-text-editor/static/css/app.css"

export default {
  components: {
    VueTextEditor
  }
}
```

## Props

| Attribute | Description | Type | Default |
|---------- |-------- |---------- | ---------- |
| value  | binding value | string | - |

## Events

| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | emit when value has changed | newValue |

Then in your vue template somewhere:

```html
<template>
  <div>
    ...
    <vue-text-editor :value="'abc'" @change="handleChange"></vue-text-editor>
  </div>
</template>
```
