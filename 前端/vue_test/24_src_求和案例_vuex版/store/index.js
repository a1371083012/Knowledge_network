//该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用Vue插件
Vue.use(Vuex)

//准备actions —— 用于响应组件中的动作
const actions = {
  addOdd(context, value){
    console.log('actions中的addOdd被调用了');
    if(context.state.sum % 2){
      context.commit('ADD', value);
    }
  },
  addWait(context, value){
    console.log('actions中的addWait被调用了');
    setTimeout(() => {
      context.commit('ADD', value);
    }, 500);
  },
}
//准备mutations —— 用于操作数据（state）
const mutations = {
  ADD(state, value){
    console.log('actions中的add被调用了');
    state.sum += value;
  },
  REDUCE(state, value){
    console.log('actions中的reduce被调用了');
    state.sum -= value;
  }
}
//准备state —— 用于存储数据
const state = {
  sum:0, //当前的值
}

//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
})