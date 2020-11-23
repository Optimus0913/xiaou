import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import index from '@/components/views/index'
import register from '@/components/mine/register'
import submit from '@/components/mine/submit'
import me from '@/components/mine/me'
import classification from '@/components/views/classification'

import details from '@/components/views/details'

//二级路由
import home from '@/components/pages/home'
import cart from '@/components/pages/cart'
import mine from '@/components/pages/mine'
import list from '@/components/views/list'
import sure from '@/components/views/sure'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            component: index,
            children: [{
                    path: '/home',
                    component: home,
                    meta: { //自定配置标签
                        name: '首页'
                    }
                }, {
                    path: '/cart',
                    component: cart,
                    meta: { //自定配置标签
                        name: '购物车'
                    }
                }, {
                    path: '/mine',
                    component: mine,
                    meta: { //自定配置标签
                        name: '个人中心'
                    }
                }, {
                    path: '/list',
                    component: list,
                    meta: { //自定配置标签
                        name: '列表'
                    }
                }, {
                    path: '/sure',
                    component: sure,
                    meta: { //自定配置标签
                        name: '确认订单'
                    }
                },
                {
                    path: '',
                    redirect: '/home'
                }
            ]
        }, {
            path: '/classification',
            component: classification
        }, {
            path: '/details',
            component: details
        }, {
            path: '/register',
            component: register,
            meta: { //自定配置标签
                name: '注册'
            }
        }, {
            path: '/submit',
            component: submit,
            meta: { //自定配置标签
                name: '登录'
            }
        }, {
            path: '/me',
            component: me,
            meta: { //自定配置标签
                name: '我的'
            }
        },
        {
            path: '*',
            redirect: '/index'
        },
    ]
})