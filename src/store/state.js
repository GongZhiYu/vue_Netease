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
