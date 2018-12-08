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


