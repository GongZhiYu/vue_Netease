/*包含n个接口请求函数的模块
* 每个函数的返回值是promise*/

import ajax from './ajax'


const TBs = '/ip'


//  //识物头部真请求
export const reqtb = () => {
  return ajax(TBs + '/topic/v1/find/getTabs.json')
}

//识物推荐数据 真
export const reqgeneral = () => {
  return ajax(TBs+'/topic/v1/find/recManual.json')
}
//识物达人 真
export const reqdr=()=>{
  return ajax(TBs+'/topic/v1/find/getTabData.json?page=1&size=5&tabId=4')
}
//模糊搜索
export const reqinputs=({keywordPrefix,url})=>{
  return ajax(TBs+url,{keywordPrefix:keywordPrefix},"POST")
}
//请求搜索列表商品数据
export const reqShopList = ({url})=>{
  return ajax(TBs+url);
};


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

//分类推荐数据
export const reqsort = () => {
  return ajax('/sort')
}


// const BASE = 'http://localhost:5000'
const BASE = '/api'

//发送短信验证码
export const reqSms = (phone) => {
  console.log("===");
  return ajax(BASE + '/sendcode', {phone})
}
//手机验证码登陆
export const reqmobilePhone = (phone, code) => {
  return ajax(BASE + '/login_sms', {phone, code}, 'POST')

}
//根据会话获取用户信息
export const reqUser = () => {
  return ajax(BASE + '/userinfo')
}
//邮箱密码登陆
export const reqLanding = ({name, pwd, captcha}) => {
  return ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')
}
//用户登出
export const reqLogout = () => {
  return ajax(BASE + '/logout')
}
//登陆才需要code








