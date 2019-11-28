const formatDate = function(time, format = 'yyyy-MM-dd hh:mm:ss') {
	let re = /-?\d+/;
	let m = re.exec(time);
	let d = new Date(parseInt(m[0]));
	let o = {
		'M+': d.getMonth() + 1, //month
		'd+': d.getDate(), //day
		'h+': d.getHours(), //hour
		'm+': d.getMinutes(), //minute
		's+': d.getSeconds(), //second
		'q+': Math.floor((d.getMonth() + 3) / 3), //quarter
		'S': d.getMilliseconds() //millisecond
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (let k in o) {
		if (new RegExp('(' + k + ')').test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
	}
	return format;
}

export {
	formatDate
}
