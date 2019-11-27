/**
 * 我的收藏模块接口
 */
import axios from './http'; // 导入http中创建的axios实例
// import base from './base'; // 导入接口域名列表
//import qs from 'qs'; // 根据需求是否导入qs模块

const collect = {
	// 收藏列表 
	collect(params) {
		return axios.get(`/api/center/collectList`, {params});
	}
	
}

export default collect;
