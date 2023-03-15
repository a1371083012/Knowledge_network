import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: ()=> import ('@/views/Home.vue'),
    meta: {title: '首页', },
  },
  {
    path:'/record',
    component: () => import('@/views/Record.vue'),
    meta: {title: '随记', },
  },
  {
    path:'/board',
    component: () => import('@/views/Board.vue'),
    meta: {title: '留言板', },
  },
  {
    path:'/navigation',
    component: () => import('@/views/Navigation.vue'),
    meta: {title: '导航', },
  },
  {
    path:'/publish',
    component: () => import('@/views/Publish.vue'),
    meta: {title: '发布', },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

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

export default router
