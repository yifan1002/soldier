<template>
	<div id="app">
		<Header v-if='!this.$route.meta.onlyPage'></Header>
		<transition
			mode="out-in"
			enter-active-class="animated animatedFast bounceInLeft"
			leave-active-class="animated bounceOutRight"
		>
			<router-view></router-view>
		</transition>
		<Footer class="footer" v-if='!this.$route.meta.onlyPage'></Footer>
	</div>
</template>

<script>
	import Header from "@c/common/header";
	import Footer from "@c/common/footer";
	import "@a/css/normalize.css";

	export default {
		name: "app",
		components: {
			Header,
			Footer
		},
		created(){
		}
	};
</script>

<style lang="scss">
	body,
	html {
		height: 100%;
		overflow-x: hidden;
	}

	.footer {
		position: absolute;
		bottom: 0;
	}

	#app {
		position: relative;
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		padding-bottom: 100px;
	}

	.info-class {
		color: $c-darken;
		font-size: 16px;
		line-height: 35px;

		&:hover span {
			color: #0090f5;
		}

		&-time {
			float: right;
			color: $c-light;
		}

		&-title {
			display: inline-block;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			width: 800px;
		}
	}

	.badge {
		background: #fd5642;
		color: #fff;
		display: inline-block;
		font-size: 12px;
		line-height: 20px;
		border-radius: 10px;
		border-bottom-left-radius: 0;
		padding: 0 10px;
		margin-right: 5px;
		vertical-align: top;

		&.bg-gray {
			background: #b2b2b2;
		}
	}

	.mine-title {
		font-size: 18px;
		color: $c-darken;
		margin-bottom: 15px;
	}

	//tab样式修改
	.mytab {
		.el-tabs__nav {
			margin-top: -15px;
		}

		.el-tabs__item {
			box-sizing: content-box;
			text-align: center;
			font-size: 16px;
			padding: 0;
			width: 64px;
			line-height: 46px;
			height: 50px;

			&+.el-tabs__item {
				padding-left: 20px;
			}
		}
	}

	//修改分页样式
	.pagination {
		text-align: center;

		li.number {
			border: 1px solid #ccc;
			margin-left: 10px;
			border-radius: 2px;
			min-width: 30px;
			height: 30px;
			color: #666;
		}

		.el-pagination .btn-prev,
		.btn-next {
			border: 1px solid #ccc;
			min-width: 30px;
			height: 30px;
			border-radius: 2px;
			padding: 0 9px 0 9px;
		}

		.el-pagination .btn-next {
			margin-left: 10px;
			padding: 0 9px 0 9px;
		}

		.el-pager li.active {
			border: 1px solid #26afff;

			&+li {
				border-left: 1px solid #ccc;
			}
		}
	}

	.m-r-0 {
		margin-right: 0;
	}

	.m-r-20 {
		margin-right: 20px !important;
	}

	.icon-home {
		width: 20px;
		height: 16px;
		background: url(../src\assets\icon\home.png) no-repeat 0 0;
		margin-right: 5px;
	}

	.icon-applyinfo {
		width: 17px;
		height: 20px;
		background: url(../src\assets\icon\applyinfo.png) no-repeat 0 0;
		margin-right: 5px;
		vertical-align: middle;
	}

	//个人中心页面标题样式
	.main-mine-title {
		color: $c-darken;
		font-size: 18px;
		font-weight: 400;
		line-height: 46px;
	}

	//布局 1200px居中
	.outer-box {
		width: 100%;
		height: 100%;
	}

	.inner-box {
		width: 1200px;
		margin: 0 auto;
	}

	i {
		display: inline-block;
	}

	// 图表
	/* 日期图标 */
	.date {
		width: 14px;
		height: 14px;
		background: url(../src/assets/img/date.png) no-repeat 0 0;
		vertical-align: middle;
		margin-right: 5px;
	}

	/* 浏览人数 */
	.nums {
		width: 20px;
		height: 12px;
		background: url(../src/assets/img/nums.png) no-repeat 0 0;
		vertical-align: middle;
		margin-right: 5px;
	}

	/* 浏览次数 */
	.times {
		width: 14px;
		height: 14px;
		background: url(../src/assets/img/times.png) no-repeat 0 0;
		vertical-align: middle;
		margin-right: 5px;
	}

	a {
		text-decoration: none;

		&:hover {
			color: $c-primary;
		}
	}

	ul {
		padding: 0;
	}

	li {
		list-style: none;
	}

	.root {
		display: inline-block;
		vertical-align: middle;
		width: 24px;
		height: 24px;
		background: url(../src/assets/icon/user.png) no-repeat 0 0;
		margin: 0px 10px 0 0;
		line-height: 30px;
	}

	.logout {
		display: inline-block;
		vertical-align: middle;
		width: 24px;
		height: 24px;
		background: url(../src/assets/icon/logout.png) no-repeat 0 0;
		margin: 6px 10px 0 0;
	}

	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
	}

	.clearfix:after,
	.clearfix:before {
		content: "";
		display: table;
	}

	.clearfix:after {
		clear: both;
	}

	.clearfix {
		*zoom: 1;
	}
</style>
