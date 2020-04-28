<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <div>
         <img :src="goodsItem.show.img" alt="">
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