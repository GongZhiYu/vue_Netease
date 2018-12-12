<template>
  <div class="classify">
    <div class="header" style="height: 44px">
      <div class="m-hd">
        <div class="search-item" @click="sos">
          <div class="s-int">
            <i></i>
            <span>搜索商品, 共19931款好物</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cateNav" style="left: 0;">
      <div style="position: relative; width: 100%; height: 100%; overflow: hidden" class="nav-list">
        <ul class="nav-ul ul-l">
          <li class="item" v-for="(so,sub) in sort" :key="sub" :class="{active: sub===index}" @click="dot(sub)">
            <a href="javascript:;" class="txt">{{so.name}}</a>
          </li>

        </ul>
      </div>
    </div>
    <div class="cateList">
      <div class="tu" :style="{backgroundImage: `url(${sort[index].wapBannerUrl})`}" v-if="sort.length">
        <div class="tu-ctn"></div>
      </div>
      <div class="lists">
        <ul class="list" v-if="sort[index]">
          <li class="list-item" v-for="(picture,s) in sort[index].subCateList" :key="s">
            <a href="javascript:;">
              <img :src="picture.wapBannerUrl" class="cateImg">
              <div class="name">{{picture.name}}</div>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    methods:{
      //跳转搜索
      sos(){
        this.$router.push('/sos')
      },
      dot(sub){
        this.index=sub
      }
    },
    data(){
      return{
        index:0
      }
    },
    computed:{
      ...mapState(['sort'])
    },

    mounted() {
      //异步获得首页分类数据
      this.$store.dispatch('getsort')
      new BScroll('.nav-list', {
        click: true
      })
    },

  }
</script>

<style lang="less" scoped>
  .classify {
    .header {
      .m-hd {
        position: fixed !important;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%;
        .search-item {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          height: 1.17333rem;
          padding: 0 .4rem;
          background-color: #fff;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            background-color: #d9d9d9;
            left: 0;
            width: 100%;
            height: 1px;
            -webkit-transform-origin: 50% 100% 0;
            transform-origin: 50% 100% 0;
            bottom: 0;
          }
          .s-int {
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            -webkit-box-align: center;
            justify-content: center;
            height: .74667rem;
            font-size: .37333rem;
            background-color: #ededed;
            border-radius: .10667rem;
            align-items: center;
            -webkit-box-pack: center;
            i {
              display: inline-block;
              vertical-align: middle;
              background-image: url('./images/search.png');
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .37333rem;
              height: .37333rem;
              margin-right: .13333rem;
            }
            span {
              color: #666;
            }
          }
        }
      }
    }
    .cateNav {
      position: fixed;
      top: 1.17333rem;
      bottom: 0;
      z-index: 4;
      width: 2.16rem;
      background-color: #fff;
      &::after {
        content: '';
        position: absolute;
        background-color: rgba(0, 0, 0, .15);
        top: 0;
        bottom: 0;
        width: 1px;
        -webkit-transform-origin: 100% 50% 0;
        transform-origin: 100% 50% 0;
        right: 0;
      }
      .nav-ul {
        .active {
          position: relative;
          width: 100%;
          height: .66667rem;
          text-align: center;
          border: none;
          margin-top: 0;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: .08rem;
            background: #ab2b2b;
          }
          .txt {
            color: #ab2b2b !important;
            display: block;
            font-size: .37333rem;
            line-height: .66667rem;
            text-overflow: ellipsis; //文本溢出用省略号
            white-space: nowrap; //文本不换行
            overflow: hidden; //隐藏多余的
          }
        }
        .item {
          margin-top: .53333rem;
          width: 100%;
          height: .669rem;
          text-align: center;
          border: none;
          .txt {
            color: #333;
            display: block;
            font-size: .37333rem;
            line-height: .66667rem;
            text-overflow: ellipsis; //文本溢出用省略号
            white-space: nowrap; //文本不换行
            overflow: hidden; //隐藏多余的
          }
        }
      }
      .ul-l {
        padding-bottom: 1.84rem;
      }
    }
    .cateList {
      margin-left: 2.16rem;
      padding: .4rem .4rem 1rem;
      background: #fff;
      height: auto;
      .tu {
        position: relative;
        width: 100%;
        height: 2.56rem;
        display: table;
        margin-bottom: .42667rem;
        background: center no-repeat #f4f4f4;
        background-size: cover;
        border-radius: 4px;
        .tu-ctn {
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          font-size: .37333rem;
          color: #fff;
        }
      }
      .lists {
        margin-bottom: 0;
        .list {
          .list-item {
            display: inline-block;
            margin-right: .36rem;
            font-size: 0;
            width: 1.92rem;
            vertical-align: top;
            .cateImg {
              display: block;
              background: #fff;
              width: 1.92rem;
              height: 1.92rem;
            }
            .name {
              height: .96rem;
              font-size: .32rem;
              text-align: center;
              line-height: .48rem;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              color: #333;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
</style>
