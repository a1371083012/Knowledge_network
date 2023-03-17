<template>
  <editor v-model="myValue" :init="init"></editor>
</template>

<script lang="ts" setup>
  import { ref, reactive, onMounted, watch } from 'vue'
  // 文档 http://tinymce.ax-z.cn/
  // 官方文档 https://www.tiny.cloud/docs/tinymce/6/
  // 引入组件
  import tinymce from 'tinymce/tinymce' // tinymce默认hidden，不引入不显示
  import Editor from '@tinymce/tinymce-vue'

  // 引入富文本编辑器主题的js和css
  import 'tinymce/skins/content/default/content.css'
  import 'tinymce/themes/silver/theme.min.js'
  import 'tinymce/icons/default/icons' // 解决了icons.js 报错Unexpected token '<'
  import 'tinymce/models/dom' // 这里是个坑：tinymce需要依赖的库

  // 编辑器插件plugins
  // 更多插件参考：https://www.tiny.cloud/docs/plugins/
  import 'tinymce/plugins/image'// 插入上传图片插件
  import 'tinymce/plugins/media'// 插入视频插件
  import 'tinymce/plugins/table'// 插入表格插件
  import 'tinymce/plugins/lists'// 列表插件
  import 'tinymce/plugins/wordcount'// 字数统计插件
  import 'tinymce/plugins/link'
  import 'tinymce/plugins/code' // 源码
  import 'tinymce/plugins/preview'
  import 'tinymce/plugins/fullscreen' //全屏
  import 'tinymce/plugins/help'
  const props = defineProps({
    // 默认的富文本内容
    value: {
      type: String,
      default: ''
    },
    // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
    // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
    baseUrl: {
      type: String,
      default: window.location.origin ? window.location.origin : ''
    },
    plugins: {
      type: [String, Array],
      default: 'link lists image code table wordcount media preview fullscreen help'
    },
    toolbar: {
      type: [String, Array],
      default: 'bold italic underline strikethrough | fontsizeselect | formatselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent blockquote | undo redo | link unlink code lists table image media | removeformat | fullscreen preview'
    }
  })
  let init = reactive({
    language_url: `${props.baseUrl}/tinymce/langs/zh_CN.js`, // 语言包的路径，具体路径看自己的项目，文档后面附上中文js文件
    language: "zh_CN", //语言
    skin_url: `${props.baseUrl}/tinymce/skins/ui/oxide`,
    // skin_url: 'tinymce/skins/ui/oxide-dark', // 暗色系
    convert_urls: false,
    height: 800,
    width: '100%',
    // content_css（为编辑区指定css文件）,加上就不显示字数统计了
    // content_css: `${this.baseUrl}tinymce/skins/content/default/content.css`,
    // （指定需加载的插件）
    plugins: props.plugins,
    toolbar: props.toolbar, // （自定义工具栏）

    statusbar: true, // 底部的状态栏
    menubar: 'file edit insert view format table tools help', // （1级菜单）最上方的菜单
    branding: false, // （隐藏右下角技术支持）水印“Powered by TinyMCE”
    // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
    // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
    images_upload_handler: (blobInfo: any, success: any, failure: any) => {
      const img = 'data:image/jpeg;base64,' + blobInfo.base64()
      success(img)
      console.log(failure)
    }
  })
  const emits = defineEmits(["getContent"])
  let myValue = ref(props.value)
  //监听外部传递进来的的数据变化
  watch(() => props.value, () => {
      myValue.value = props.value
      emits("getContent", myValue.value)
    }
  )
  //监听富文本中的数据变化
  watch(() => myValue.value, () => {
      emits("getContent", myValue.value)
    }
  )


  onMounted(()=>{
    tinymce.init({})
  })
</script>
<style scoped>
</style>