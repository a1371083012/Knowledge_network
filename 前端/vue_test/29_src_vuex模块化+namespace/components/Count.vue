<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'Count',
  data(){
    return{
      n: 1, //用户选择的数字
    }
  },
  // 问题一：模块化后，store中有互相交集怎么处理？
  // 问题二：不用...mapState()写法的坑？
  // 问题三：当在actions和mutations中需要其他操作时怎么办？
  computed:{
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState('countAbout', ['sum', 'school', 'subject']),
    ...mapState('personAbout', ['personList']),
    // 借助mapGetters生成计算属性，从getter中读取数据。（数组写法）
    ...mapGetters('countAbout', ['bigSum']),
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations('countAbout', {increment: 'ADD', decrement: 'REDUCE'}),
    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
    ...mapActions('countAbout', {incrementOdd: 'addOdd', incrementWait: 'addWait'}),
  },
  mounted(){
    console.log(this.$store);
  }
}
</script>

<style scoped>
  button{
    margin: 0 5px;
  }
</style>
