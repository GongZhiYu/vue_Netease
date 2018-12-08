/*包含n个用来直接更新状态数据的方法的对象*/
import Vue from 'vue'
import {
  RECEIVE_BIG,
  RECEIVE_SORT,
  RECEIVE_POLICY,
  RECEIVE_KING,
  RECEIVE_GENERAL,
  RECEIVE_FOCUSLIST,
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
