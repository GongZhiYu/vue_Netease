<template>
  <div class="g-row m-index">
    <div class="m-indexHd">
      <div class="line">
        <a href="javascript:;" class="logo"></a>
        <div class="m-topSearchIpt ipt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共19914款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="tabWrap">
        <div class="m-tabs   scroll">
          <header>
            <div class="inner" style="position:relative;height:100%;width:100%;overflow:hidden;">
              <div class="list">
                <div class="tab active">
                    <span class="txt">
                      推荐
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      居家
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      鞋包配饰
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      服装
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      电器
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      洗护
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      饮食
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      餐厨
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      婴童
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      文体
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      特色区
                    </span>
                </div>

              </div>
            </div>
          </header>
        </div>
      </div>
      <div>
      </div>


      <ul class="bottomHeader">
        <li>

        </li>
      </ul>
    </div>
    <div class="slideWarp">
      <div class="m-slide m-indexSlide">
        <div class="slide-con">
          <div class="swiper-container common-swiper-container swiper-container-horizontal">
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-slide-active">
                <img
                  src="https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
              <div class="swiper-slide ">
                <img
                  src="https://yanxuan.nosdn.127.net/1d66a50452354fa28b045853c078cbe3.jpg?imageView&quality=75&thumbnail=750x0"
                  alt="">
              </div>
              <div class="swiper-slide ">
                <img
                  src="https://yanxuan.nosdn.127.net/fda101d5e6beeb56d0ff8245139ff30b.jpg?imageView&quality=75&thumbnail=750x0"
                  alt="">
              </div>
              <div class="swiper-slide ">
                <img
                  src="https://yanxuan.nosdn.127.net/03d8a81e7be4bb1a8d44dc2118f944a4.jpg?imageView&quality=75&thumbnail=750x0"
                  alt="">
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/e0c3e253dcfdb170bda823ac5b71247e.jpg?imageView&quality=75&thumbnail=750x0"
                  alt="">
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/018b7902a3fb1e48dbdd8b7bb42674aa.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YTRhMmIzYmI1Y2I1YTc4ZGM5MmE3Nzk2NzAwYTFiNjgucG5n|imageView&quality=75&thumbnail=750x0"
                  alt="">
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/a209d8ec4efb502140d086773cd04c76.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YTRhMmIzYmI1Y2I1YTc4ZGM5MmE3Nzk2NzAwYTFiNjgucG5n|imageView&quality=75&thumbnail=750x0"
                  alt="">
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/5a2289149a59ca24ef2256674542e4cb.jpg?imageView&quality=75&thumbnail=750x0"
                  alt="">
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0"
                  alt="">
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/1d66a50452354fa28b045853c078cbe3.jpg?imageView&quality=75&thumbnail=750x0"
                  alt="">
              </div>
            </div>

            <div
              class="swiper-pagination common-swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .m-indexHd {
    background-color #fff
    border-bottom 1px solid #d9d9d9
  }

  .m-indexHd .line {
    position relative
    z-index 2
    display flex
    flex-flow row nowrap
    -webkit-box-align center
    align-items center
    background #fff
    padding .21333rem .4rem
  }

  .m-indexHd .line .logo {
    width 1.84rem
    height .53333rem
    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
    display inline-block
    margin-right .26667rem
    background-size cover
    background-position center
  }

  .m-indexHd .line > .ipt {
    -webkit-box-flex 1
    -webkit-flex-grow 1
    flex-grow 1
  }

  .m-topSearchIpt {
    display flex
    flex-flow row nowrap
    -webkit-box-align center
    align-items center
    -webkit-box-pack center
    justify-content center
    height .74667rem
    font-size .37333rem
    background-color #ededed
    border-radius .10667rem
  }

  .m-topSearchIpt .icon {
    display inline-block
    vertical-align middle
    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
    background-repeat no-repeat
    background-size 100% 100%
    width .37333rem
    height .37333rem
    margin-right .13333rem
  }

  .m-topSearchIpt .placeholder {
    color #666
  }

  .m-indexHd .line .loginBtn {
    width .98667rem
    height .53333rem
    line-height .53333rem
    text-align center
    color #b4282d
    border 0.03rem solid #b4282d
    border-radius .10667rem
    margin-left .21333rem
  }

  .m-indexHd .tabWrap {
    position relative
    z-index 2
    background #fff
    margin-top -.01333rem
  }

  .m-indexHd .tabWrap .m-tabs {
    padding-right 1.33333rem ////
    box-sizing: border-box //ie盒子

  }

  .m-tabs {
    width 100%
  }

  .m-tabs > header {
    display flex
    flex-flow row nowrap
    background-color #fff
    position relative
  }

  .m-tabs.scroll > header .inner {
    display flex
    flex-flow row nowrap
  }

  .m-tabs.scroll > header .list {
    display flex
    flex-flow row nowrap
    flex-shrink 0
    padding 0 .4rem
    background #fff
    overflow hidden /* transition-timing-function cubic-bezier(0.1, 0.57, 0.1, 1)
    transition-duration 0ms
    transform translate(-58px, 0px) translateZ(0px)*/
  }

  .m-tabs > header .tab.active {
    color #b4282d
  }

  .m-tabs > header .tab.active .txt:after {
    content ' '
    position absolute
    left 0
    bottom 0
    width 100%
    height .05333rem
    background-color #b4282d
  }

  .m-tabs.scroll > header .tab {
    flex-shrink 0
    position relative
  }

  .m-tabs > header .tab {
    display flex
    flex-flow row nowrap
    -webkit-box-align center
    align-items center
    -webkit-box-pack center
    justify-content center
    z-index 1
    text-align cente
  }

  .m-tabs > header .tab.active .txt {
    position relative
    color #b4282d
  }

  .m-tabs > header .tab .txt {
    display inline-block
    padding 0 .21333rem
    line-height .8rem
    font-size .37333rem
    text-align center
  }

  .slideWarp {
    height 4.93333rem
  }

  .m-indexSlide.m-slide {
    padding-top 4.93333rem !important
  }

  .m-slide {
    position relative
    width 100%
    overflow hidden
  }

  .m-slide .slide-con {
    position absolute
    left 0
    top 0
  }

  .m-slide .slide-con, .m-slide .swiper-container {
    height 100%
    width 100%
  }

  .swiper-container {
    margin-left auto
    margin-right auto
    position relative
    overflow hidden
    z-index 1
  }

  .swiper-wrapper {
    z-index 1
    display flex
    box-sizing content-box
    width 100%
    height 100%
    position relative
  }

  .swiper-slide {
    width 750px
    flex-shrink 0
    height 100%
  }

  .m-indexSlide.m-slide .swiper-container .swiper-slide, .slideWarp {
    position relative
  }

  .m-indexSlide.m-slide .swiper-container .swiper-slide > img {
    width 100%
    height auto
    position absolute
    left 0
    top 50%
    transform translateY(-50%) //////
  }

  .m-slide .swiper-container-horizontal > .swiper-pagination {
    bottom .4rem
    width 100%
  }

  .swiper-pagination {
    position absolute
    text-align center
    z-index 10
  }

  .m-slide .swiper-container-horizontal > .swiper-pagination .swiper-pagination-bullet {
    margin 0 .13333rem 0 0
  }

  .m-slide .swiper-pagination-bullet {
    width .53333rem
    height .05333rem
    display inline-block
    background rgba(255,255,255,0.5)
  }
  .m-slide .swiper-pagination-bullet-active {
    opacity 1
    background #fff
    border-radius 0
  }


</style>
