import Vue from 'vue';
import VueRouter from 'vue-router';

// import college from '@p/college/college';

const routes = [
	{
		path: '/show',
		component: r => require.ensure([], () => r(require('@p/showComponents/showComponents')), 'show')
	},
	{
		path: '/info',
		name: 'info',
		component: r => require.ensure([], () => r(require('@p/info/info')), 'info')
	},
	{
		path: '/video',
		component: r => require.ensure([], () => r(require('@p/video/video')), 'video')
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

Vue.use(VueRouter);
let vueRouter;

// 开发环境,vue-router采用hash模式,其他环境使用history模式
if (process.env.VUE_APP_CURRENTMODE == 'dev') {
	vueRouter =  new VueRouter({
		mode: 'history',
		routes
	});
} else {
	vueRouter = new VueRouter({
		mode: 'history',
		routes
	});
}

export default vueRouter