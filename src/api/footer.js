
/**
 * footer模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import base from './base'; // 导入接口域名列表
// import qs from 'qs'; // 根据需求是否导入qs模块

const footer = {
	// 获取文章列表
	footer(params) {
		return axios.get(`${base.url}/footer/getHtml`, {params});
	},

	
	// 其他接口…………
}

export default footer;
