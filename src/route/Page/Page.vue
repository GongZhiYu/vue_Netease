<template>
  <div class="g-row m-index">
    <div class="header">
      <div class="m-indexHd">
        <div class="line">
          <a href="javascript:;" class="logo"></a>
          <div class="m-topSearchIpt ipt" @click="sos">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共19914款好物</span>
          </div>
          <div class="loginBtn" @click="register">登录</div>
        </div>
        <div class="tabWrap">
          <div class="m-tabs   scroll">
            <header>
              <div class="inner pic-wrapper" style="position:relative;height:100%;width:100%;overflow:hidden;">
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
          <div class="toggleWrap">
            <div class="linear"></div>
            <div class="toggle">
              <div class="icon"></div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>

    </div>
    <lbt :focusList="focusList"/>
    <div class="m-indexServicePolicy newUser active">
      <ul class="g-grow">
        <li class="item" v-for="(desclist,index) in policyDescList" :key="index">
          <a href="javascript:;">
            <i class="u-icon u-icon-servicePolicy-index"
               :style="{backgroundImage: `url(${desclist.icon})`}"></i>
            <span class="text">{{desclist.desc}}</span>
          </a>
        </li>

      </ul>
    </div>
    <div class="m-kingKongModule">
      <div class="m-carousel ">
        <ul>
          <li v-for="(king,index) in kingKongModule.kingKongList" :key="index">
            <img :src="king.picUrl">
            <span>{{king.text}}</span>
          </li>

        </ul>
      </div>
      <div class="m-indexBigPromotionModule"
           :style="{backgroundImage: `url(${bigPromotionModule.backgroundUrl})`}">
        <div>
          <a href="javascript:;" class="promItem" style="width:100%;height:100%;"
             v-if="bigPromotionModule.backgroundUrl"><img
            :src="bigPromotionModule.bigPromotionList[0].data.contents[0].picUrl"></a>
        </div>
        <div
          style="width:10rem;height:5.226666666666667rem;background:url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_496_750_588);background-size:100% 100%;">
          <div class="m-lazyload img m-lazyload-loaded">
            <img :src="bigPromotionModule.bigPromotionList[1].data.contents[0].picUrl" v-if="bigPromotionModule.backgroundUrl"
                 style="width: 187px;height: 196px;float:left;">
            <img :src="bigPromotionModule.bigPromotionList[1].data.contents[1].picUrl" v-if="bigPromotionModule.backgroundUrl"
                 style="width: 187px;height: 98px;float:right;">
            <img :src="bigPromotionModule.bigPromotionList[1].data.contents[2].picUrl" v-if="bigPromotionModule.backgroundUrl"
                 style="width: 187px;height: 98px;">
          </div>
        </div>
        <div
          style="width:10rem;height:2.7111111111111112rem;background:url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1084_750_305);background-size:100% 100%;">
          <img :src="bigPromotionModule.bigPromotionList[2].data.contents[0].picUrl" v-if="bigPromotionModule.backgroundUrl"
               style="width: 187px;height: 98px;float:left;">
          <img :src="bigPromotionModule.bigPromotionList[2].data.contents[1].picUrl" v-if="bigPromotionModule.backgroundUrl"
               style="width: 187px;height: 98px;float:left;">
        </div>
        <div
          style="width: 100%; height: 0.133333rem; background: url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1389_750_15) 0% 0% / 100% 100%;"></div>
      </div>
    </div>
    <div class="m-freshmanModule m-indexFloor" style="width:100%">
      <div class="moduleTitle">
        <span>新人专享礼</span>
      </div>
      <div class="content">
        <a href="javascript:;" class="left">
          <div class="name">新人专享礼包</div>
          <div class="imgWrap">
            <div class="m-lazyload img m-lazyload-loaded">
              <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
            </div>
            <div class="animate"></div>
          </div>
        </a>
        <div class="right">
          <div class="module1">
            <a href="javascript:;" class="m-activityItem" style="background-image:url();background-size:100% 100%;">
              <div class="picWrap">
                <div class="m-lazyload pic m-lazyload-loaded">
                  <img src="http://yanxuan.nosdn.127.net/21712dc8c9b39049c0731613905ca56a.png" alt="">
                </div>
                <div class="discount">
                  <div class="line1"></div>
                  <div class="line2"></div>
                </div>
              </div>
              <div class="cnt">
                <div class="title">福利社</div>
                <div class="subTitle">今日特价</div>
              </div>
            </a>
          </div>
          <div class="module2">
            <a href="javascript:;" class="m-activityItem"
               style="background-image:url(undefined);background-size:100% 100%;">
              <div class="picWrap">
                <div class="m-lazyload pic m-lazyload-loaded">
                  <img src="http://yanxuan.nosdn.127.net/c95a4d1daa62d7a9004208752a1a2098.png">
                </div>
              </div>
              <div class="cnt">
                <div class="title">新人拼团</div>
                <div class="subTitle"></div>
                <div class="tag">1元起包邮</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="private">
      <div class="private-title">
        <div class="left"><span>私人订制</span></div>
      </div>
      <div class="private-lbt">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a1.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>天然成分足贴 祛除湿气</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥58</span>
                      </span>
                    </span>
                  </div>
                  <div class="specification">
                    <div>倭</div>
                    <div>寇</div>
                    <div>制</div>
                    <div>造</div>
                  </div>
                </a>
              </li>
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a2.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>30包 谷风一木小卷纸囤...</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥76.9</span>
                      </span>
                    </span>
                  </div>
                </a>
              </li>
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a3.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>日式和风超声波香薰机</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥168</span>
                      </span>
                    </span>
                  </div>
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a4.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>3双/5双装 女式日系罗...</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥36.9</span>
                      </span>
                    </span>
                  </div>
                  <div class="specification">
                    <div>5</div>
                    <div>色</div>
                    <div>可</div>
                    <div>选</div>
                  </div>
                </a>
              </li>
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a5.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>网易智造T300无线吸尘...</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥1229</span>
                      </span>
                    </span>
                  </div>
                </a>
              </li>
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a6.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>头层牛皮制作，自动扣设计更方便</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥109</span>
                      </span>
                    </span>
                  </div>
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a7.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>即食燕窝 70克*6瓶 ...</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥258</span>
                      </span>
                    </span>
                  </div>
                </a>
              </li>
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a8.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>泰国制造 天然乳胶枕 护...</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥199</span>
                      </span>
                    </span>
                  </div>
                  <div class="specification">
                    <div>泰</div>
                    <div>国</div>
                    <div>制</div>
                    <div>造</div>
                  </div>
                </a>
              </li>
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a9.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>懒人抹布</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥13.99</span>
                      </span>
                    </span>
                  </div>
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a10.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>每日坚果</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥29.9</span>
                      </span>
                    </span>
                  </div>
                  <div class="specification">
                    <div>2</div>
                    <div>个</div>
                    <div>规</div>
                    <div>格</div>
                  </div>
                </a>
              </li>
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a11.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>严选礼品卡 100元面值</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥100</span>
                      </span>
                    </span>
                  </div>
                </a>
              </li>
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="tupian">
                    <div><img src="./images/a/a12.png" alt="xxx"></div>
                  </div>
                  <div class="name">
                    <span>网易智造双光源记忆护目灯</span>
                    <span class="price">
                      <span class="priceInner">
                        <span>￥199</span>
                      </span>
                    </span>
                  </div>
                  <div class="specification">
                    <div>2</div>
                    <div>色</div>
                    <div>可</div>
                    <div>选</div>
                  </div>
                </a>
              </li>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import lbt from '../../components/LBT/LBT.vue'


  export default {
    computed: {
      ...mapState(['kingKongModule', 'bigPromotionModule', 'policyDescList', 'focusList'])
    },
    components: {
      lbt
    },

    mounted() {
      //异步获得首页十个导航
      this.$store.dispatch('getking')
      //异步获取首页大的动图以及下面的小图
      this.$store.dispatch('getbig')
      //异步获得首页三个low
      this.$store.dispatch('getpolicy')
      //异步获得首页轮播图
      this.$store.dispatch('getfocus')

      // 必须在列表数据显示之后创建才能正常形成轮播
      new BScroll('.pic-wrapper', {
        click: true,
        scrollX: true,  //水平滑动
      })
    },
    methods: {
      //跳转登录路由
      register() {
        this.$router.push('/personage')
      },
      //跳转搜索
      sos(){
        this.$router.push('/sos')
      }
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .m-index {
    height 3000px
  }

  .header {
    height 148px
  }

  .m-indexHd {
    background-color #fff
    border-bottom 1px solid #d9d9d9
    z-index 1111
    box-sizing: border-box
    position fixed !important
    left 0
    top: 0
    width: 100%
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

  .m-indexHd .tabWrap .toggleWrap {
    display flex
    flex-grow 0
    -webkit-box-align center
    align-items center
    -webkit-box-pack center
    justify-content center
    position absolute
    top 0
    right 0
  }

  .m-indexHd .tabWrap .toggleWrap .linear {
    width .8rem
    height .8rem
    background-image linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%)
  }

  .m-indexHd .tabWrap .toggleWrap .toggle {
    width 1.33333rem
    height .8rem
    text-align center
    background #fff
  }

  .m-indexHd .tabWrap .toggleWrap .toggle .icon {
    margin-top .2rem
    display inline-block
    vertical-align middle
    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png)
    background-repeat no-repeat
    background-size 100% 100%
    width .4rem
    height .4rem
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
    clearFix()
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

  .m-indexServicePolicy.active {
    background #FFEDDB
  }

  .m-indexServicePolicy .g-grow {
    width 100%
    height .96rem
    padding 0 .4rem ///////
    display flex
    flex-flow row nowrap
    -webkit-box-align center
    align-items center
    zoom 1
    box-sizing: border-box //ie盒子

  }

  .m-indexServicePolicy .item {
    -webkit-box-flex 1
    flex 1
    float left
  }

  .m-indexServicePolicy .item a {
    display inline-block
    vertical-align middle
    height .42667rem
  }

  .u-icon-servicePolicy-index {
    display inline-block
    vertical-align middle
    background-repeat no-repeat
    background-size 100% 100%
    width .42667rem
    height .42667rem
  }

  .m-indexServicePolicy.active .text {
    color #B4282D
  }

  .m-indexServicePolicy .text {
    font-size .32rem
    margin-left .10667rem
    line-height .42667rem
    display inline-block
    vertical-align middle
  }

  .m-kingKongModule {
    width: 100%
    position relative
    clearFix()
  }

  .m-kingKongModule .m-carousel {
    position relative
    background #FFEDDB
    clearFix()
  }

  .m-kingKongModule .m-carousel ul {
    width: 100%;
    padding-bottom .69333rem
    float left
    box-sizing: border-box
  }

  .m-kingKongModule .m-carousel ul li {
    display block
    width 1.46667rem
    height 2.08rem
    float left
    margin .13333rem .26667rem 0
  }

  .m-kingKongModule .m-carousel ul li {
    float: left;
    text-align: center;
  }

  .m-kingKongModule .m-carousel ul li img {
    width: 110px;
    height: 110px;
  }

  .m-indexBigPromotionModule {
    width: 10rem;
    height: 4.408888888888889rem;
    clearFix()
  }

  .m-indexBigPromotionModule .promItem img {
    width: 100%;
    height: 100%;
  }

  .m-indexFloor {
    background-color #fff
  }

  .m-freshmanModule {
    background #fff
    clearFix()
  }

  .m-freshmanModule .moduleTitle {
    height 1.2rem
    width 100%
    line-height 1.2rem
    text-align center
    font-family PingFangSC-Regular
    font-size .42667rem
  }

  .m-freshmanModule .moduleTitle .txt {
    display: inline-block;
    position: relative;
  }

  .m-freshmanModule .moduleTitle .txt::after, .m-freshmanModule .moduleTitle .txt::before {
    content ''
    position absolute
    top .6rem
    width .32rem
    height .04rem
    background #333
    clearFix()

  }

  .m-freshmanModule .moduleTitle .txt::after, .m-freshmanModule .moduleTitle .txt::before {
    content: '';
    position: absolute;
    top: .6rem;
    width: .32rem;
    height: .04rem;
    background: #333;
  }

  .m-freshmanModule .content {
    padding-left: .4rem;
    overflow: hidden;
  }

  .m-freshmanModule .left {
    display: block;
    width: 4.57333rem;
    height: 5.78667rem;
    background: #F9E9CF;
    border-radius: .05333rem;
    margin-right: .05333rem;
    float: left;
    color: #333;
  }

  .m-freshmanModule .left .name {
    font-family: PingFangSC-Medium;
    font-size: .42667rem;
    padding: .4rem 0 0 .4rem;
  }

  .m-freshmanModule .left .imgWrap {
    margin: .66667rem auto;
    width: 3.04rem;
    height: 3.05333rem;
    position: relative;
  }

  .m-freshmanModule .left .imgWrap .img {
    width: 3.04rem;
    height: 3.05333rem;
  }

  .m-freshmanModule .left .imgWrap .img img {
    height: 100%;
  }

  .m-freshmanModule .right {
    float: left;
  }

  .m-freshmanModule .right .module1 {
    background: #FBE2D3;
    border-radius: 4px;
    width: 4.57333rem;
    height: 2.86667rem;
    margin-bottom: .05333rem;
  }

  .m-freshmanModule .m-activityItem {
    height: 2.86667rem;
  }

  .m-activityItem {
    display: block;
    color: #333;
    width: 4.57333rem;
    float: left;
    border-radius: .05333rem;
    margin: 0 .05333rem .05333rem 0;
    font-size: .32rem;
    padding: .26667rem 0 0 .4rem;
  }

  .m-freshmanModule .right .module1 .picWrap, .m-freshmanModule .right .module2 .picWrap {
    top: .26667rem;
    width: 2.66667rem;
    height: 2.66667rem;
  }

  .m-activityItem .picWrap, .m-activityItem .picWrap .pic {
    width: 2.66667rem;
    height: 2.66667rem;
  }

  .m-lazyload > img {
    width: 100%;
    height: auto;
  }

  .m-activityItem .picWrap .discount .line1 {
    font-size: .32rem;
  }

  .m-activityItem .picWrap .discount .line2 {
    font-size: .26667rem;
    margin-top: -.09333rem;
    text-decoration: line-through;
  }

  .m-activityItem, .m-activityItem .cnt {
    position: relative;
  }

  .m-activityItem .title {
    font-family: PingFangSC-Medium;
    font-size: .42667rem;
  }

  .m-activityItem .subTitle {
    color: #7F7F7F;
  }

  .m-freshmanModule .right .module2 {
    background: #FFECC2;
    border-radius: 4px;
    width: 4.57333rem;
    height: 2.86667rem;
  }

  .m-freshmanModule .m-activityItem {
    height: 2.86667rem;
  }

  .m-activityItem {
    display: block;
    color: #333;
    width: 4.57333rem;
    float: left;
    border-radius: .05333rem;
    margin: 0 .05333rem .05333rem 0;
    font-size: .32rem;
    padding: .26667rem 0 0 .4rem;
  }

  .m-activityItem .picWrap {
    position: absolute;
    right: 0;
  }

  .m-lazyload > img {
    width: 100%;
    height: auto;
  }

  .m-activityItem .picWrap .discount .line1 {
    font-size: .32rem;
  }

  .m-activityItem .picWrap .discount .line2 {
    font-size: .26667rem;
    margin-top: -.09333rem;
    text-decoration: line-through;
  }

  .m-activityItem, .m-activityItem .cnt {
    position: relative;
  }

  .m-activityItem .title {
    font-family: PingFangSC-Medium;
    font-size: .42667rem;
  }

  .m-activityItem .subTitle {
    color: #7F7F7F;
  }

  .m-activityItem .tag {
    position: relative;
    display: inline-block;
    padding: 0 .13333rem;
    height: .42667rem;
    background: #CBB693;
    border-radius: .05333rem;
    color: #fff;
    font-size: .29333rem;
    line-height: .42667rem;
    text-align: center;
  }

  .private {
    margin-bottom: .26667rem;
    background-color: #fff
    .private-title {
      width: 100%;
      padding: 0 .4rem;
      box-sizing: border-box
      background: #fff;
      overflow: hidden;
      .left {
        float: left;
        font-size: .42667rem;
        font-family: PingFangSC-Regular;
      }
    }
    .private-lbt {
      position: relative
      background-color: #fff
      .swiper-container {
        padding-bottom: .8rem;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        .swiper-wrapper {
          position: relative;
          width: 100%;
          z-index: 1;
          height: auto;
          display: flex;
          box-sizing: content-box;
          .swiper-slide {
            height: auto;
            width: 750px;
            flex-shrink: 0;
            position: relative;
            .item {
              padding: 0 !important;
              margin-left: .26667rem;
              width: 2.88rem;
              float: left;
              .good {
                display block
                color #333
                .tupian {
                  background-color: #f5f5f5
                  div {
                    margin-bottom: .16rem;
                    width: 2.88rem;
                    height: 2.88rem;
                    background-color: #f5f5f5
                    img {
                      background-color: #f5f5f5;
                      top: 0;
                      left: 0;
                      width: 2.88rem;
                      height: 2.88rem;
                      display block
                    }
                  }
                }
                .name {
                  margin-top: 0;
                  margin-bottom: .13333rem;
                  padding: 0 .13333rem;
                  font-size: .32rem;
                  overflow: visible;
                  white-space: normal;
                  line-height: .48rem;
                  .price {
                    color #b4282d
                  }
                }
                .specification {
                  position: absolute;
                  border-width: .5px;
                  border-radius: .02667rem;
                  border-style: solid;
                  border-color: #b4a078;
                  width: .42667rem;
                  background: #f4f4f4;
                  top: 0;
                  margin-top: .13333rem;
                  margin-left: .13333rem;
                  padding: .16rem 0;
                  color: #b4a078;
                  display: flex;
                  -webkit-box-direction: normal;
                  -webkit-box-orient: vertical;
                  flex-direction: column;
                  -webkit-box-pack: center;
                  justify-content: center;
                  div {
                    font-size: .26667rem;
                    text-align: center;
                    line-height: 1;
                  }
                }
              }
            }
          }
        }
      }
    }
  }


</style>
