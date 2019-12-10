<template>
	<div class="login">
		<p>
			<label for="loginName">用户名：</label>
			<input type="text" name="loginName" v-model="loginName">
		</p>
		<p>
			<label for="loginPassword">密码：</label>
			<input type="password" name="loginPassword" v-model="loginPassword">
		</p>
		<p>
			<label for=""></label>
			<button @click="login">登录：{{time | formatDate}}</button>
		</p>

	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	
	export default {
		name: 'login',
		data() {
			return {
				loginName: 'zhangbj',
				loginPassword: 'e10adc3949ba59abbe56e057f20f883e',
				time: new Date().getTime()
			}
		},
		computed: {
			...mapState(['token'])
		},
		methods: {
			login() {
				this.$api.login.login({
						loginName: this.loginName,
						loginPassword: this.loginPassword
					})
					.then(res => {
						console.log(res);
						// 登录成功，跳转到内部页面
						this.$router.push({
							path: '/mine'
						});
						// 登录成功,存储token
						console.log(res.data.data.token)
						const token = `Bearer ${res.data.data.token}`;
						localStorage.setItem('token', token);
						this.changeToken(token); // 使用mapMutations简化代码
						this.loginSuccess(true);
					})
					.catch(err => {
						console.log(err);
					});
			},
			...mapMutations(['changeToken', 'loginSuccess'])
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
