<template>
	<div class="login">
		<el-form ref="form" label-width="80px">
			<el-form-item label="用户名">
				<el-input v-model="loginName"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input type="password" v-model="loginPassword" @keyup.enter.native="login"></el-input>
			</el-form-item>
			<el-form-item label="">
				<el-checkbox v-model="remember">记住我</el-checkbox>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login">登录：{{time | formatDate}}</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import bus from '@u/bus';
	import { desKey, encrypt } from '@u/encrypt';
	export default {
		name: 'login',
		data() {
			return {
				loginName: 'zhangbj',
				loginPassword: '123456',
				remember: false,
				time: new Date().getTime()
			}
		},
		methods: {
			login() {
				this.$api.login.login({
						loginName: this.loginName,
						loginPassword: this.$md5(this.loginPassword)
					})
					.then(res => {
						console.log(res);
						// 登录成功，存储token和时间戳，用于aes加密秘钥和保存密码过期使用
						let token = `Bearer ${res.data.data.token}`;
						let loginTime = new Date().getTime();
						localStorage.setItem(encrypt('loginTime'), loginTime);
						localStorage.setItem(encrypt('token'), token);
						// 登录成功，将登录状态传递给header组件
						bus.$emit('sendLoginState', true);
						
						// 登录成功，如果勾选了记住用户信息，需要保存用户名和密码，token过期后，要自动登录
						if (this.remember === true) {
							let saveTime = new Date().setDate(new Date().getDate() + 10);
							localStorage.setItem(encrypt('saveTime'), saveTime);
							localStorage.setItem(encrypt('loginName'), encrypt(this.loginName, desKey(loginTime)));
							localStorage.setItem(encrypt('loginPassword'), this.$md5(this.loginPassword));
						} else{
							localStorage.removeItem(encrypt('saveTime'));
							localStorage.removeItem(encrypt('loginName'));
							localStorage.removeItem(encrypt('loginPassword'));
						}
						
						// 登录成功，跳转到内部页面
						let url = sessionStorage.getItem('url');
						if (!url) url = '/mine/mineStudy';
						this.$router.push({
							path: url
						});
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	}
</script>

<style lang="scss">
	.login {
		width: 400px;
		margin: 100px auto;

		p {
			margin-bottom: 20px;
		}
		
		.el-form-item {
			& > label {
				float: left;
				display: block;
				width: 100px;
				height: 20px;
				text-align: right;
			}
		}
	}
</style>
