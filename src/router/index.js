import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Industry from '../views/Industry'
import Stock from '../views/Stock'
import Predict from '../views/Predict'
import Test from "../views/Test";

Vue.use(VueRouter)

  const routes = [
      {
          path: '/',
          redirect: '/home'
      },
      {
          path: '*',
          redirect: '/home'
      },
      {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {
              title: '股票首页'
          }
      },
      {
          path: '/industry/:name',
          name: 'Industry',
          component: Industry,
          meta: {
              title: '行业'
          }
      },
      {
          path: '/stock/:id',
          name: 'Stock',
          component: Stock,
          meta: {
              title: '股票'
          }
      },
      {
          path: '/predict',
          name: 'Predict',
          component: Predict,
          meta: {
              title: '预测'
          }
      },
      {
          path: '/test',
          name: 'Test',
          component: Test,
          meta: {
              title: '测试'
          }
      },
  ]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router
