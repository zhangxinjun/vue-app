<template>
  <div class="home">
    <!-- 头部 -->
    <NavBar class="navbar">
      <div slot="center">这是home组件的导航</div>
    </NavBar>
    <Scroll class="content" ref="scroll" :probe-type="3" @scrollPosition="scrollPosition" @pullingUp="pullingUp" :pullUpLoad="true">
      <!-- 轮播组件 -->
      <HomeSwiper :banners="banners"></HomeSwiper>
      <!-- 推荐组件 -->
      <HomeCommend :recommend="recommend"></HomeCommend>
      <!-- 导航控制组件 -->
      <TabControl :tabControl="['潮流','推荐','新款']" @tableClick="tableClick"></TabControl>
      <!-- 商品列表组件 -->
      <Goods :goods="goods[tableControl].list"></Goods>
    </Scroll>
    <!-- 返回顶部组件 监听组件的原生事件需要使用事件修饰符native -->
    <BackTop @click.native="backTop" v-show="backTopShow"></BackTop>
  </div>
</template>

<script>
// 导入的公共组件
import NavBar from "common/common/navbar/NavBar";
import TabControl from "common/common/tabcontrol/TabControl";
import Goods from "common/common/goods/Goods";
import Scroll from "common/common/scroll/Scroll"
import BackTop from "common/common/backtop/BackTop"

// 导入的子组件
import HomeSwiper from "./HomeSwiper";
import HomeCommend from "./HomeRecommend";

// 导入的其他比如方法之类的
import { getMenuDatide, GitGoodsList } from "network/home";

export default {
 
  data () {
    return {
      // banner数据
      banners: [],
      // banner下部的快的数据
      recommend: [],
      // 页面主体的数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      // 和tablecontrol配合使用控制页面展示数据的类型,默认展示pop的数据
      tableControl: "pop",
      // 返回顶部的显示与隐藏
      backTopShow: false
    };
  },
   components: {
    NavBar,
    TabControl,
    Goods,
    Scroll,
    BackTop,
    HomeSwiper,
    HomeCommend
  },
  created () {
    // 获取轮播及更多的数据
    this.GitBannerMore();
    // 获取商品列表数据在页面初始化的时候将3中类型的数据都请求过来
    this.GitHomeGoods("pop");
    this.GitHomeGoods("new");
    this.GitHomeGoods("sell");
  },
  methods: {
    // 接受tablecontrol组件传递过来的index
    tableClick (index) {
      // 根据传过来的index不同决定到底展示哪种类型的数据
      switch (index) {
        case 0:
          this.tableControl = "pop";
          break;
        case 1:
          this.tableControl = "new";
          break;
        case 2:
          this.tableControl = "sell";
          break;
      }
    },
    // 获取banner以及banner下部更多部分的数据
    GitBannerMore () {
      getMenuDatide ().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    // 获取home页主体内容的数据
    GitHomeGoods (type) {
      const page = this.goods[type].page + 1;
      GitGoodsList (type, page) .then(res => {
        // console.log(res);
        // this.goods[type].list = [...res.data.list];
        this.goods[type].list.push(...res.data.list)
        // 每次数据请求完成后都对对应的页码进行加1操作用于实现下拉加载更多的功能
        this.goods[type].page += 1;
      });
    },
    backTop () {
      // 点击的时候通过this.$refs.scroll获取scroll组件的实例从而得到bs进一步调用bs的scrollTo方法实现返回顶部功能
      this.$refs.scroll.bs.scrollTo(0,0,500)
    },
    // 子父通信将子组件中监听的位置传递过来
    scrollPosition (pos) {
      // 根据滚动位置决定是否显示
      this.backTopShow = -pos.y>1000
    },
    // 滚动到底部的事件
    pullingUp () {
      // 改事件触发的时候重新发起请求请求下一页的数据
     this.GitHomeGoods (this.tableControl)
    //  调用该方法才能实现多次的上拉加载
     this.$refs.scroll.bs.finishPullUp()
    }
  }
};
</script>

<style scoped>

.home {
  height: 100vh;
  padding: 44px 0;
  position: relative
}
.navbar {
  color: #fff;
  background: #ff0088;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
}
.content{
  /* height: 100vh; */
  position: absolute;
  top:148px;
  right:0;
  bottom:49px;
  left:0
}
</style>