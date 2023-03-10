<template>
  <!-- 导航栏 -->
  <el-menu
    default-active="0"
    class="el-menu-demo header-nav"
    mode="horizontal"
    @select="handleSelect"
    :ellipsis="ellipsisFlag"
  >
    <el-menu-item index="0"  @click="router.push('/')">
      <el-image style="width: 30px; height: 30px;" :src="require('@/assets/logo.jpg')" fit="contain"/>
    </el-menu-item>
    <div class="flex-grow"></div>
      <el-menu-item index="1">随记</el-menu-item>
      <el-menu-item index="2">留言板</el-menu-item>
      <el-menu-item index="3">导航</el-menu-item>
      <el-menu-item index="4"><el-icon :size="16"><User /></el-icon>登录</el-menu-item>
  </el-menu>
  <Login></Login>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import Login from '@/components/Login.vue'
  import { Notebook, ChatDotSquare, Position, User } from '@element-plus/icons-vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  const store = useStore()
  const router = useRouter();

  // 根据屏幕大小设置导航栏的响应式 - 480px
  let ellipsisFlag = ref(false)
  ellipsisFlag.value = (window.innerWidth < 480) ? true : false

  // 导航栏点击事件
  const handleSelect = (key: string, keyPath: string[]) => {
    switch(key){
      case '1': {
        router.push('/record')
        break;
      }
      case '2': {
        router.push('/board')
        break;
      }
      case '3': {
        router.push('/navigation')
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
    height: 40px;
    z-index: 99;
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