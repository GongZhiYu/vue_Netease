<template>
  <div class="lbt">
    <div class="m-slide">
      <div class="slide-con">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in focusList" :key="index">
              <img :src="item.picUrl" alt="xxx">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: "l-b-t",
    props: {
      focusList: Array
    },
    mounted(){
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: true
      })

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .lbt {
    height 4.93333rem
    position relative
    .m-slide {
      padding-top: 4.93333rem !important;
      position: relative;
      width: 100%;
      overflow: hidden;
      .slide-con {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        .swiper-container {
          height: 100%;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          z-index: 1;
          .swiper-wrapper {
            z-index: 1;
            display: flex;
            box-sizing: content-box;
            .swiper-slide {
              flex-shrink: 0;
              img {
                width: 100%;
                height: auto;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
              }
            }
          }
          .swiper-wrapper, .swiper-slide {
            width: 100%;
            height: 100%;
            position: relative;
          }
        }
      }
    }
  }

</style>
