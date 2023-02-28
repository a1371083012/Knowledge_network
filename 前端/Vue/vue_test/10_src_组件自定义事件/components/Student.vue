<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">点我把学生名给App</button>
    <button @click="unbind">解绑test事件</button>
    <button @click="death">销毁Student的vc实例</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },
  methods: {
    sendStudentName(){
      // 触发Student组件实例身上的test事件
      this.$emit('test', this.name, 666, 888, 999);
      // this.$emit('test2');
    },
    unbind(){
      this.$off('test'); //解绑一个自定义事件
      // this.$off(['test', 'test2']); //解绑多个自定义事件
      // this.$off() //解绑所有自定义事件
    },
    death(){
      this.$destroy() //销毁了当前Student组件的实例，销毁后有所Student实例的自定义事件全都不奏效了。
    }
  }
}
</script>

<style lang="less" scoped>
  .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>
