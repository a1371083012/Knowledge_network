//该文件专门用于创建整个应用的路由器

// 引入VueRouter
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'

//创建并默认暴露一个路由器
export default new VueRouter({
  routes:[
    {
      name: 'guanyu',
      path:'/about',
      component: About
    },
    {
      path:'/home',
      component: Home,
      children: [ 
        {
          path: 'news',
          component: News,
        },
        {
          path: 'messages',
          component: Messages,
          children: [
            {
              name: 'xiangqing',
              path: 'detail',
              component: Detail,
            }
          ]
        }
      ]
    }
  ]
});