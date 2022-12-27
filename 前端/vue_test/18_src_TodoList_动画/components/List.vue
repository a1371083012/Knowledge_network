<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <Item
        v-for="todo in todos" 
        :key="todo.id" 
        :info="todo"
        >
      </Item>
    </transition-group>
  </ul>
</template>

<script>

import Item from './Item'

export default {
  name: 'List',
  components: { Item },
  props: ['todos'],
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

  .todo-enter-active{
    animation: test .5s;
  }
  .todo-leave-active{
    animation: test .5s reverse;
  }
  @keyframes test {
    from{
      transform: translateX(1000px);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>
