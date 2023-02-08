<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next){
    console.log('进入路由');
    next();
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave (to, from, next){
    console.log('离开路由');
    next();
  },
  activated(){
    console.log('激活');
  },
  deactivated(){
    console.log('失活');
  },
  beforeCreate(){
    console.log('创建前');
  },
  created(){
    console.log('创建');
  },
  beforeMount(){
    console.log('挂载前');
  },
  mounted(){
    console.log('挂载');
  },
  beforeDestroy(){
    console.log('销毁前');
  },
  destroyed(){
    console.log('销毁');
  },
}
</script>

<style scoped>
</style>