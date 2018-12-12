<template>
  <div class="search">
    <header class="header-wrap">
      <div class="header-content">
        <div class="inp">
          <i class="icon"></i>
          <input type="text" placeholder="请输入" v-model="keyWord" @keyup.enter="getShopList">
        </div>
        <div class="cancel">
          <span class="text" @click="cancel">取消</span>
        </div>
      </div>
    </header>
    <div class="list-content">
      <ul class="list">
        <li class="item" v-for="(item,index) in inputs" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        keyWord: '',
      }
    },
    computed: {
      ...mapState(['inputs'])
    },
    methods: {
      cancel() {
        this.$router.back()
      },
    },
    watch: {
      keyWord(value) {
        const url = '/xhr/search/searchAutoComplete.json';
        this.$store.dispatch('getinputs', {url, keywordPrefix: value})
      }
    }

  }
</script>


<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .search
    .header-wrap
      bottom-border-1px(#d9d9d9)
      background-color white
      height 0.87rem
      position fixed
      left 0
      top 0
      z-index 1
      .header-content
        z-index: 1;
        width: 6.9rem
        margin: auto;
        overflow: hidden;
        position: relative;
        padding: 0 0.3rem
        height: 0.87rem
        display: flex;
        align-items: center;
        justify-content: space-between;
        .inp
          padding-top 0
          padding-left .2rem
          padding-bottom 0
          border 0
          background-color #f4f4f4
          height .56rem
          border-radius 2px
          display flex
          align-items center
          justify-content space-between
          flex 1
          .icon
            width .27rem
            height .27rem
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
            background-size 100% 100%
          input
            padding-left 0.2rem
            flex 1
            outline none
            background-color transparent
        .cancel
          margin-left .3rem

      .nav-wrap
        width 100%
        height 0.8rem
        .nav
          width 100%
          height 100%
          display flex
          border-bottom 1px solid #d9d9d9
          flex-flow row nowrap
          background-color white
          .item
            flex-grow 1
            height 100%
            line-height 0.8rem
            text-align center
    .list-content
      margin-top .87rem
      .list
        display block
        padding-left .3rem
        background-color #fff
        .item
          bottom-border-1px(#d9d9d9)
          height 0.9rem
          line-height 0.9rem
    .shop-content
      margin-top 1.9rem
      .content
        .show-list
          clearFix()
        .item
          float left
          position relative
          width 3.45rem
          padding 0 .1rem .3rem .2rem
          overflow hidden
          background-color #fff
          &:nth-child(2n)
            padding-left 0.1rem
          .img-wrap
            width 100%
            height 3.45rem
            overflow hidden
            img
              position absolute
              display block
              height 3.45rem
              border-radius .05333rem .05333rem 0 0
              background-color #f4f4f4
          .dec
            background #F8E4CC
            height .36rem
            padding 0.06rem .1rem
            font-size .24rem
            line-height .36rem
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            .dec-text
              zoom 1
          .name
            margin-top 0.16rem
            font-size .27rem
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
            color #333
            .name-text
              zoom 1
          .price
            margin-top 0.16rem
            .new
              font-size .32rem
              color rgb(180, 40, 45)
            .old
              font-size .24rem
              color rgb(153, 153, 153)
          .status
            margin-bottom .05rem
            margin-top 0.16rem
            color #B4282D
            background rgba(255, 255, 255, .9)
            border-radius .02667rem
            .status-text
              font-size .24rem
              &.on
                border 1px solid #B4282D
</style>
