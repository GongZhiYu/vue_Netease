<!--底部组件-->
<template>
  <footer class="footer_guide border-1px">
    <!--动态class:什么时候用对象方式? 类名确定, 只是不确定有没有-->
    <router-link class="guide_item" :class="{on: $route.path==='/page'}" to="/page">
    <span class="item_icon">
      <i class="iconfont icon-icon-test"></i>
    </span>
      <span>首页</span>
    </router-link>
    <router-link class="guide_item" :class="{on:$route.path==='/classify'}" to="/classify">
    <span class="item_icon">
      <i class="iconfont icon-fenlei"></i>
    </span>
      <span>分类</span>
    </router-link>
    <router-link  class="guide_item" :class="{on:$route.path==='/things'}" to="/things">
    <span class="item_icon">
      <i class="iconfont icon-shiwu"></i>
    </span>
      <span>识物</span>
    </router-link>
    <router-link  class="guide_item" :class="{on:$route.path==='/trolley'}" to="/trolley" >
    <span class="item_icon">
      <i class="iconfont icon-gouwuchekong"></i>
    </span>
      <span>购物车</span>
    </router-link>
    <router-link  class="guide_item" :class="{on:$route.path==='/personage'}" to="/personage">
    <span class="item_icon">
      <i class="iconfont icon-me"></i>
    </span>
      <span>个人</span>
    </router-link>
  </footer>
</template>

<script>
  export default {
    name: "footer-guide",
    methods: {
      goto(path) {
        //编程式路由导航
        this.$router.replace(path)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #E43929
      span
        font-size 28px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 56px
          color #E43929
          font-weight boid
</style>


