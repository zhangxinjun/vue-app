<template>
  <div class="goods">
      <GoodsItem class="goodsItem" v-for="(item,index) in goods" :key="index" :goodsItem="item"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem"
export default {
    props : {
        goods : {
            type : Array
        }
    },
    components : {
        GoodsItem
    }
}
</script>

<style scoped>
    .goods{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .goodsItem{
        width: 48%;
        margin: 12px 0
    }
</style>