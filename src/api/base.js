/**
 * 接口域名的管理
 */
let base = {
	url: '', // 基础api网关，修改该值使用
	sq: 'https://api.apiopen.top',
	bd: 'https://c.y.qq.com'
}

if (process.env.VUE_APP_CURRENTMODE == 'dev') {
	base.url = '/api';
} else if (process.env.VUE_APP_CURRENTMODE == 'test') {
	base.url = 'http://dev2.exstudy.com/api';
} else if (process.env.VUE_APP_CURRENTMODE == 'pro') {
	base.url = 'http://dev2.exstudy.com/api';
}

export default base;
