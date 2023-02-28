<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top @addTodo="addTodo"></Top>
        <List :todos="todos"></List>
        <Under v-show="todos.length" :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></Under>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入组件
  import Top from './components/Top'
  import List from './components/List'
  import Under from './components/Under'

  export default {
    name: 'App',
    components: { Top, List, Under },
    data() {
      return {
        // 由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
        todos: JSON.parse(localStorage.getItem("todos")) || []
      }
    },
    methods: {
      // 添加一个todo
      addTodo(data){
        this.todos.unshift(data);
      },
      // 勾选or取消勾选一个todo
      checkTodo(id){
        this.todos.forEach(e => {
          if(e.id === id) e.done = !e.done;
        });
      },
      // 全选or取消全选
      checkAllTodo(checked){
        this.todos.forEach(e => e.done = checked);
      },
      // 删除一个todo
      deleteTodo(id){
        /* 使用filter实现 */
        this.todos = this.todos.filter(e => e.id!=id);
      },
      // 清除已完成任务
      clearAllTodo(){
        this.todos = this.todos.filter(e => !e.done);
      }
    },
    mounted(){
      this.$bus.$on('checkTodo', this.checkTodo);
      this.$bus.$on('deleteTodo', this.deleteTodo);
    },
    beforeDestroy(){
      this.$bus.$off('checkTodo');
      this.$bus.$off('deleteTodo');
    },
    watch:{
      todos:{
        deep: true,
        handler(value){
          localStorage.setItem("todos",JSON.stringify(value));
        }
      }
    }
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
