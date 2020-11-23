import http from './axios'

//轮播图
export function getBanner() {
    return http.get('/api/getbanner')
}

//分类
export function getCate() {
    return http.get('/api/getcate')
}

//秒杀信息
export function getSeckill() {
    return http.get('/api/getseckill')
}
//封装获取商品信息(首页)
export function getIndexgoods() {
    return http.get('/api/getindexgoods')
}
//分类树形结构
export function getCatetree() {
    return http.get('/api/getcatetree')
}

//分类商品
export function getGoods() {
    return http.get('/api/getgoods')
}

//获取商品信息
export function getGoodsinfo() {
    return http.get('/api/getgoodsinfo')
}

//会员注册
export function getRegister(data) {
    return http.post('/api/register', data)
}

//会员登录
export function getLogin(data) {
    return http.post('/api/login', data)
}

//购物车列表
export function getCarlist() {
    return http.get('/api/cartlist')
}

//购物车添加
export function getCartadd(data) {
    return http.post('/api/cartadd', data)
}

//购物车删除
export function getCartdelete(data) {
    return http.post('/api/cartdelete', data)
}