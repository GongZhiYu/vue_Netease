## vue 实战项目 

## 第一天
  静态网页 : 首页
  拆分路由组件   普通组件
  路由组件:
          pape:首页
          classify:分类
          personage :个人
          things :识物
          trolley :购物车
          
   普通组件: FooterGuide底部  使用 第三方字体图标:lconfont阿里
   轮播图 :   import Swiper from 'swiper' 使用第三方库
              import 'swiper/dist/css/swiper.min.css'
               mounted(){
                    new Swiper('.swiper-container', {
                      loop: true,// 循环模式选项
                      // 如果需要分页器
                      pagination: {
                        el: '.swiper-pagination',
                      },
                      autoplay:true //自动播放
                    })
                    }
   水平滑动导航:   import BScroll from 'better-scroll' 使用第三方库
                mounted(){
                       new BScroll('.pic-wrapper', {
                            click: true,
                            scrollX: true,  //水平滑动
                          })
                          }
                              
                              
   遇到的问题:                  
                                    box-sizing: border-box //ie盒子
                                    padding 0 .4rem ///////
                                   padding-right 1.33333rem ////
                                      box-sizing: border-box //ie盒子    
                                      加内边距会使盒子往外扩   水平方向会出现滚动条   解决办法:box-sizing: border-box //ie盒子    

## 第二天
    静态网页 : 分类 识物 购物车 个人
