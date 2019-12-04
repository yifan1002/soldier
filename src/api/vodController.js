/**
 * news模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import base from './base'; // 导入接口域名列表
// import qs from 'qs'; // 根据需求是否导入qs模块

const vod = {
	// 新闻列表
	vodList(params) {
		return axios.get(`${base.url}/vod/vodList`, {params});
	},
	// 网络学院主页视频
	homeVods(params) {
		return axios.get(`${base.url}/college/homeVods`, {params});
	},
	// 其他接口…………
}

export default vod;
