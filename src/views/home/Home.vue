<template>
  <div>
    <!-- 头部 -->
    <NavBar class="navbar">
      <div slot="center">这是home组件的导航</div>
    </NavBar>
    <!-- 轮播组件 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import NavBar from "common/common/navbar/NavBar";
import { getMenuDatide } from "network/home";
export default {
  data () {
    return {
      banners : []
    }
  },
  components: {
    NavBar
  },
  created () {
    getMenuDatide().then(res => {
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
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .my-swipe img{
    width:100%
  }
</style>