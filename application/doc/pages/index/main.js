import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import Ui from '@ui';
import './style'

import Router  from 'vue-router'
import routes        from './routes'
import Loading from '@ext/loading'
import Uploader from '@ext/uploader'

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;
Vue.config.devtools = debug;
Vue.config.productionTip = debug;

// UI组件
Vue.use(Ui)

// vue路由
Vue.use(Router)

Vue.use(Loading)


Vue.prototype.$uploader = Uploader;



// 路由守卫
const router = new Router({
	linkActiveClass:'current',
	routes
})

router.afterEach((to, from, next) => document.title = `${to.name} - UI文档`)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')