<template>
  <div class="app">
    <h3>我是App组件（祖），{{ name }}--{{ price }}</h3>
    <child/>
  </div>
</template>

<script>
import { provide, reactive, toRefs } from 'vue'
import Child from './components/Child'
export default {
  name: 'App',
  components: {Child},
  setup(){
    let car = reactive({ name: '奔驰', price: '40w' })
    provide('car', car); // 给自己的后代组件传递数据
    return{ ...toRefs(car) }
  }
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>