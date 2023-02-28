<template>
  <div class="app">
    <h3>我是App组件</h3>
    <child/>
  </div>
</template>

<script>
import Child from './components/Child'
export default {
  name: 'App',
  components: {Child},
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>