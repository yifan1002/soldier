/**
 * collectVod模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import base from './base'; // 导入接口域名列表
import qs from 'qs'; // 根据需求是否导入qs模块

const collectVod = {
	//收藏文章
	collectVod(params) {
		return axios.post(`${base.url}/vod/clickCollect`, qs.stringify(params));
	}
	// 其他接口…………
}

export default collectVod;
