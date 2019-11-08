import Vue from 'vue'
import { App } from './app.component'
import router from './router'
import store from './store'

Vue.config.productionTip = false

window.addEventListener('load', initialize)
function initialize() {
	const app = new Vue({
		router,
		store,
		el: '#app',

		template: '<App/>',
		components: { App }
	})
	return app
}
