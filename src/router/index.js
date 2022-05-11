// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
// 
import routes from './routes';
// 使用插件
Vue.use(VueRouter);
//引入store
import store from "@/store";

// 重写push|replace
// 先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 第一个参数：往哪里跳
// 第二个参数：成功的回调
// 第三个参数：失败的回调
VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve && reject){
    // call || apply 不同点：call传递参数用逗号隔开，apply传递数组
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace = function(location,resolve,reject){
  if(resolve && reject){
    // call || apply 不同点：call传递参数用逗号隔开，apply传递数组
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}

// 配置路由 VueRouter类的实例
let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
})

//全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
  //to:获取到要跳转到的路由信息
  //from：获取到从哪个路由跳转过来来的信息
  //next: next() 放行  next(path) 放行  next(false) 中断
 //获取仓库中的token-----可以确定用户是登录了
  let token  = store.state.user.token;
  let name = store.state.user.userInfo.name;
  //用户登录了
  if(token){
    //已经登录而且还想去登录与注册------不行
    if(to.path=="/login"||to.path=='/register'){
      next('/');
    }else{
      //已经登陆了,访问的是非登录与注册
      //登录了且拥有用户信息 放行
      if(name){
        next();
      }else{
        //登陆了但没有用户信息
        //在路由跳转之前获取用户信息再放行
        try {
        await store.dispatch('getUserInfo');
        next();
        } catch (error) {
          //token失效重新登录
          await store.dispatch('userLogout');
          next('/login')
        }
      }
    }
  }else{
    //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
    //未登录去上面这些路由----跳转到登录
    let toPath = to.path;
    if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
      //把未登录的时候想去而没有去成的信息，存储于地址栏中【路由】
      next('/login?redirect='+toPath);
    }else{
      //去的不是上面这些路由（home|search|shopCart）---放行
      next();
    }
  }
});

export default router;