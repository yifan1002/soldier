/** 
 *  DES/AES对称加解密
 *  秘钥应该是8、16或32位
 *  简版加密秘钥固定不变,主要用于加密本地存储的关键字key加密
 */

import CryptoJS from 'crypto-js';

const enCode = ['F*', 'g_', '@K', '+=']; // 秘钥拼接字符

// 根据时间戳动态加解密
let desKey = time => {
	let timeTen = Math.round(time / 1000).toString();
	return enCode[0] + timeTen.substring(0, 5) + enCode[1] + timeTen.substring(5) + enCode[2];
}
// 简版加密
const simpleKey = enCode.join().replace(/,/g, '');

// 加密
let encrypt = (word, key = simpleKey) => {
	let ckey = CryptoJS.enc.Utf8.parse(key);
	let encrypted = CryptoJS.DES.encrypt(word, ckey, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	})
	return encrypted.toString();
}

// 解密
let decrypt = (word, key = simpleKey) => {
	let ckey = CryptoJS.enc.Utf8.parse(key);
	let decrypt = CryptoJS.DES.decrypt(word, ckey, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	})
	let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
	return decryptedStr.toString()
}

export {
	desKey,
	encrypt,
	decrypt
}
