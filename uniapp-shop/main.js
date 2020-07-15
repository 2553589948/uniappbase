import Vue from 'vue'
import App from './App'

import TabBar from '@/components/TabBar.vue'
Vue.component('tab-bar', TabBar) // 全局注册一个组件

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
