<template>
  <!-- 导航栏 -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo header-nav"
    mode="horizontal"
    @select="handleSelect"
    :ellipsis="ellipsisFlag"
  >
    <el-menu-item index="0">
      <el-image style="width: 30px; height: 30px;" :src="'./src/assets/logo.jpg'" fit="contain" @click="router.push('/')"/>
    </el-menu-item>
    <div class="flex-grow"></div>
      <el-menu-item index="1"><el-icon :size="16"><Notebook /></el-icon>随记</el-menu-item>
      <el-menu-item index="2"><el-icon :size="16"><ChatDotSquare /></el-icon>留言板</el-menu-item>
      <el-menu-item index="3"><el-icon :size="16"><Position /></el-icon>导航</el-menu-item>
      <el-menu-item index="4"><el-icon :size="16"><User /></el-icon>登录</el-menu-item>
  </el-menu>
  <Login></Login>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import Login from 'components/Login/index.vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  let store = useStore()
  let router = useRouter()

  // 根据屏幕大小设置导航栏的响应式 - 480px
  let ellipsisFlag = ref(false)
  ellipsisFlag.value = (window.innerWidth < 480) ? true : false

  // 导航栏点击事件
  const activeIndex = ref('0')
  const handleSelect = (key: string, keyPath: string[]) => {
    switch(key){
      case '1': {
        router.push('/record')
        break;
      }
      case '4' :{
        store.state.dialogOptinons.loginDialogflag = true
        break;
      }
    }
  }
  
</script>

<style lang="scss" scoped>
  .header-nav{
    width: 100vw;
    height: 40px;
    z-index: 999;
  }
  .nav-default{
    cursor: default;
  }
  .flex-grow {
    flex-grow: 1
  }
  :deep(.el-image__inner){
    vertical-align: top !important
  }
</style>