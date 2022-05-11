<template>
  <div>
    <Header></Header>
    <!-- 路由出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在Login、Register隐藏 -->
    <!-- <Footer v-show="$route.path == '/home' || $route.path == '/search'"></Footer> -->
    <!-- 利用路由元信息解决当前问题好处：一行代码就可以解决 -->
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
// 引入
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'',
  components:{
    Header,
    Footer
  },
  mounted() {
    // 通知vuex发送请求，获取商品分类的三级列表的数据，存储在仓库中
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>

</style>