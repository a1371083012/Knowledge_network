// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件
import vueRseource from 'vue-resource'
// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 使用插件
Vue.use(vueRseource);

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this; //安装全局事件总线
  }
})
