import Vue from 'vue';
import VueRouter from 'vue-router';

import classHistory from '../components/classHistory/classHistory'
import collection from '../components/collection/collection'
import mineStudy from '../components/mineStudy/mineStudy'
import accumulate from '../components/accumulate/accumulate'
import college from '../pages/college/college';
import newsList from '../pages/newsList/newsList';
import show from '../pages/showComponents/showComponents';
import mine from '../pages/mine/mine';
import login from '../pages/login/login';

const routes = {
	routes: [
		{
			path: '/show',
			component: show
		},
		{
			name: 'login',
			path: '/login',
			component: login,
		},
		{
			name: 'college',
			path: '/college',
			component: college,
		},
		{
			name: 'newsList',
			path: '/newsList',
			component: newsList
		},
		{
			path: '/mine',
			component: mine,
			children: [
				{
					name: 'mine',
					path: '/mine',
					component: mineStudy
				},
				{
					path: '/mineStudy',
					name: 'mainStudy',
					component: classHistory					
				},
				{
					name: 'collection',
					path: '/collection',
					component: collection
				},
				{
					name: 'accumulatePoints',
					path: '/accumulatePoints',
					component: accumulate
				}
			]
		}
	]
}

Vue.use(VueRouter);
export default new VueRouter(routes);