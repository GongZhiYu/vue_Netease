<template>
  <div>
    <div>
      <div style="height: 44px;" class="hdWraper">
        <div class="m-hd">
         <div class="m-topBar">
           <div class="bd">
             <div class="row">
               <a href="" class="u-icon u-icon-home"></a>
               <a href=""><i class="logo u-icon u-icon-logo"></i></a>
               <div class="right">
                 <a href="" class="search">
                   <li class="u-icon u-icon-search1"></li>
                 </a>
                 <a href="" class="cart">
                   <li class="u-icon u-icon-cart"></li>
                 </a>
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
      <div class="loginTypesWrap">
        <div class="m-loginTypes">
          <div class="cont">
            <div class="logoWrap">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
            </div>
            <div class="btnWrap">
              <div class="w-button w-button-xl w-button-block">
                <i class="u-icon u-icon-loginPhone"></i>
                <span>手机号码登录</span>
              </div>
            </div>
          </div>
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
  .m-hd {
    position: fixed!important;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
  }
  .m-topBar, .m-topBar .bd {
    position: relative;
  }
  .m-topBar .bd {
    height: 1.16rem;
    background-color: #fafafa;
  }
  .m-topBar .bd .row {
    z-index: 1;
    width: 10rem;
    margin: auto;
    overflow: hidden;
    position: relative;
    padding: 0 .21333rem 0 .32rem;
    box-sizing: border-box
    height: 1.17333rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .m-topBar .bd:after{
    position: absolute;
    background-color: #d9d9d9;
    width: 100%;
    height: 1px;
    transform-origin: 50% 100% 0;
    bottom: 0;
  }
  .u-icon-home {
    width: .64rem;
    height: .58667rem;
    display: inline-block;
    vertical-align: middle;
    background url("./images/zhu.png") no-repeat
    background-size: 100% 100%
  }
   .logo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 2.29333rem;
    height: .72rem;
    background-image url("images/logo.png")
    background-repeat no-repeat
    background-size: 100% 100%
    display: inline-block;
    vertical-align: middle;

  }
  .m-topBar .bd .row .right {
    margin-left: auto;
    margin-right: .06667rem;
  }
  .m-topBar .bd .row .search {
    margin-right: .26667rem;
  }
  .m-topBar .bd .row .search .u-icon-search1 {
    position: relative;
    bottom: 0;
  }
  .u-icon-search1 {
    width: .64rem;
    height: .58667rem;
    background-position: 0 -4.74667rem;
    display: inline-block;
    vertical-align: middle;
    background url("./images/search.png") no-repeat
    background-size: 100% 100%
  }
  .u-icon-cart {
    width: .64rem;
    height: .58667rem;
    background-position: 0 0;
    display: inline-block;
    vertical-align: middle;
    background url("./images/cart.png") no-repeat
    background-size: 100% 100%
  }
  .m-loginTypes {
    position: relative;
    height: 100%;
    background: #F2F5F4;
    clearFix()
  }
  .m-loginTypes .logoWrap {
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 2.13333rem;
  }
  .m-loginTypes .logoWrap img {
    width: 3.57333rem;
    height: 1.2rem;
  }
  .m-loginTypes .btnWrap {
    padding: 0 .53333rem;
    margin-bottom: 2.73333rem;
  }
  .m-loginTypes .btnWrap .w-button {
    margin-bottom: .42667rem;
  }
  .m-loginTypes .btnWrap .u-icon {
    margin-right: .21333rem;
    position: relative;
    top: -.02667rem;
  }
  .w-button-xl{
    height: 1.25333rem;
    line-height: 1.25333rem;
     }

  .w-button{
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    color: #fff;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    overflow: hidden;
  }


</style>
