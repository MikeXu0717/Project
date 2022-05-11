import Vue from 'vue';
import App from './App.vue';
// 引入路由
import router from '@/router';
//引入仓库store
import store from '@/store';

// 全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { Button,MessageBox} from 'element-ui';
// 第一个参数：组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
//注册elementUI全局组件
Vue.component(Button.name,Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//统一接口api文件夹里面全部请求函数
//统一引入
import * as API from '@/api';

import atm from '@/assets/1.gif';
//引入插件
import VueLazyload from 'vue-lazyload';
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading:atm
});

//引入表单校验插件
import "@/plugins/validate";

// 引入mock数据
import '@/mock/mockServe';

// 引入swiper样式
import 'swiper/css/swiper.css';

new Vue({
  render: h => h(App),
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
    Vue.prototype.$API = API;
	},
  // 注册路由:
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router:router,
  // 注册仓库:组件实例上会多一个属性$store
  store,
}).$mount('#app')
