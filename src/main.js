// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局引入阿里矢量图标库
import './assets/font/iconfont.css'
import './assets/css/reset.css'
import './assets/js/remScale'

import vantui from 'vant'
Vue.use(vantui)
import 'vant/lib/index.css'
Vue.prototype.$imgUrl = 'http://localhost:3000'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})