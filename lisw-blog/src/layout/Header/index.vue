<template>
  <!-- 导航栏 -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo header-nav"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <el-image style="width: 50px; height: 50px;" :src="'./src/assets/logo.png'" fit="contain" />
    </el-menu-item>
    <el-menu-item index="1" disabled class="nav-default">Lisw-Blog</el-menu-item>
    <div class="flex-grow"></div>
    <el-menu-item index="1"><el-icon :size="20"><Notebook /></el-icon>随记</el-menu-item>
    <el-menu-item index="2"><el-icon :size="20"><ChatDotSquare /></el-icon>留言板</el-menu-item>
    <el-menu-item index="3"><el-icon :size="20"><Position /></el-icon>导航</el-menu-item>
    <el-menu-item index="4"><el-icon :size="20"><User /></el-icon>登录</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const activeIndex = ref('0')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<style>

  .header-nav{
    width: 100vw;
    height: 50px;
  }
  .flex-grow {
    flex-grow: 1;
  }
</style>