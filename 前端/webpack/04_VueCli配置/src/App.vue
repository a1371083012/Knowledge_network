<template>
  <div>
    <h1 class="title">hello app</h1>
    <el-button type="primary">按钮</el-button>
    <Home />
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
.title{
  color: red;
}
</style>