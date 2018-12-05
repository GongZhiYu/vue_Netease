<template>
  <div class="layout">
    <div class="headers">
      <div class="header">
        <div class="line">
          <div class="ipt">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共19914款好物</span>
          </div>
        </div>
      </div>
    </div>

    <div class="main">
        <div class="main-left">
          <ul>
            <li class="item active"><a href="javascript:;">12.12专区</a></li>
            <li class="item"><a href="javascript:;">冬季专区</a></li>
            <li class="item"><a href="javascript:;">爆品专区</a></li>
            <li class="item"><a href="javascript:;">新品专区</a></li>
            <li class="item"><a href="javascript:;">居家</a></li>
            <li class="item"><a href="javascript:;">鞋包配饰</a></li>
            <li class="item"><a href="javascript:;">服装</a></li>
            <li class="item"><a href="javascript:;">电器</a></li>
            <li class="item"><a href="javascript:;">洗护</a></li>
            <li class="item"><a href="javascript:;">饮食</a></li>
            <li class="item"><a href="javascript:;">餐厨</a></li>
            <li class="item"><a href="javascript:;">婴童</a></li>
            <li class="item"><a href="javascript:;">文体</a></li>
          </ul>
        </div>


      <div class="main-right">
        <div class="main-right-img">
          <img src="http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg" alt="">
        </div>
     <!--   <h3>商品分类</h3>-->
        <div class="main-right-cate">
          <ul>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png" alt="">
                <p>三石福利价</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    components:{
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .layout{
    width 100%
  }
  .headers{
    height 87px

  }
  .header{
    width:100%
    height 87px
    border-bottom 1px solid #d9d9d9
    background-color white
    position fixed
    z-index: 10;
  }
  .line{
    z-index: 5;
    width: 100%;
    height 87px

  }
  .ipt{
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: .74667rem;
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    width:90%
    margin 0.2rem auto
    box-sizing: border-box

  }
  .ipt .icon {
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .37333rem;
    height: .37333rem;
    margin-right: .13333rem;
  }
  .ipt .placeholder {
    color: #666;
  }
  .main {
  }

  .main .main-left {
    bottom: 0;
    z-index: 4;
    width: 2.16rem;
    background-color: #fff;
    float left
  }
  .main .main-left ul{
    position rotation
  }
  .item{
      display: block;
      color: #ab2b2b;
      font-size: .37333rem;
      line-height: .66667rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-top: .53333rem;
      width: 100%;
      height: .66667rem;
      text-align: center;
      border: none;
    }
  .item.active:before {
    content: ' ';
    position: absolute;
    top: 1.5rem;
    left: 0;
    bottom: 0;
    height 0.8rem
    width: .08rem;
    background-color: #ab2b2b;
  }
  .main-right{
    width 528px
    margin-left: 2.16rem;
    padding: .4rem .4rem .28rem;
  }
  .main-right-img{
    position: relative;
    width:100%;
    height 192px
    margin-bottom: .42667rem;
    background: center no-repeat #f4f4f4;
    background-size: cover;
    border-radius: 4px;
  }
  .main-right-img img{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    color: #fff;
    width:100%;
    height 192px
  }

  .main-right-cate{
    width:100%;
    box-sizing: border-box

  }
  .main-right-cate ul{
    display nowrap
    flex-wrap: wrap
    flex-direction: row;
    justify-content:space-between
    align-content: flex-end
    box-sizing: border-box
  }
  .main-right-cate li{
    display: inline-block;
    margin-right: .35333rem;
    margin-bottom .5rem
    font-size: 0;
    vertical-align: top;
  }
  .main-right-cate li a{
    display inline-block
    height: 1.92rem;
  }
  .main-right-cate li a img{
    display: block;
    background: #fff;
    height: 100%;
  }
  .main-right-cate li a p{
    height: .96rem;
    font-size: .32rem;
    text-align: center;
    line-height: .48rem;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

</style>
