<template>
  <div>
    <!-- 不使用:也可以传参 -->
    <Student name="张三" sex="男" :age="15"/><hr>
    <Student name="李四" sex="女"/><hr>
    <Student name="王五" sex="男" :age="23"/>
  </div>
</template>

<script>
  // 引入School组件
  import Student from './components/Student'
  export default {
    name: 'App',
    components: { Student },
  }
</script>

<style>

</style>

