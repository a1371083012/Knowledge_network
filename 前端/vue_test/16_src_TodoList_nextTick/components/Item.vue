<template>
  <li>
    <label>
      <input type="checkbox" :checked="info.done" @change="handleCheck(info.id)"/>
      <span v-show="!info.isEdit">{{info.title}}</span>
      <input
        type="text"
        ref="inputTitle"
        v-show="info.isEdit"
        :value="info.title"
        @blur="handleBlur($event, info)"
      >
    </label>
    <button class="btn btn-danger" @click="handleDelete(info.id)">删除</button>
    <button v-show="!info.isEdit" class="btn btn-edit" @click="handleEdit(info)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'Item',
  //声明接收todo对象
  props: ['info'],
  methods: {
    //勾选or取消勾选
    handleCheck(id){
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      // this.$bus.$emit('checkTodo', id);
        pubsub.publish('checkTodo', id);
    },
    //删除todo
    handleDelete(id){
      if(confirm('确认删除吗？')){
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id);
        pubsub.publish('deleteTodo', id);
      }
    },
    //编辑todo
    handleEdit(info){
      if(info.hasOwnProperty('isEdit')){
        info.isEdit = true;
      }
      else{
        this.$set(info, 'isEdit', true);
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus();
      })
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(e, info){
      info.isEdit = false;
      // 校验数据
      if(!e.target.value.trim()) return alert('输入不能为空');
      pubsub.publish('editTodo', {id: info.id, value: e.target.value});
    }
  }
}
</script>

<style scoped>
  /* item */
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom:1px solid #ddd;
  }
  li label{
    float: left;
    cursor: pointer;
  }
  li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button{
    float: right;
    display: none;
    margin-top: 3px;
  }
  li::before{
    content: initial;
  }
  li:last-child{
    border-bottom: none;
  }
  li:hover{
    background-color: #ddd;
  }
  li:hover button{
    display: block;
  }
</style>
