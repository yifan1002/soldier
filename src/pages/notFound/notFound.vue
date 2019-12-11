<template>
	<div class="error">
		<div class="error-inner">
			<empty text="对不起，访问不到页面！"></empty>
			<p style="margin-top: 20px;">
				<el-button type="primary" @click="goHome">返回首页</el-button>
			</p>
		</div>
	</div>
</template>

<script>
	import empty from '@c/empty/empty';
	export default {
		name: 'serverError',
		data() {
			return {
				
			}
		},
		methods: {
			goHome() {
				this.$router.push({
					path: '/'
				});
			}
		},
		components: {
			empty
		}
	}
</script>

<style lang="scss">
	body {
		background-color: #f8f8f8;
	}
	.error {
		
		&-inner {
			width: 400px;
			margin: 0 auto;
			padding: 100px 0;
			text-align: center;
		}
	}
</style>
