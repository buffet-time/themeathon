import Vue from 'vue'
import Router from 'vue-router'
import { About } from './components/about.component'
import { Home } from './components/home.component'

Vue.use(Router)

const routes = [
	{
		path: '',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	}
]

export default new Router({ routes })
