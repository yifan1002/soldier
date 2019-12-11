<template>
	<div class="login">
		<el-form ref="form" label-width="80px">
			<el-form-item label="用户名">
				<el-input v-model="loginName"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input type="password" v-model="loginPassword" @keyup.enter.native="login"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login">登录：{{time | formatDate}}</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				loginName: 'zhangbj',
				loginPassword: '123456',
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
						// console.log(res);
						// 登录成功，存储token
						// console.log(res.data.data.token)
						const token = `Bearer ${res.data.data.token}`;
						localStorage.setItem('token', token);
						// 登录成功，将登录状态传递给header组件
						this.$root.$emit('sendLoginState', true);
						// 登录成功，跳转到内部页面
						let url = sessionStorage.getItem('url');
						if (!url) url = '/mine';
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

		label {
			float: left;
			display: block;
			width: 100px;
			height: 20px;
			text-align: right;
		}
	}
</style>
