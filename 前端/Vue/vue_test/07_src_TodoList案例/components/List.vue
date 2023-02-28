<template>
  <ul class="todo-main">
    <!-- 
      :info、:checkTodo、:deleteTodo都是给子组件Item的
     -->
    <Item
      v-for="todo in todos" 
      :key="todo.id" 
      :info="todo"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
      >
    </Item>
  </ul>
</template>

<script>

import Item from './Item'

export default {
  name: 'List',
  components: { Item },
  props: ['todos', 'checkTodo', 'deleteTodo'],
}
</script>

<style scoped>
  /* main */
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
