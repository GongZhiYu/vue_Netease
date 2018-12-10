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
       ...mapState([''])
```

```
1:  mock数据,将获取到的数据添加到vuex状态管理中
       ./mock/mockServer 暴露接口 json
       
       //使用mockjs来mock数据/接口的模块



import Mock from  'mockjs'

//主页数据
import msite from './msite.json'
//json文件里是对象
Mock.mock('/kingKongModule', {code: 0, data:msite.kingKongModule}) //十个导航
Mock.mock('/bigPromotionModule', {code: 0, data:msite.bigPromotionModule}) //大的动图以及下面的小图
Mock.mock('/policyDescList', {code: 0, data:msite.policyDescList})//三个中间的字
Mock.mock('/focusList', {code: 0, data:msite.focusList})//轮播图

//分类数据
import category from './category.json'
Mock.mock('/sort', {code: 0, data:category.sort})


//识物数据
import shiwu from './shiwu.json'
Mock.mock('/general', {code: 0, data:shiwu.general})


```

```
2:::      ./api/ajax  api/index   ajax请求

import ajax from './ajax'

//首页十个导航
export const reqkingKongModule = () => {
  return ajax('/kingKongModule')
}
//首页大的动图以及下面的小图
export const reqbigPromotionModule = () => {
  return ajax('/bigPromotionModule')
}
//首页三个中间的字
export const reqpolicyDescList = () => {
  return ajax('/policyDescList')
}
//首页轮播图
export const reqfocusList = () => {
  return ajax('/focusList')
}

//分类数据
export const reqsort = () => {
  return ajax('/sort')
}
//识物数据
export const reqgeneral = () => {
  return ajax('/general')
}

```

```
3 vuex:: 定义基本初始化数据--->state

/*
包含n个状态数据的对象
 */
/*两大类要交给vuex来管理
*  1.多组件共享的状态(数据)
*  2.从后台获取的数据*/

export default {
  kingKongModule:{}, //十个导航
  bigPromotionModule:{},  //大的动图以及下面的小图
  policyDescList:[],//三个中间的字
  focusList:[],//轮播图
  sort:[],//分类数据
  general:[]//识物数据
}

```

```
4   定义数据的名称产量--->mutation-types
/*
包含n个mutation函数名称常量
mutation type常量名称模块
 */

export const RECEIVE_KING = 'receive_king'  //十个导航
export const RECEIVE_BIG ='receive_big' //大的动图以及下面的小图
export const RECEIVE_POLICY ='receive_policy'//三个中间的字
export const RECEIVE_FOCUSLIST ='receive_focusList'//轮播图
export const RECEIVE_SORT ='receive_sort'//分类数据
export const RECEIVE_GENERAL ='receive_general'//识物数据

```

```
5.  定义同步数据/获取数据-->mutations

/*包含n个用来直接更新状态数据的方法的对象*/
import Vue from 'vue'    这个文件这次不用  引不引都可以
import {
  RECEIVE_BIG,
  RECEIVE_SORT,
  RECEIVE_POLICY,
  RECEIVE_KING,
  RECEIVE_GENERAL,
  RECEIVE_FOCUSLIST
} from "./mutation-types";

export default {
  //大的动图以及下面的小图
  [RECEIVE_BIG](state,{bigPromotionModule}){
    state.bigPromotionModule=bigPromotionModule
  },
  //分类数据
  [RECEIVE_SORT](state,{sort}){
    state.sort=sort
  },
  //三个中间的字
  [RECEIVE_POLICY](state,{policyDescList}){
    state.policyDescList=policyDescList
  },
  //十个导航
  [RECEIVE_KING](state,{kingKongModule}){
    state.kingKongModule=kingKongModule
  },
  //识物数据
  [RECEIVE_GENERAL](state,{general}){
    state.general=general
  },
  //轮播图
  [RECEIVE_FOCUSLIST](state,{focusList}){
    state.focusList=focusList
  },
}
5
```

```
6 定义异步更改/获取数据 --->actions
/*包含n个用来间接更新状态数据的方法的对象*/
import Vue from 'vue'  这个文件这次不用  引不引都可以
import {
  RECEIVE_BIG, //大的动图以及下面的小图
  RECEIVE_FOCUSLIST, //轮播图
  RECEIVE_GENERAL, //识物数据
  RECEIVE_KING, //十个导航
  RECEIVE_POLICY, //三个中间的字
  RECEIVE_SORT, //分类数据
} from "./mutation-types"

import {
  reqbigPromotionModule, //首页大的动图以及下面的小图
  reqfocusList, //首页轮播图
  reqgeneral,  //识物数据
  reqkingKongModule, //首页十个导航
  reqpolicyDescList,  //首页三个中间的字
  reqsort //分类数据
} from "../api";


export default {

  //获得首页十个导航的异步action
 async getking ({commit}){
    // 1.发送异步ajax请求
   const result = await reqkingKongModule()
   // 2.根据结果提交mutation
    if(result.code ===0){
      const kingKongModule = result.data
      commit(RECEIVE_KING,{kingKongModule})
    }
  },
//获得首页大的动图以及下面的小图的异步action
  async getbig({commit}){
    // 1.发送异步ajax请求
    const result = await reqbigPromotionModule()
    if(result.code ===0){
      const bigPromotionModule = result.data
      commit(RECEIVE_BIG,{bigPromotionModule})
    }
  },

//获得首页三个low的异步action
  async getpolicy({commit}){
    // 1.发送异步ajax请求
    const result = await reqpolicyDescList()
    if(result.code ===0){
      const policyDescList = result.data
      commit(RECEIVE_POLICY,{policyDescList})
    }
  },
//获得首页轮播图的异步action
  async getfocus({commit}){
    // 1.发送异步ajax请求
    const result = await reqfocusList()
    if(result.code ===0){
      const focusList = result.data
      commit(RECEIVE_FOCUSLIST,{focusList})
    }
  },
//获得分类数据的异步action
  async getsort({commit}){
    // 1.发送异步ajax请求
    const result = await reqsort()
    if(result.code ===0){
      const sort = result.data
      commit(RECEIVE_SORT,{sort})
    }
  },
//获得识物数据的异步action
  async getgeneral({commit}){
    // 1.发送异步ajax请求
    const result = await reqgeneral()
    if(result.code ===0){
      const general = result.data
      commit(RECEIVE_GENERAL,{general})
    }
  },
}

```

```
7   定义计算属性更改数据---->getters   还不需要   需要我在给你发
```

```
8  首页要用
  import {mapState}from 'vuex'


 computed:{
      ...mapState(['kingKongModule','bigPromotionModule','policyDescList','focusList'])
    },
 mounted(){
     //异步获得首页十个导航
      this.$store.dispatch('getking')
      //异步获取首页大的动图以及下面的小图
      this.$store.dispatch('getbig')
      //异步获得首页三个low
      this.$store.dispatch('getpolicy')
      //异步获得首页轮播图
      this.$store.dispatch('getfocus')
 }
```

