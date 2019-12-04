/**
 * 积分记录模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import base from './base'; // 导入接口域名列表
const mark = {
	// login登录 
	mark(params) {
		return axios.get(`${base.url}/center/pointRecord`, params);
	}
	// 其他接口…………
}

export default mark;
