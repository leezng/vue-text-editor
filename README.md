# vue-text-editor

A Vue.js 2.x project for textarea.

## Links

- [Demo](https://leezng.github.io/vue-text-editor)
- [Github](https://github.com/leezng/vue-text-editor)

## Installation

```js
npm install vue-text-editor
```

## Usage in entry

```js
import vueTextEditor from 'vue-text-editor'
import 'vue-text-editor/static/css/app.css'

Vue.use(vueTextEditor)
```

## Props

| Attribute | Description | Type | Default |
|---------- |-------- |---------- | ---------- |
| value  | binding value | string | - |
| config | navbar items | array | - |

Here is the default config:

```js
allConfig = [ 'justifyLeft', 'justifyCenter', 'justifyRight', 'italic', 'bold', 'foreColor', 'backColor', 'fontName', 'fontSize', 'superscript', 'subscript', 'underline', 'strikeThrough', 'indent', 'outdent' ]
```

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
