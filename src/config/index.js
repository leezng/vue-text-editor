export default {
  navbar: [
    {
      label: '左对齐',
      value: 'justifyLeft',
      icon: 'iconfont-alignleft'
    }, {
      label: '居中',
      value: 'justifyCenter',
      icon: 'iconfont-aligncenter'
    }, {
      label: '右对齐',
      value: 'justifyRight',
      icon: 'iconfont-alignright'
    }, {
      label: '斜体',
      value: 'italic',
      icon: 'iconfont-italic'
    }, {
      label: '加粗',
      value: 'bold',
      icon: 'iconfont-bold'
    }, {
      label: '字体颜色',
      value: 'foreColor',
      isLocal: true,
      icon: 'iconfont-color'
    }, {
      label: '底纹颜色',
      value: 'backColor',
      isLocal: true,
      icon: 'iconfont-bg-color'
    }, {
      label: '字体',
      value: 'fontName',
      isLocal: true,
      icon: 'iconfont-font',
      options: [ 'Microsoft Yahei', 'Helvetica', 'Arial', 'sans-serif' ]
    }, {
      label: '字体大小',
      value: 'fontSize',
      isLocal: true,
      icon: 'iconfont-font-size',
      options: [ '12px', '14px', '18px', '24px', '30px', '36px' ]
    }, {
      label: '上角标',
      value: 'superscript',
      icon: 'iconfont-sup'
    }, {
      label: '下角标',
      value: 'subscript',
      icon: 'iconfont-sub'
    }, {
      label: '下划线',
      value: 'underline',
      icon: 'iconfont-underline'
    }, {
      label: '删除线',
      value: 'strikeThrough',
      icon: 'iconfont-strike'
    }, {
      label: '增加缩进',
      value: 'indent',
      icon: 'iconfont-indent'
    }, {
      label: '减少缩进',
      value: 'outdent',
      icon: 'iconfont-outdent'
    }
  ]
}
