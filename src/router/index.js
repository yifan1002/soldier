import Vue from 'vue';
import VueRouter from 'vue-router';

// import college from '@p/college/college';

const routes = {
	routes: [
		{
			path: '/show',
			component: r => require.ensure([], () => r(require('@p/showComponents/showComponents')), 'show')
		},
		{
			name: 'login',
			path: '/login',
			component: r => require.ensure([], () => r(require('@p/login/login')), 'login')
		},
		{
			name: 'college',
			path: '/college',
			component: r => require.ensure([], () => r(require('@p/college/college')), 'college')
			
		},
		{
			name: 'articleList',
			path: '/articleList',
			component: r => require.ensure([], () => r(require('@p/articleList/articleList')), 'articleList')
		},
		{
			name: 'articleDetail',
			path: '/articleDetail/:id',
			component: r => require.ensure([], () => r(require('@p/articleDetail/articleDetail')), 'articleDetail')
		},
		{
			path: '/mine',
			component: r => require.ensure([], () => r(require('@p/mine/mine')), 'mine'),
			children: [
				{
					name: 'mine',
					path: '/mine',
					component: r => require.ensure([], () => r(require('@c/mineStudy/mineStudy')), 'mineStudy')
				},
				{
					path: '/mineStudy',
					name: 'mainStudy',
					component: r => require.ensure([], () => r(require('@c/classHistory/classHistory')), 'classHistory')
				},
				{
					name: 'collection',
					path: '/collection',
					component: r => require.ensure([], () => r(require('@c/collection/collection')), 'collection')
				},
				{
					name: 'accumulatePoints',
					path: '/accumulatePoints',
					component: r => require.ensure([], () => r(require('@c/accumulate/accumulate')), 'accumulate')
				}
			]
		}
	]
}

Vue.use(VueRouter);
export default new VueRouter(routes);