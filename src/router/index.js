import Vue from 'vue';
import Router from 'vue-router';
import routesList from './routes';
/* views */
import StartView from '../views/Start.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: routesList.start,
			component: StartView
		}
	]
});
