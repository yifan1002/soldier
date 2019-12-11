import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
	// 重定向到主页
	{
		path:'/',
		redirect: {
			name: 'college'
		},
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
		component: r => require.ensure([], () => r(require('@p/login/login')), 'login'),
		// 路由守卫,进入登录页清除token
		beforeEnter: (to, from, next) => {
			localStorage.removeItem('token');
			console.log(to, from);
			next();
		}
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
		meta: {
			needLogin: true //需要登录
		},
		children: [
			{
				name: 'mine',
				path: '/mine',
				component: r => require.ensure([], () => r(require('@c/mineStudy/mineStudy')), 'mineStudy'),
				meta: {
					needLogin: true
				}
			},
			{
				path: '/mineStudy',
				name: 'mainStudy',
				component: r => require.ensure([], () => r(require('@c/classHistory/classHistory')), 'classHistory'),
				meta: {
					needLogin: true
				}
			},
			{
				name: 'collection',
				path: '/collection',
				component: r => require.ensure([], () => r(require('@c/collection/collection')), 'collection'),
				meta: {
					needLogin: true
				}
			},
			{
				name: 'accumulatePoints',
				path: '/accumulatePoints',
				component: r => require.ensure([], () => r(require('@c/accumulate/accumulate')), 'accumulate'),
				meta: {
					needLogin: true
				}
			}
		]
	},
	// 500
	{
		name: 'serverError',
		path: '/serverError',
		component: r => require.ensure([], () => r(require('@p/serverError/serverError')), 'serverError'),
		meta: {
			onlyPage: true
		}
	},
	// 404
	{
		name: 'notFound',
		path: '*',
		component: r => require.ensure([], () => r(require('@p/notFound/notFound')), 'notFound'),
		meta: {
			onlyPage: true
		}
	}
]

Vue.use(VueRouter);

// let router;
// // 开发环境,vue-router采用hash模式,其他环境使用history模式
// if (process.env.VUE_APP_CURRENTMODE == 'dev') {
// 	router =  new VueRouter({
// 		routes
// 	});
// } else {
// 	router = new VueRouter({
// 		mode: 'history',
// 		routes
// 	});
// }

export default new VueRouter({
	mode: 'history',
	routes
});