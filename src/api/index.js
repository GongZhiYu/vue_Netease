
/*包含n个接口请求函数的模块
* 每个函数的返回值是promise*/

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

// const BASE = 'http://localhost:5000'
const BASE = '/api'

//发送短信验证码
export const reqSms =(phone)=>{
  return ajax(BASE + 'login_sms',{phone,code},'POST')
}








