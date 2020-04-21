<template>
  <div class="recommend">
     <div class="item" v-for="item in recommend" :key="item.index">
         <a :href="item.link">
             <div><img :src="item.image" alt=""></div>
             <p>{{item.title}}</p>
         </a>
     </div>
  </div>
</template>

<script>
export default {
    props : {
        recommend : {
            type : Array
        }
    }
}
</script>

<style scoped>
    .recommend{
      display: flex;
      justify-content: space-between;
      text-align: center;
      padding: 20px 0 30px;
      border-bottom:8px solid #ccc
    }
    .recommend img{
        width: 75px;
        margin-bottom: 14px
    }
</style>