import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductManage from '../views/ProductManage'
import Add from '../views/Add'
import Index from '../views/Index'
import BookUpdate from '../views/BookUpdate'
import detail from "../views/detail";
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"应用",
    component:Index,
    show:true,
    redirect:"/ProductManage",
    children:[
      {
        path:"/ProductManage",
        name:"商城",
        component:ProductManage
      },
      {
        path:"/Add",
        name:"添加商品",
        component:Add
      }
    ]
  },
  {
    path:'/detail',
    component:detail,
    show:false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
