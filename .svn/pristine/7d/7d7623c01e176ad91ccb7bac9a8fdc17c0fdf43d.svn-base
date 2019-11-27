<template>
	<div class="card">
		<a href="#">
			<div class="card-body">
				<span class="card-media" :style="{'background-image' : 'url(' + msg.img + ')'}"></span>
				<span class="card-title">{{ msg.title }}</span>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		props: ["msg"]
	};
</script>

<style lang="scss" scoped>
	@import '../../var.scss';

	.card {
		width: 240px;
		height: 165px;

		&+.card {
			margin-top: 10px;
		}

		a {
			display: block;
			height: 165px;
			border: 1px solid $c-white;
			color: $c-darken;

			&:hover {
				text-decoration: none;
				border-color: $c-primary;
				color: $c-primary;
			}
		}

		&-media {
			display: block;
			width: 238px;
			height: 133px;
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
		}

		&-title {
			height: 30px;
			line-height: 30px;
			padding: 0 4px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size: 14px;
		}
	}
</style>
