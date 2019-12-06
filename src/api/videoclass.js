/**
 * 视频详情模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import base from './base'; // 导入接口域名列表
const videoclass = {
	
	vodDetail(params) {
		return axios.get(`${base.url}/vod/vodDetail`, {params});
	}
	// 其他接口…………
}

export default videoclass;
