/**
 * 基础参数配置
 */
let base = {
	url: '', // 基础api网关，修改该值使用
	sq: 'https://api.apiopen.top', //有多个网关另外增加
	bd: 'https://c.y.qq.com',
	retry: false // 请求失败是否重新请求，默认false
}

if (process.env.VUE_APP_CURRENTMODE == 'dev') {
	base.url = '/api';
} else if (process.env.VUE_APP_CURRENTMODE == 'test') {
	base.url = 'http://dev2.exstudy.com/api';
} else if (process.env.VUE_APP_CURRENTMODE == 'pro') {
	base.url = 'http://dev2.exstudy.com/api';
}

export default base;
