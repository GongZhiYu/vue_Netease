<template>
  <div>
    <div class="m-header">
      <header>
        <div class="hd-top">
          <div class="top-row">
            <div class="row-left">
              <!--跳转到首页-->
              <!--当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)。-->
              <router-link to="/page" class="goTo"><i class="icon house"></i></router-link>
            </div>
            <div class="row-middle">
              <a href="javascript:;" class="m-f">发现</a>
              <a href="javascript:;" class="m-j">甄选家</a>
            </div>
            <div class="row-right">
              <a href="javascript:;" class="r-cart" @click="shopping">
                <i><span></span></i>
              </a>
              <router-link to="" class="r-rear">
                <i></i>
              </router-link>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="m-tab">
      <div class="tab-b">
        <a href="javascript:;" class="item active">推荐</a>
        <a href="javascript:;" class="item">达人</a>
        <a href="javascript:;" class="item">上新</a>
        <a href="javascript:;" class="item">晒单</a>
        <a href="javascript:;" class="item">HOME</a>
      </div>
    </div>
    <div>
      <div class="m-main">
        <div class="m-tpls one">
          <div class="one-pic"><img :src="general[0].ad.picUrl" alt="xx" v-if="general.length"></div>
        </div>


        <div v-for="(sub,index) in subs" :key="index">
          <div class="m-tpls m-tpls-picker" v-if="sub.type === 1">
            <a href="javascript:;" class="u-flexbox">
              <div class="info">
                <div class="u-name">
                  <span class="ava"><img :src="sub.avatar" alt="xx"></span>
                  <span>{{sub.nickname}}</span>
                </div>
                <div class="title">{{sub.title}}</div>
                <div class="desc">{{sub.subTitle}}</div>
                <div class="u-rcount">
                  <i class="ico"></i>
                  <span>{{sub.readCount}}人看过</span>
                </div>
              </div>
              <div class="u-pic"><img :src="sub.picUrl" alt="" style="width: 100%; height: 100%"></div>
            </a>
          </div>

          <div class="m-tpls m-tpls-rec" v-else="sub.type === 0">
            <a href="javascript:;" class="recs">
              <div class="u-name">
                <span class="ava"><img :src="sub.avatar" alt=""></span>
                <span>{{sub.nickname}}</span>
              </div>
              <div class="title">{{sub.title}}</div>
              <div class="u-pic"><img :src="sub.picUrl" alt=""></div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>{{sub.readCount}}人看过</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        subs:[]
      }
    },
    methods:{
      //跳转购物车路由
      shopping(){
        this.$router.push('/trolley')
      }
    },
    mounted(){
      this.$store.dispatch('getgeneral')
    },
    computed:{
      ...mapState(['general'])
    },

    //监听
    watch:{
      general(){
        //方法1
       /* this.general.map((gen,index)=>{
          return this.subs.push(gen.topics)
        })
        console.log(this.subs);
        let res = [].concat.apply([],this.subs)
        console.log(res);*/

       /*map和forEach都是遍历 但是map有一个返回值,forEach没有*/

       //方法2
        let arr = []
        this.general.forEach(item => {
          //...三点运算符(展开数组)  arr第一次是空的,但是后面不是空的
          //展开数组,因为在arr数组里面展开,所以就是arr里面的属性
          arr = [...arr, ...item.topics]
          //方法3
          // arr = arr.concat(...item.topics) //concat()合并里面的元素
        })
        this.subs = arr
        // console.log(res);

      }
    }

  }
</script>

<style lang="less" scoped>
  .m-header {
    position: relative;
    width: 100%;
    height: 100px;
    header {
      position: fixed !important;
      left: 0;
      top: 0;
      z-index: 99;
      width: 100%;
      .hd-top {
        position: relative;
        height: 100px;
        background-color: #fafafa;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #d9d9d9;
        .top-row {
          z-index: 1;
          max-width: 768px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          margin: auto;
          overflow: hidden;
          padding: 0 26px 0 24px;
          position: relative;
          .row-left {
            display: block;
            float: left;
            .goTo {
              display: block;
              height: 100px;
              line-height: 100px;
              .icon {
                display: block;
                position: relative;
                background-position: center;
                background-repeat: no-repeat;
              }
              .house {
                background-size: 46px 46px;
                width: 46px;
                height: 100px;
              }
            }
            &::after {
              content: '';
              display: block;
              clear: both;
            }
          }
          .row-middle {
            position: absolute;
            width: 320px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            left: 50%;
            top: 0;
            margin-left: -160px;
            color: #7F7F7F;
            z-index: 1;
            .m-f {
              padding: 0 16px;
              vertical-align: middle;
              font-size: 45px;
              color: #b4282d;
              font-weight: bold;
            }
            .m-j {
              padding: 0 16px;
              vertical-align: middle;
              font-size: 30px;
            }
          }
          .row-right {
            display: block;
            float: right;
            height: 100px;
            margin-right: 2px;
            &::after {
              content: "";
              display: block;
              clear: both;
            }
            .r-cart {
              display: block;
              height: 100px;
              float: right;
              i {
                background-size: 46px 46px;
                width: 49px;
                height: 100px;
                display: block;
                position: relative;
                background-position: center;
                background-repeat: no-repeat;
                span {
                  position: absolute;
                  top: 22px;
                  right: -.24px;
                  width: 28px;
                  height: 28px;
                  border-radius: 28px;
                  background-color: #b4282d;
                  text-align: center;
                  line-height: 28px;
                  font-size: 18px;
                  color: #fff;
                  display: none;
                }
              }
            }
            .r-rear {
              float: right;
              margin-right: 30px;
              display: block;
              height: 100px;
              i {
                display: block;
                position: relative;
                background-position: center;
                background-repeat: no-repeat;
                background-size: 46px 46px;
                width: 62px;
                height: 100px;
              }
            }
          }
        }
      }
    }
  }

  .m-tab {
    width: 100%;
    height: 72px;
    background: #fafafa;
    border-bottom: 1px solid #a8a8a8;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 20;
    .tab-b {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-flow: row wrap;
      justify-content: space-around;
      margin: 0;
      width: 100%;
      height: 92px;
      padding-bottom: 20px;
      white-space: nowrap;
      overflow-y: hidden;
      overflow-x: auto;
      .item {
        display: inline-block;
        height: 72px;
        line-height: 72px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: .4rem;
        color: #7F7F7F;
        padding: 0 8px;
        margin: 0 20px;
        vertical-align: middle;
      }
      .item.active {
        color: #B4282D;
        border-bottom: 4px solid #B4282D;
      }
    }
  }

  .m-main {
    padding: 72px 0 98px 0;
    .m-tpls {
      width: 100%;
      background: #fff;
      margin: 20px 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 36px 30px;
    }
    .one{
      .one-pic{
        width: 690px;
        height: 376px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        background: #f0f0f0;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .m-tpls-picker{
      position: relative;
      padding: 32px 30px;
      .u-flexbox{
        display: flex;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
        .info{
          width: 400px;
          .u-name{
            font-size: 28px;
            color: #333;
            line-height: 36px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .ava{
              width: 56px;
              height: 56px;
              overflow: hidden;
              border-radius: 50%;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              border: 1px solid #d9d9d9;
              margin-right: 12px;
              img{
                width: 100%;
                height: 100%;
              }
            }
            span{
              display: inline-block;
              vertical-align: middle;
            }
          }
          .title{
            width: 100%;
            font-size: 36px;
            color: #333;
            line-height: 44px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            padding-top: 32px;
            font-family: PingFangSC-Regular;
          }
          .desc{
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 28px;
            line-height: 40px;
            padding-top: 8px;
            color: #7f7f7f;
          }
          .u-rcount{
            position: absolute;
            left: 30px;
            bottom: 26px;
            font-size: 22px;
            color: #999;
            line-height: 32px;
            margin-top: 18px;
            .ico{
              display: inline-block;
              width: 28px;
              height: 20px;
              vertical-align: middle;
              margin-right: 8px;
            }
          }
        }
        .u-pic{
          width: 272px;
          height: 272px;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: #f0f0f0;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
    }
    .m-tpls-rec{
      .recs{
        .u-name{
          margin-bottom: 24px;
          font-size: 28px;
          color: #333;
          line-height: 36px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .ava{
            width: 56px;
            height: 56px;
            overflow: hidden;
            border-radius: 50%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border: 1px solid #d9d9d9;
            margin-right: 12px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          span{
            display: inline-block;
            vertical-align: middle;
          }
        }
        .title{
          font-size: 36px;
          color: #333;
          line-height: 52px;
          margin: -8px 0 16px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-family: PingFangSC-Regular;
        }
        .u-pic{
          width: 690px;
          height: 376px;
          position: relative;
          margin-bottom: 20px;
          overflow: hidden;
          border-radius: 8px;
          background: #f0f0f0;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .u-rcount{
          font-size: 22px;
          color: #999;
          line-height: 32px;
          margin-top: 18px;
          margin-bottom: -16px;
          .ico{
            display: inline-block;
            width: 28px;
            height: 20px;
            vertical-align: middle;
            margin-right: 8px;
          }
          span{
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
