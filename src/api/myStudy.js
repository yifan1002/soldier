/**
 * news模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import base from './base'; // 导入接口域名列表
// import qs from 'qs'; // 根据需求是否导入qs模块

const myStudy = {
	// 
	myRecentStudyVod() {
		return axios.get(`${base.url}/center/myRecentStudyVod`);
	},
	myGetPoint() {
		return axios.get(`${base.url}/center/myGetPoint`);
	},
	myStudyCount() {
		return axios.get(`${base.url}/center/myStudyCount`);
	},

}
export default myStudy;
