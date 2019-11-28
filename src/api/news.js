/**
 * news模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
// import base from './base'; // 导入接口域名列表
// import qs from 'qs'; // 根据需求是否导入qs模块

const news = {
	// 获取文章列表
	articleList(params) {
		return axios.get(`/api/article/articleList`, {params});
	},
	// 获取轮播图列表
	bannerList(params) {
		return axios.get(`/api/article/bannerList`, {params});
	},
	// 其他接口…………
}

export default news;
