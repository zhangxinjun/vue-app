<template>
  <div class="wrap" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 完整引入better-scroll
import BScroll from "better-scroll";
export default {
  props: {
    probeType : {
      type : Number,
      default : 0
    }
  },
  data () {
    return {
      bs: ""
    };
  },
  // 在mounted生命周期内才能获取元素的dom对象，在此生命周期内dom挂载已经完成
  mounted () {
    // 实例化Scroll对象
    this.bs = new BScroll(this.$refs.wrapper, {
      //  BetterScroll 默认会阻止浏览器的原生 click 事件。当设置为 true，BetterScroll 会派发一个 click 事件
      click: true,
      //  默认值0，可选值1,2,3；
      // 1：不会实时监听滚动位置，和0效果一样
      // 2：会实时监听滚动位置，但是手指松开的时候的惯性滚动的时候的位置不会监听
      // 3：会实时监听滚动位置，手指松开时的惯性滚动的时候的位置也会监听
      // 根据使用时传递过来的数字决定是否实时监听
      probeType: this.probeType
    });
    // 获取实时滚动位置 为了保证this应使用箭头函数，普通函数this会出问题
   this.bs.on ("scroll",(pos) => {
      this.$emit("scrollPosition",pos)
    })
  }
};
</script>

<style scoped>
</style>