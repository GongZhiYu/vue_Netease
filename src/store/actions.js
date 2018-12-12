/*包含n个用来间接更新状态数据的方法的对象*/
import Vue from 'vue'
import {
  RECEIVE_BIG, //大的动图以及下面的小图
  RECEIVE_FOCUSLIST, //轮播图
  RECEIVE_GENERAL, //识物数据
  RECEIVE_KING, //十个导航
  RECEIVE_POLICY, //三个中间的字
  RECEIVE_SORT, //分类数据
  RECEIVE_USER,//用户信息
  RESET_USER, //用户退出
  Reset_TB, //识物头部真请求
  RECEIVE_DR, //识物达人
  RECEIVE_INPUTS,//模糊搜索
RECEIVE_SHOPLIST
} from "./mutation-types"

import {
  reqbigPromotionModule, //首页大的动图以及下面的小图
  reqfocusList, //首页轮播图
  reqgeneral,  //识物数据
  reqkingKongModule, //首页十个导航
  reqpolicyDescList,  //首页三个中间的字
  reqsort, //分类数据
  reqUser, //获取当前用户
  reqLogout,//用户退出
  reqtb, //识物头部真请求
  reqdr, //识物达人
  reqinputs,//模糊搜索
  reqShopList
} from "../api";


export default {
  //识物头部真请求
  async gettb({commit}) {
    // 1.发送异步ajax请求
    // console.log('11111111111111');
    const result = await reqtb()
    // 2.根据结果提交mutation
    if (result.code === "200") {
      const tb = result.data
      commit(Reset_TB, {tb})
    }
  },
  //获得识物推荐数据的异步action
  async getgeneral({commit}) {
    // 1.发送异步ajax请求
    const result = await reqgeneral()
    // 2.根据结果提交mutation
    if (result.code === "200") {
      const general = result.data
      commit(RECEIVE_GENERAL, {general})
    }
  },
  //获得识物达人数据的异步action
  async getdr({commit}) {
    //1发送异步ajax请求
    const result = await reqdr()
    // 2.根据结果提交mutation
    if (result.code === "200") {
      const dr = result.data
      console.log(dr);
      commit(RECEIVE_DR, {dr})
    }
  },
  //模糊搜索
  async getinputs({commit}, {url, keywordPrefix}) {
    //1发送异步ajax请求
    const result = await reqinputs({url, keywordPrefix})
    // 2.根据结果提交mutation
    if (result.code === "200") {
      const inputs = result.data
      commit(RECEIVE_INPUTS, {inputs})
    }
  },
  //请求搜索列表商品数据
  async getShopList({commit}, {url}) {
    const result = await reqShopList({url});
    const shopList = result.data;
    if (result.code === '200') {
      commit(RECEIVE_SHOPLIST, {shopList});
    }
  },


  //获得首页十个导航的异步action
  async getking({commit}) {
    // 1.发送异步ajax请求
    const result = await reqkingKongModule()
    // 2.根据结果提交mutation
    if (result.code === 0) {
      const kingKongModule = result.data
      commit(RECEIVE_KING, {kingKongModule})
    }
  },
//获得首页大的动图以及下面的小图的异步action
  async getbig({commit}) {
    // 1.发送异步ajax请求
    const result = await reqbigPromotionModule()
    if (result.code === 0) {
      const bigPromotionModule = result.data
      commit(RECEIVE_BIG, {bigPromotionModule})
    }
  },

//获得首页三个low的异步action
  async getpolicy({commit}) {
    // 1.发送异步ajax请求
    const result = await reqpolicyDescList()
    if (result.code === 0) {
      const policyDescList = result.data
      commit(RECEIVE_POLICY, {policyDescList})
    }
  },
//获得首页轮播图的异步action
  async getfocus({commit}) {
    // 1.发送异步ajax请求
    const result = await reqfocusList()
    if (result.code === 0) {
      const focusList = result.data
      commit(RECEIVE_FOCUSLIST, {focusList})
    }
  },
//获得分类数据的异步action
  async getsort({commit}) {
    // 1.发送异步ajax请求
    const result = await reqsort()
    if (result.code === 0) {
      const sort = result.data
      commit(RECEIVE_SORT, {sort})
    }
  },


  //保存user的同步的action
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },

// 获取当前用户的异步action
  async getUser({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
      console.log(user + '222222');

    }
  },
  //请求退出的异步action
  async logout({commit}) {
    // 1.发送异步ajax请求
    const result = await reqLogout()
    // 2.根据结果提交mutation
    if (result.code === 0) {
      commit(RESET_USER)
    }
  },
}
