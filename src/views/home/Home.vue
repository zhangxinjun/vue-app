<template>
  <div class="home">
    <!-- 头部 -->
    <NavBar class="navbar"><div slot="center">这是home组件的导航</div></NavBar>
    <!-- 轮播组件 -->
    <HomeSwiper :banners="banners"></HomeSwiper>
    <!-- 推荐组件 -->
    <HomeCommend :recommend="recommend"></HomeCommend>
    <!-- 导航控制组件 -->
    <TabControl :tabControl="['潮流','推荐','新款']"></TabControl>
  </div>
</template>

<script>
// 导入的公共组件
import NavBar from "common/common/navbar/NavBar";
import TabControl from "common/common/tabcontrol/TabControl";

// 导入的子组件
import HomeSwiper from "./HomeSwiper";
import HomeCommend from "./HomeRecommend";

// 导入的其他比如方法之类的
import { getMenuDatide } from "network/home";
export default {
  data () {
    return {
      banners : [],
      recommend : []
    }
  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeCommend
  },
  created () {
    getMenuDatide().then(res => {
      console.log(res.data)
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list
    });
  }
};
</script>

<style scoped>
.home{
  padding-top: 44px
}
.navbar {
  color: #fff;
  background: #ff0088;
  position: fixed;
  top:0;
  left:0;
  right: 0;
  z-index: 3
}

</style>