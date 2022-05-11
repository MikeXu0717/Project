// 所有路由配置的数组
// 引入路由组件
// import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupCenter'

/* 懒加载 component: () => import('@/pages/Search')
1. import(modulePath): 动态import引入模块, 被引入的模块会被单独打包
2. 组件配置的是一个函数, 函数中通过import动态加载模块并返回, 
  初始时函数不会执行, 第一次访问对应的路由才会执行, 也就是说只有一次请求对应的路由路径才会请求加载单独打包的js
作用: 用于提高首屏的加载速度 */

export default [
  {
    path:'/home',
    component:() => import('@/pages/Home'),
    meta:{show:true}
  },
  {
    name:'search',
    path:'/search/:keyword?',
    component:Search,
    meta:{show:true}
  },
  {
    path:'/login',
    component:Login,
    meta:{show:false}
  },
  {
    path:'/register',
    component:Register,
    meta:{show:false}
  },
  {
    path:'/detail/:skuId',
    component:Detail,
    meta:{show:true}
  },
  {
    name:'addcartsuccess',
    path:'/addcartsuccess',
    component:AddCartSuccess,
    meta:{show:true}
  },
  {
    name:'shopcart',
    path:'/shopcart',
    component:ShopCart,
    meta:{show:true}
  },
  {
    path:'/trade',
    component:Trade,
    meta:{show:true},
    /* 只能从购物车界面来, 才能跳转到交易界面 */
    beforeEnter:(to, from, next)=>{
      if (from.path=='/shopcart') {
        next()
      } else {
        next('/shopcart')
      }
    }
  },
  {
    path:'/pay',
    component:Pay,
    meta:{show:true},
    /* 只能从交易界面来, 才能跳转到支付界面 */
    beforeEnter:(to, from, next)=>{
      if (from.path=='/trade') {
        next()
      } else {
        next('/trade')
      }
    }
  },
  {
    path:'/paySuccess',
    component:PaySuccess,
    meta:{show:true}
  },
  {
    path:'/center',
    component:Center,
    meta:{show:true},
    // 二级路由组件
    children:[
      {
        path:'myorder',
        component:MyOrder,
      },
      {
        path:'grouporder',
        component:GroupOrder,
      },
      {
        path:'/center',
        redirect:'/center/myorder'
      }
    ]
  },
  // 重定向，访问/，立马定向到首页
  {
    path:'',
    redirect:'/home'
  }
]
