//该文件用于创建Vuex中最为核心的store
import Vue from 'vue';
//引入Vuex
import Vuex from 'vuex';
// 引入小仓库
import home from './home';
import search from './search';
import detail from './detail';
import shopcart from './shopcart';
import user from './user';
import trade from './trade';
//应用Vuex插件
Vue.use(Vuex)

//创建并暴露store类的一个实例
export default new Vuex.Store({
  // 实现Vuex仓库模块化开发存储数据
  modules:{
    home,
    search,
    detail,
    shopcart,
    user,
    trade,
  }
})