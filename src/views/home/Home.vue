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
    <!-- 商品列表组件 -->
    <Goods :goods="goods['pop'].list"></Goods>
  </div>
</template>

<script>
// 导入的公共组件
import NavBar from "common/common/navbar/NavBar";
import TabControl from "common/common/tabcontrol/TabControl";
import Goods from "common/common/goods/Goods"

// 导入的子组件
import HomeSwiper from "./HomeSwiper";
import HomeCommend from "./HomeRecommend";

// 导入的其他比如方法之类的
import { getMenuDatide,GitGoodsList } from "network/home";

export default {
  data () {
    return {
      banners : [],
      recommend : [],
      goods : {
        pop : { page : 0,list : []},
        new : { page : 0,list : []},
        sell : {page : 0,list : []}
      }
    }
  },
  components: {
    NavBar,
    TabControl,
    Goods,
    HomeSwiper,
    HomeCommend
  },
  created () {
    // 获取轮播及更多的数据
    this.GitBannerMore()
    // 获取商品列表数据
    this.GitHomeGoods("pop")
    this.GitHomeGoods("new")
    this.GitHomeGoods("sell")
  },
  methods : {
    // 获取banner以及banner下部更多部分的数据
    GitBannerMore () {
      getMenuDatide().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list
      });
    },
    // 获取home页主体内容的数据
    GitHomeGoods (type) {
      const page = this.goods[type].page + 1
      GitGoodsList ("pop",page) .then(res => {
        console.log(res)
        this.goods[type].list = [...res.data.list]
        // 每次数据请求完成后都对对应的页码进行加1操作用于实现下拉加载更多的功能
        this.goods[type].page += 1
      })
    }
  }
};
</script>

<style scoped>
.home{
  padding: 44px 0
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