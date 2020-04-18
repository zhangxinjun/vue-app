<template>
  <div>
     <NavBar class="navbar">
       <div slot="center">这是home组件的导航</div>
     </NavBar>
  </div>
</template>

<script>
import NavBar from "common/common/navbar/NavBar"
export default {
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .navbar{
    color: #fff;
    background: #ff0088
  }
</style>