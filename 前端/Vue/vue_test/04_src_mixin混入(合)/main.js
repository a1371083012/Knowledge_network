// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入mixin、mixin2
import {mixin, mixin2} from './mixin'
// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 配置全局mixin（全局混合）
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
})