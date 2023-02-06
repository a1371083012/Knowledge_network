//该文件专门用于创建整个应用的路由器

// 引入VueRouter
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News'
import Messages from '../pages/Messages'

//创建并默认暴露一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component: About
    },
    {
      path:'/home',
      component: Home,
      children: [ // 通过children配置子级路由
        {
          path: 'news', //此处一定不要写：/news
          component: News,
        },
        {
          path: 'messages', //此处一定不要写：/messages
          component: Messages,
        }
      ]
    }
  ]
});