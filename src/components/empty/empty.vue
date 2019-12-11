<template>
	<div class="page-error">
		<p>{{text}}</p>
	</div>
</template>

<script>
	export default {
		name: 'empty',
		props: {
			text: {
				type: String
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.page-error {
		background: url(../../assets/empty/page.png) no-repeat center 50px;
		padding-top: 300px;
		text-align: center;
		font-size: 18px;
		color: #121212;
	}
</style>
