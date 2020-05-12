<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <div>
         <img :src="goodsItem.show.img" alt="" @load="imgLoad">
      </div>
      <div>
        <p class="title">{{goodsItem.title}}</p>
        <p>
          <span> 原价:<s class="oldPrice">{{goodsItem.orgPrice}}</s></span>
          <span>现价: ￥<b>{{goodsItem.price}}</b></span>
          </p>
      </div>
    </a>
     
  </div>
</template>

<script>
export default {
  props : {
    goodsItem : {
      type : Object
    }
  },
  methods : {
    // 监听图片的加载事件
    imgLoad () {
      // 在图片加载完成后将事件传递出去
      this.$bus.$emit("itemImgLoad")
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 250px;
}
  .title{
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis
  }
   .oldPrice{
    text-decoration: line-through ;
  }
</style>