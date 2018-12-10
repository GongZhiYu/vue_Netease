<!--手机登陆-->
<template>
  <div style="height: 44px;" class="hdWraper">
    <div class="m-hd">
      <div class="m-topBar">
        <div class="bd">
          <div class="row">
            <a class="u-icon u-icon-home" @click="homeage"></a>
            <a href="javascript:;"><i class="logo u-icon u-icon-logo"></i></a>
            <div class="right">
              <a href="javascript:;" class="search">
                <li class="u-icon u-icon-search1"></li>
              </a>
              <a href="javascript:;" class="cart">
                <li class="u-icon u-icon-cart" @click="shopping"></li>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="loginWrap loginWrap-1">
        <div class="view" style="display: block;">
          <div class="logo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="ursBox ursBox-1" style="width: 375px; height: 286px;">
            <div class="m-cnt" style="  width: 375px; height: 286px">
              <form clas="login-form" style="width: 90%; padding: 0 0.555556rem;">
                <div class="m-container">
                  <div class="inputbox">
                    <div class="u-input box">
                      <input type="text" class="dlemail" placeholder="请输入手机号" maxlength="11" v-model="phone">
                      <button class="get_verification" :disabled="!isRightPhone || computeTime>0"></button>
                    </div>
                  </div>
                  <div class="m-pccnt f-cb">
                    <div class="m-pcbox" style="z-index: 1111">
                      <div class=" m-mb m-pc f-fl">
                        <div class="u-input">
                          <input type="text" placeholder="请输入短信验证码" class="j-inputtext pcin" v-model="code">
                          <button class="get_verification"></button>

                        </div>
                      </div>
                      <div class="pcbtn f-fl" @click.prevent="sendCode"> <!--prevent阻止默认行为 不让他提交-->
                        <a href="javascript:;" class="tabfocus getsmscode">{{computeTime>0?`已发送(${computeTime}s)`:'获取验证码'}}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="loginTypesWrap">
                  <div class="m-loginTypes">
                    <div class="cont">
                      <div class="logoWrap">
                      </div>
                      <div class="btnWrap">
                        <div class="w-button w-button-xl w-button-block" @click.prevent="login">
                          <i class="u-icon u-icon-loginPhone"></i>
                          <span>登录</span>
                        </div>

                        <div class="w-button w-button-xl w-button-block w-button-ghostRed" @click="way">
                          <span>其他登陆方式登录</span>
                        </div>
                        <div class="btn">
                          <span>注册账号</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import {Toast, MessageBox} from 'mint-ui';
  import {reqSms,reqmobilePhone} from '../../api'

  export default {
    data() {
      return {
        phone: "", //手机号
        code: "",//短信验证码
        computeTime: 0, // 倒计时剩余的时间(s)

      }
    },
    computed: {
      //phone是否是个正确的手机号
      isRightPhone() {
        return /^1\d{10}$/.test(this.phone) //test正则里面的方法  满足匹配为true
      }
    },
    methods: {
      //请求发送短信验证码
      async sendCode() {
        //开始倒计时
        this.computeTime = 60
        //启动循环定时器
        const dsq = setInterval(() => {
          //时间减1
          this.computeTime--
          //时间到停止
          if (this.computeTime <= 0) {
            this.computeTime = 0
            clearInterval(dsq)
          }
        }, 1000)
        //发送异步ajax请求
        const result = await reqSms(this.phone)  //在发送ajax请求 ,是异步的 所以要加await
        if (result.code === 0) {
          Toast('验证码发送成功')
        } else {
          this.computeTime = 0   //停止定时器
          MessageBox.alert('发送验证码失败');
        }
      },

      //登陆
      async login(){
        //1进行前台表单验证
         const {phone,code,computeTime,isRightPhone} =this
         let result
         if(!isRightPhone){
           return MessageBox.alert('手机号不正确');
         }else if (!/^\d{6}$/.test(code)){
           return MessageBox.alert('验证码必须是6位');
         }
         //发送登陆的请求
        result = await reqmobilePhone(phone, code) //在发送ajax请求 ,是异步的 所以要加await
        if(result.code !==0){
          //停止计时
          this.computeTime = 0
        }
        if (result.code === 0) {  //登录请求成功
          //保存user到state中
          const user = result.data
          this.$store.dispatch('saveUser', user)
          //跳转到个人页面
          this.$router.replace('/profile')
        } else {  //失败
          MessageBox.alert('登录请求失败');
        }
       },

      //跳转购物车路由
      shopping() {
        this.$router.push('/trolley')
      },
      //跳转首页路由
      homeage() {
        this.$router.push('/page')
      },
      way() {
        //跳转个人页面
        this.$router.push('/personage')
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .get_verification
    position absolute
    top 50%
    right 10px
    transform translateY(-50%)
    border 0
    color #ccc
    font-size 14px
    background transparent
    &.right_phone_number
      color black

  .m-hd {
    position: fixed !important;
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

  .m-topBar .bd:after {
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

  .row .logo {
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

  .loginWrap-1 {
    visibility: visible;
    height: auto;
  }

  .loginWrap .logo {
    text-align: center;
    margin-top: .74667rem;
    margin-bottom: 0;
  }

  .loginWrap .logo img {
    width: 2.56rem;
    height: .85333rem;
    box-sizing: border-box;
  }

  .login-form {
    margin: 0;
    padding: 0;
  }

  .m-cnt .u-tab {
    position: absolute;
    bottom: 2.22rem;
    right: 0;
    padding: 0;
  }

  .m-container {
    position: relative;
    padding-top: 1.6rem;
    margin: 0 auto;
  }

  .m-cnt .inputbox {
    height: 1.28rem;
    line-height: 1.28rem;
    border: none;
    padding-bottom: 1px;
  }

  .m-cnt .u-input {
    width: 100%;
    position: relative;
    height 100%
    float: left;

  }

  .m-cnt .u-input input {
    width: 8.27rem;
    height: 0.6rem;
    font-size: 0.4rem;
    line-height: 0.6rem;
    margin: 0.39rem 0;
    padding-left: 0;
    -webkit-tap-highlight-color: transparent;
    letter-spacing: normal;
  }

  .inputbox::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right 0
    width: 100%;
    box-sizing: border-box
    margin 0 auto
    height: 1px;
    background: #d9d9d9;
  }

  .m-pccnt {
    position: relative;
    margin-top: 0;
  }

  .m-cnt .m-pcbox {
    font-size: 0;
    margin-top: 16px;
    position: relative;
  }

  .m-cnt #login-form .u-label {
    width: 267px;
  }

  .m-cnt .u-label {
    position: absolute;
    width: 306px;
    z-index: 100;
    top: 0;
    left: 10px;
    color: #bdbdbd;
    font-size: 14px;
    font-weight: normal;
    cursor: text;
  }

  .m-cnt .m-pc .pcin {
    width: 5.33rem;
  }

  .m-cnt .u-input input {
    height: 0.6rem;
    font-size: 0.4rem;
    line-height: 0.6rem;
    margin: 0.39rem 0;
    padding-left: 0;
    -webkit-tap-highlight-color: transparent;
    letter-spacing: normal;
  }

  .m-pccnt::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: 0;
    right 0
    width: 100%;
    box-sizing: border-box
    margin 0 auto
    height: 1px;
    background: #d9d9d9;
  }

  .m-cnt .pcbtn {
    position: absolute;
    right: 0.22rem;
    top: 0.3rem;
    z-index: 100;
    display: inline-block;
    margin-left: 10px;
    vertical-align: top;
  }

  .m-cnt .pcbtn a {
    display: block;
    width: 2.3rem;
    height: 0.75rem;
    text-align: center;
    color: #333;
    font-size: 14px;
    background: #fff;
    line-height: 0.75rem;
    border: 2px solid #7F7F7F;
    border-radius: 10px;
  }

  .m-loginTypes {
    position: relative;
    height: 100%;
    clearFix()
  }

  .m-loginTypes .logoWrap {
    text-align: center;
    padding-bottom: 2.13333rem;
  }

  .m-loginTypes .logoWrap img {
    width: 3.57333rem;
    height: 1.2rem;
  }

  .m-loginTypes .btnWrap {
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

  .w-button-xl {
    height: 1.25333rem;
    line-height: 1.25333rem;
  }

  .w-button {
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    color: #fff;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    overflow: hidden;
    width 100%
  }

  .w-button-ghostRed {
    border-color: #b4282d;
    color: #b4282d;
    background-color: transparent;
  }

  .m-loginTypes .btnWrap .btn {
    color: #333;
    font-size: .37333rem;
    text-align: center;
    width: 100%;
  }

  .m-loginTypes .btnWrap .u-icon {
    margin-right: .21333rem;
    position: relative;
    top: -.02667rem;
  }

  .u-icon-arrow-right3 {
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .37333rem;
    height: .37333rem;
  }


</style>
