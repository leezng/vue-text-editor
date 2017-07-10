<template>
  <ul class="navbar">
    <li v-for="(item, attr) in config">
      <template v-if="!item.isLocal">
        <el-tooltip class="item" effect="dark" :content="item.text" placement="bottom">
          <el-button @click="setStyle(attr)" :icon="item.icon"></el-button>
        </el-tooltip>
      </template>

      <template v-else-if="attr === 'foreColor' || attr === 'backColor'">
        <li>
          <el-tooltip class="item" effect="dark" :content="item.text" placement="bottom">
            <el-button @click="beforeExecColor(attr)" :icon="item.icon"></el-button>
          </el-tooltip>
        </li>
        <compact-color-picker
          v-model="$data[`${attr}`]"
          :class="{ 'hidden': $data[`${attr}Hidden`], 'color-picker': true }"
        ></compact-color-picker>
      </template>

      <template v-else>
        <el-dropdown @command="setStyle(attr, $event)" @visible-change="beforeExecFontSize" trigger="click">
          <el-tooltip class="item" effect="dark" :content="item.text" placement="bottom">
            <el-button :icon="item.icon">
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
          </el-tooltip>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="option in item.options"
              :key="option"
              :command="option"
            >
              {{ option }}
            </el-dropdown-item>
          </el-dropdown-menu>

        </el-dropdown>
      </template>
    </li>
  </ul>
</template>

<script>
import config from '@/config'
import { Compact as CompactColorPicker } from 'vue-color'

export default {
  name: 'navbar',
  components: {
    CompactColorPicker
  },
  data () {
    return {
      config: config.navbar,
      foreColorHidden: true,
      foreColor: '#333',
      backColorHidden: true,
      backColor: '#eee'
    }
  },
  methods: {
    getCurrentRange () {
      var sel = getSelection()
      if (sel.getRangeAt && sel.rangeCount) {
        return sel.getRangeAt(0)
      }
    },
    saveRange (range) {
      let isRange = Object.prototype.toString.call(range) === '[object Range]'
      this.selectedRange = isRange ? range : this.getCurrentRange()
    },
    restoreRange (range) {
      var selection = getSelection()
      if (range) {
        try {
          selection.removeAllRanges()
        } catch (ex) {
          document.body.createTextRange().select()
          document.selection.empty()
        }
        selection.addRange(range)
      }
    },
    beforeExecColor (colorAttr) {
      this.saveRange(this.getCurrentRange())
      this[`${colorAttr}Hidden`] = !this[`${colorAttr}Hidden`]
    },
    beforeExecFontSize (visible) {
      this.saveRange(this.getCurrentRange())
    },
    /**
     * 设置被选中的元素样式
     * @param {String} attr 样式属性, 驼峰写法, 例如 fontSize
     * @param {String} param 可选, 样式属性值, 默认为空字符串
     */
    setStyle (attr, param = '') {
      let range = this.selectedRange
      if (!range) {
        range = this.getCurrentRange()
      }
      if (!range || !range.toString()) return
      this.restoreRange(range)
      if (document.queryCommandSupported('styleWithCss')) {
        document.execCommand('styleWithCss', false, true)
      }
      if (typeof this[`${attr}Local`] === 'function') {
        this[`${attr}Local`](range, param)
      } else {
        document.execCommand(attr, false, param)
      }
      this.selectedRange = ''
      this.$emit('change')
    },
    fontSizeLocal (range, param = '') {
      document.execCommand('fontSize', false, 2)
      let container = range.commonAncestorContainer
      container.nodeType === 3 && (container = container.parentNode)
      container.tagName === 'SPAN' && (container = container.parentNode)
      Array.from(container.getElementsByTagName('span')).forEach(span => {
        if (span.style.fontSize.trim() === 'small') {
          span.style.fontSize = param
        }
        span.normalize()
      })
    }
  },
  watch: {
    foreColor (newVal) {
      this.setStyle('foreColor', newVal.hex)
      this.foreColorHidden = true
    },
    backColor (newVal) {
      this.setStyle('backColor', newVal.hex)
      this.backColorHidden = true
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/assets/lib/iconfont/iconfont.css";

  a {
    text-decoration: none;
    color: inherit;
  }

  .hidden {
    display: none;
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  .list-inline {
    .list-unstyled;
    & > li {
      display: inline-block;
      margin-right: 10px;
    }
  }

  .navbar {
    padding: 0;
    margin-bottom: 60px;
  }

  .navbar > li {
    .list-unstyled;
    display: inline-block;
    position: relative;
  }

  .color-picker {
    position: absolute;
  }
</style>
