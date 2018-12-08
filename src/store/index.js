/*
vuex最核心管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

//声明使用vue的插件vuex
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
