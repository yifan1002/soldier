/**
 * 学习记录模块接口列表
 */
import axios from './http'; // 导入http中创建的axios实例
import base from './base'; // 导入接口域名列表
import qs from 'qs'; // 根据需求是否导入qs模块

const recordList = {
	// 文章记录
	articleRecordList(params) {
		return axios.get(`${base.url}/center/myArticleRecordList`,{params});
	},
    // 视频记录
    vodRecordList(params) {
		return axios.get(`${base.url}/center/myVodRecordList`,{params});
    },
    lessonRecordList(params) {
		return axios.get(`${base.url}/center/myLessonRecordList`,{params});
    },
    cancelLesson(params) {
		return axios.post(`${base.url}/center/cancelLessonUserReport`,qs.stringify(params));
    },
    
}

export default recordList;
