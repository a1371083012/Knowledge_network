import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import('../views/Home')
const About = () => import('../views/About')

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
  ]
})