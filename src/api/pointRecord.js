/**
 * 积分记录模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import base from './base'; // 导入接口域名列表
// import qs from 'qs'; // 根据需求是否导入qs模块

const pointRecord = {
	// 获取积分记录
	pointRecord(params) {
		return axios.get(`${base.url}/center/pointRecord`, {params});
	}
}

export default pointRecord;
