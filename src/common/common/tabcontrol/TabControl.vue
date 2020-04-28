<template>
  <div class="tabControl">
    <div 
    :class="['item',{'active' : numControl == index}]" 
    v-for="(item,index) in tabControl" 
    :key="index" 
    @click="controlClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabControl: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      numControl: 0
    };
  },
  methods: {
    controlClick (index) {
      this.numControl = index;
      // 子父通信将当前点击的tablecontrol的index传出去
      this.$emit("tableClick",index)
    }
  }
};
</script>

<style scoped>
.tabControl {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
}
.item {
  flex: 1;
}
.item.active{
  color: #ff8200
}
.item span {
  padding: 5px;
}
.item.active span{
  border-bottom: 2px solid #ff8200
}
</style>