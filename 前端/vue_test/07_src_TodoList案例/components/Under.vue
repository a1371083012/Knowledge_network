<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="remove">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Under',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  methods: {
    remove(){
      if(confirm('确认清除已完成吗？'))
        this.clearAllTodo();
    }
  },
  computed: {
    total(){
      return this.todos.length;
    },
    doneTotal(){
      /* 使用reduce方法 */
      return this.todos.reduce((p, e) => e.done ? p+1 : p, 0);

      /* 使用filter方法 */
      // return this.todos.filter(e => e.done).length
    },
    isAll: {
      get(){
        return this.total === this.doneTotal && this.total > 0
      },
      set(value){
        this.checkAllTodo(value);
      }
    }
  }
}
</script>

<style scoped>
  /* footer */
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button{
    float: right;
    margin-top: 5px;
  }
</style>
