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
                              
​                              
   遇到的问题:                  
                                    box-sizing: border-box //ie盒子
                                    padding 0 .4rem ///////
                                   padding-right 1.33333rem ////
                                      box-sizing: border-box //ie盒子    
                                      加内边距会使盒子往外扩   水平方向会出现滚动条   解决办法:box-sizing: border-box //ie盒子    

## 第二天
    静态网页 : 分类 识物 购物车 个人
    
    基本路由的跳转  
    
    

## 第三天
## 第三天

```
mock数据,将获取到的数据添加到vuex状态管理中
       ./mock/mockServer 暴露接口 json
       ./api/ajax  api/index   ajax请求
vuex:: 定义基本初始化数据--->state
       定义数据的名称产量--->mutation-types
       定义同步数据/获取数据-->mutations
       定义异步更改/获取数据 --->actions
       定义计算属性更改数据---->getters
       
       this.$store.dispatch('')分发action  获取数据
       ...mapState([''])  结构对象 拿到对象里面的属性获取他们的值   遍历对象
      
      拆分基本路由,将获取到的mock数据动态添加到页面上
       
        //伪数组转真数组遍历
           Array.from().map(()=>{})

       v-for的优先级比v-if的优先级高
   
       什么时候要加v-if  报错了 数据出来了 但是报错
       
      问题:bigPromotionModule.bigPromotionList[0].data.contents[0].picUrl   嵌套太深  使用(v-if判断)
      对象的长度永远都是true,渲染第一次还是true, 所以v-if="bigPromotionModule.length"还是true (对象不要加length)
      数组长度就有true和false  可以使用length
      解决方案:v-if="bigPromotionModule.对象的属性" (  v-if="bigPromotionModule.backgroundUrl)
      
      问题:v-for只是循环遍历那一块的 就是对父容器进行循环遍历,只管这个父容器里面的  不是全局的
      首页动态数据
```

## 第四天

```
   this.$store.dispatch('')分发action  获取数据
   ...mapState([''])  结构对象 拿到对象里面的属性获取他们的值   ...展开(遍历)对象
   
    实现滚动条::      
    mounted(){
     new BScroll('.nav-list', {
            click: true
          })
      }
    分类页动态数据 切换功能 通过index 
    切换功能::
              通过 v-fro循环遍历数组拿到数组中每一个对象
              动态获取当前点击目标元素的index值(下标)
              给点击的目标元素添加一个类 active(就是当前下标是否和动态获取的index值相同)(index是自己定义的===0)
                      (sub就是下标 不管写什么还是下标)
              v-for="(so,sub) in sort" :key="sub" :class="{active: sub===index}" @click="dot(sub)"
              在data中初始化index的值(index:0) 再在methods中接收点击元素的值(dot)传的(sub)然后动态改变自定义index的值 (this.index=sub)
    
    识物页动态数据 瀑布流布局:
        创建一个空数组      subs:[]  在data初始化中创建
        使用循环遍历general,   this.general.map((gen)=>{} gen是遍历general出来的
        拿到gen里面的属性给subs ,,, return this.subs.push(gen.topics)
        (一维数组是由数字组成的以单纯的排序结构排列的结构单一的数组) (二维及多维数组可以看作是一维数组的多次叠加产生的。)
        多维数组转一维数组      let res = [].concat.apply([],this.subs)
        最后使用 v-if判断数组的type值是否为0或1 是0就是这种布局  是1就是另外一种 
        ( v-if="sub.type === 1") (v-else="sub.type === 0")
        
        
        手机登陆静态页面
        邮箱登陆静态页面
        登陆成功页面
     
```



## 第五天

```
  "dev" xxxxxxxxxxx --host 192.168.0.127
  
disabled属性 动态控制input
交给vuex(store)管理的状态(数据)后台的 就不需要引入import
没交给vuex管理的数据就需要

保存用户信息
自动登录
用户登录
手机号登录
退出登录 使用第三方库 :     
            在全局中引入 import {Button} from 'mint-ui'    
            注册标签组件 Vue.component(Button.name,Button)
            使用::    <mt-button></mt-button>

```



