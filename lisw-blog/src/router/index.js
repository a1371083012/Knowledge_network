//该文件专门用于创建整个应用的路由器

// 引入vue-router
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {
    name: 'Login',
    path:'/',
    component: () => import('@/pages/Home.vue'),
    meta: {title: '登录页'},
  },
]

//创建并默认暴露一个路由器
const router = new createRouter({
  routes,
  history: createWebHashHistory()
});

// 全局前置路由守卫 —— 初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next)=>{
  console.log('前置路由守卫',to,from);
  // if(to.meta.isAuth){ // 判断是否需要鉴权
  //   if(localStorage.getItem('school')==='atguigu'){
  //     next();
  //   }else{
  //     alert('学校名不对，无权查看！');
  //   }
  // }else{
  //   next();
  // }
  next();
})

// 全局后置路由守卫 —— 初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from)=>{
  console.log('后置路由守卫',to,from);
  document.title = to.meta.title || '硅谷系统';
})

export default router;