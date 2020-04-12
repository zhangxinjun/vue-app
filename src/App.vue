<template>
  <div id="app">
   
    <router-view/>
    <main-table></main-table>
  </div>
</template>
<script>
import MainTable from "common/content/mainTable.vue"
export default {
  components:{
    MainTable
  }
}
</script>
<style>
/* 引入bese清除默认样式 */
@import "assets/css/base.css"
</style>
