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


//必须声明使用
Vue.use(VueRouter)

export default new VueRouter({
  //配置应用所以路由
  routes:[
    {
      path:'/page',
      component:Page,
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },
    {
      path:'/personage',
      component:Personage,
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },
    {
      path:'/things',
      component:Things,
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },
    {
      path:'/trolley',
      component:Trolley,
      meta:{
        FooterGuide:true  //标识底部显示
      }
    },
    {
      path:'/',
      redirect: '/page'
    },
  ]

})
