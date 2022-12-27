<template>
  <div id="root">
    <Test></Test>
    <Test2></Test2>
    <Test3></Test3>
  </div>
</template>

<script>
  // 引入组件
  import Test from './components/Test'
  import Test2 from './components/Test2'
  import Test3 from './components/Test3'

  export default {
    name: 'App',
    components: { Test, Test2, Test3 },
  }
</script>

<style>
  body{
    background: #fff;
  }
  .btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-edit{
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(67, 168, 208);
    margin-right: 5px;
  }
  .btn-edit:hover{
    color: #fff;
    background-color: rgb(155, 217, 241);
  }
  .btn-danger{
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-danger:hover{
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus{
    outline: none;
  }
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
