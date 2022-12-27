<template>
  <div>
    <button @click="getXiaoMing">获取小明信息</button>
    <button @click="getXiaoHong">获取小红信息</button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'App',
    methods: {
      getXiaoMing(){
        axios.get('http://localhost:8080/api/getMethod').then(
          response => {
            console.log('请求成功了', response.data);
          },
          error => {
            console.log('请求失败了', error.message);
          }
        )
      },
      getXiaoHong(){
        axios.get('http://localhost:8080/demo/getMethod').then(
          response => {
            console.log('请求成功了', response.data);
          },
          error => {
            console.log('请求失败了', error.message);
          }
        )
      }
    }
  }
</script>

<style>

</style>
