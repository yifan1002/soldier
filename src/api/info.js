
/**
 * 资讯课详情模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import base from './base'; // 导入接口域名列表
import qs from 'qs'; // 根据需求是否导入qs模块

const info = {
	// 获取文章列表
	info(params) {
		return axios.get(`${base.url}/article/articleDetail`, {params});
	},
	clickCollect(params) {
		return axios.post(`${base.url}/article/clickCollect`, qs.stringify(params));
	},
	clickGood(params) {
		return axios.post(`${base.url}/article/clickGood`, qs.stringify(params));
	},

}

export default info;
