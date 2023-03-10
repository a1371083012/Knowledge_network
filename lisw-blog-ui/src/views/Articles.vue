<template>
  <div id="ArticlesView">
    <div class="title">
      浏览器版本检测
    </div>
    <div class="info">
      123s
    </div>
    <div class="content">
      <tinymce v-model="msg" @onClick="onClick" />
      <button @click="clear">清空内容</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import Tinymce from '@/components/Tinymce/Tinymce.vue'
  let disabled = ref(false)
  let msg = ref('Welcome to Use Tinymce Editor')
  let isabled = ref(false)

  // 内容
  function getContent () {
    console.log('内容', msg.value)
  }

  // 鼠标单击的事件
  function onClick (e: any, editor: any) {
    console.log('Element clicked')
    console.log(e)
    console.log(editor)
  }

  // 清空内容
  function clear () {
    // console.log(this.$refs.editor)
    // this.$refs.editor.clear()
  }

  
</script>

<style lang="scss" scoped>
  #ArticlesView{
  }
</style>