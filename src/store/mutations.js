    /*包含n个用来直接更新状态数据的方法的对象*/
import Vue from 'vue'
import {
  RECEIVE_BIG,
  RECEIVE_SORT,
  RECEIVE_POLICY,
  RECEIVE_KING,
  RECEIVE_FOCUSLIST,
  RECEIVE_USER,
  RESET_USER,
  Reset_TB, //识物头部真请求
  RECEIVE_GENERAL,//识物推荐真
  RECEIVE_DR,//识物达人真
  RECEIVE_INPUTS,//模糊搜索
  RECEIVE_SHOPLIST //搜索列表商品数据
} from "./mutation-types";

export default {

  //识物头部真请求
  [Reset_TB](state,{tb}){
    state.tb=tb
  },
  //识物推荐数据
  [RECEIVE_GENERAL](state,{general}){
    state.general=general
  },
  //识物达人真
  [RECEIVE_DR](state,{dr}){
    console.log(dr);
    state.dr=dr
  },
  //模糊搜索
  [RECEIVE_INPUTS](state,{inputs}){
    state.inputs=inputs
  },
  //搜索列表商品数据
  [RECEIVE_SHOPLIST](state,{shopList}){
    state.shopList = shopList;
  },


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

  //轮播图
  [RECEIVE_FOCUSLIST](state,{focusList}){
    state.focusList=focusList
  },

  //用户信息
  [RECEIVE_USER](state,{user}){
    state.user=user
  },
  //退出
  [RESET_USER](state){
    state.user={}
  },

}
