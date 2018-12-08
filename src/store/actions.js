/*包含n个用来间接更新状态数据的方法的对象*/
import Vue from 'vue'
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
