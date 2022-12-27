<template>
  <div class="app">
    <h1>{{msg}}，学生姓名是：{{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @test="getStudentName" @test2="demo"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
  import School from './components/School'
  import Student from './components/Student'

  export default {
    name: 'App',
    components: { School, Student },
    data(){
      return {
        msg: '你好啊',
        studentName: '',
      }
    },
    methods: {
      getSchoolName(name){
        console.log('App收到了学生名：', name);
      },
      // getStudentName(name, ...params){
      //   console.log('App收到了学生名：', name, params);
      //   this.studentName = name;
      // },
      demo(){
        console.log('demo事件被触发了');
      },
      show(){
        console.log(123);
      }
    },
    mounted(){
      // 绑定自定义事件
      this.$refs.student.$on('test', (name, ...params) => {
        console.log('App收到了学生名：', name, params);
        this.studentName = name;
      });
      // 绑定自定义事件
      // this.$refs.student.$on('test', this.getStudentName); 
    }
  }
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>
