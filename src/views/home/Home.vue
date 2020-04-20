<template>
  <div>
    <!-- 头部 -->
    <NavBar class="navbar">
      <div slot="center">这是home组件的导航</div>
    </NavBar>
    <!-- 轮播组件 -->
    <HomeSwiper :banners="banners"></HomeSwiper>
    <!-- 推荐组件 -->
    <HomeCommend></HomeCommend>
  </div>
</template>

<script>
import NavBar from "common/common/navbar/NavBar";
import HomeSwiper from "./HomeSwiper"
import HomeCommend from "./HomeRecommend"

import { getMenuDatide } from "network/home";
export default {
  data () {
    return {
      banners : []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeCommend
  },
  created () {
    getMenuDatide().then(res => {
      console.log(res.data)
      this.banners = res.data.banner.list
    });
  }
};
</script>

<style scoped>
.navbar {
  color: #fff;
  background: #ff0088;
}

</style>