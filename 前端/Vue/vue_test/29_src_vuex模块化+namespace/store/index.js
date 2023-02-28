//该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用Vue插件
Vue.use(Vuex)

// 引入countOptinons和personOptinons
import countOptinons from './count';
import personOptinons from './person';

//创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout:countOptinons,
    personAbout:personOptinons
  }
})