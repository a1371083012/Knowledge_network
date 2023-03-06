import { createApp } from 'vue'
import App from './App.vue'
// 引入store
import store from './store'
// 引入router
import router from './router'
// 引入全局事件总线
import mitt from "mitt";
// 引入ElementPlus（完整引入）
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 全局样式
import './style/index.css'


const app = createApp(App)
// 配置store、router、ElementPlus，并且挂载app
app.use(store).use(router).use(ElementPlus).mount('#app')
// 配置全局事件总线
app.config.globalProperties.mittBus = new mitt()
// 注册element所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}