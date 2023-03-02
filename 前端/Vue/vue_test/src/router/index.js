//该文件专门用于创建整个应用的路由器

// 引入VueRouter
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'

// 先把VueRouter原型对象的push先保存一份
let originPush = VueRouter.prototype.push
// 重写push方法
// 第一个参数：告诉原来push方法，往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function(location, resolve, reject){
  if(resolve || reject){
    originPush.call(this, location, resolve, reject)
  }else{
    originPush.call(this, location, ()=>{}, ()=>{})
  }
}

// 先把VueRouter原型对象的push先保存一份
let originReplace = VueRouter.prototype.replace
// 重写replace方法
// 第一个参数：告诉原来push方法，往哪里跳转（传递哪些参数）
VueRouter.prototype.replace = function(location, resolve, reject){
  if(resolve || reject){
    originReplace.call(this, location, resolve, reject)
  }else{
    originReplace.call(this, location, ()=>{}, ()=>{})
  }
}




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
              // props的第三种写法，值为函数
              props($route){
                return{
                  id: $route.query.id,
                  title: $route.query.title,
                }
              }
              
            }
          ]
        }
      ]
    }
  ]
});