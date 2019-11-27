<template>
	<div>
		<p>
			<label for="loginName">用户名：</label>
			<input type="text" name="loginName" v-model="loginName">
		</p>
		<p>
			<label for="loginPassword">密码：</label>
			<input type="password" name="loginPassword" v-model="loginPassword">
		</p>
		<p>
			<button @click="login">登录</button>
		</p>
		
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	
	export default {
		name: 'login',
		data() {
			return {
				loginName: 'zhangbj',
				loginPassword: 'e10adc3949ba59abbe56e057f20f883e'
			}
		},
		computed: {
			...mapState(['token'])
		},
		created: function() {
			localStorage.removeItem('token');
			this.changeToken('');
		},
		methods:{
			login() {
				this.$api.login.login({
					loginName: this.loginName,
					loginPassword: this.loginPassword
				})
				.then(res => {
					// 登录成功，跳转到内部页面
					this.$router.push({
						path: '/mine'
					});
					// 登录成功,存储token
					// console.log(res);
					const token = `Bearer ${res.data.data}`;
					localStorage.setItem('token', token);
					this.changeToken(token); // 使用mapMutations简化代码
				})
				.catch(err => {
					console.log(err);
				});
			},
			...mapMutations(['changeToken'])
		}
		
	}
</script>

<style lang="scss">
</style>
