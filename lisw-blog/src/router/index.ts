//该文件专门用于创建整个应用的路由器

// 引入vue-router
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Admin',
    path:'/',
    component: () => import('@/view/Admin.vue'),
  },
  {
    name: 'Home',
    path:'/home',
    component: () => import('@/view/Home.vue'),
    meta: {title: '首页'},
  },
  {
    name: 'Record',
    path:'/record',
    component: () => import('@/view/Record.vue'),
    meta: {title: '随记'},
  },
]

//创建并默认暴露一个路由器
const router = createRouter({
  routes,
  history: createWebHistory()
});

// 全局前置路由守卫 —— 初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next)=>{
  // console.log('前置路由守卫',to,from);
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
  // console.log('后置路由守卫',to,from);
  document.title = to.meta.title as string || 'Lisw-Blog';
})

export default router;