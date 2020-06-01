<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" @load="swiperImgLoad" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array
    }
  },
  data () {
    return {
      isImgLoad : false
    };
  },
  methods : {
    // 监听轮播图的图片加载完成事件
    swiperImgLoad () {
      // 添加一个变量以控制事件发送的次数，在第一张图片加载完成时整个swiper高度已经被撑开，此时获取的高度就是正确的高度，因此没有必要多次提交加载完成事件
      if (!this.isImgLoad) {
        this.$emit("swiperImgLoad");
        this.isImgLoad = true;
      }
      
    }
  }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe img {
  width: 100%;
}
</style>