/*
路由器对象模块
 */

import Vue from 'vue'
import VueRouter from  'vue-router'
import Classify from '../route/Classify/Classify'
import Page from '../route/Page/Page'
import Personage from '../route/Personage/Personage'
import Things from '../route/Things/Things'
import Trolley from '../route/Trolley/Trolley'
import CW from  '../route/CW/CW'
import PhoneLogin  from '../route/PhoneLogin/PhoneLogin'
import EmailLogin from '../route/EmailLogin/EmailLogin'
import Profile from '../route/Profile/Profile'
import Sos from '../route/Sos/Sos'


//必须声明使用
Vue.use(VueRouter)

export default new VueRouter({
  //配置应用所以路由
  routes:[
    {
      path:"/sos", //搜索
      component:Sos
    },
    {
      path:'/page',
      component:Page,   //首页
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },
    {
      path:'/classify',
      component:Classify,  //分类页
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },
    {
      path:'/personage',
      component:Personage,  //个人
    },
    {
      path:'/things',
      component:Things,  //识物
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },
    {
      path:'/trolley',
      component:Trolley,  //购物车
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },
    {
      path:'/',
      redirect: '/page'   //初始页
    },
    {
      path:'/phonelogin',
      component:PhoneLogin,  //手机登陆
    },
    {
      path:'/emaillogin',
      component:EmailLogin,  //邮箱登陆
    },

    {
      path:'/profile',
      component:Profile,  //个人页面
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },

    {
      path:'/*',
      component:CW,   //错误404
    },

  ]

})
