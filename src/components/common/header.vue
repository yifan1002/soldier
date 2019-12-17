<template>
	<div class="header">
		<div class="outer-box bg-gray">
			<div class="inner-box header-top">
				<span>欢迎登录系统!{{loginSuccess}}</span>
				<a href="#" class="header-top-right header-border-right" @click.prevent="logout" v-if="loginSuccess">
					<i class="logout"></i>
					<span>退出系统</span>
				</a>
				<router-link to="/login" class="header-top-right header-border-right" v-else>
					<i class="logout"></i>
					<span>登录系统</span>
				</router-link>
				<a class="header-top-right" href="javaScript:;">
					<i class="root"></i>
					<span>管理员</span>
				</a>
			</div>
		</div>
		<div class="outer-box">
			<div class="inner-box">
				<div class="header-middle">
					<div class="header-middle-left">
						<img class="header-middle-logo" src="~@a/img/logo.png" alt />
						<span class="header-middle-title">全国退役军人就业创业服务</span>
					</div>
					<div class="header-middle-right" style="float:right;">
						<el-input placeholder="请输入内容" v-model="inputValue" class="input-with-select">
							<el-select style="z-index:11111" class="header-middle-dropdown" v-model="select" slot="prepend" placeholder="职位类型1">
								<el-option label="餐厅名" value="1"></el-option>
								<el-option label="订单号" value="2"></el-option>
								<el-option label="用户电话" value="3"></el-option>
							</el-select>
							<el-button slot="append" icon="el-icon-search">搜索</el-button>
						</el-input>
					</div>
				</div>
			</div>
		</div>
		<div class="outer-box header-nav">
			<div class="inner-box">
				<ul class="header-nav-list" id="aaa">
					<li v-for="(item, index) in menus" :key="index" :class="{'router-link-exact-active': menuCurrent === item.url}">
						<div v-if="item.subMenus">
							<span v-if="item.url === '/home'" class="a home" :to="item.url">{{ item.title }}</span>
							<span v-else-if="item.url === '/mine'" class="a mine" :to="item.url">{{ item.title }}</span>
							<span v-else :to="item.url" class="a">{{ item.title }}</span>
						</div>
						<div v-else>
							<router-link v-if="item.url === '/home'" class="home" :to="item.url">{{ item.title }}</router-link>
							<router-link v-else-if="item.url === '/mine'" class="mine" :to="item.url">{{ item.title }}</router-link>
							<router-link v-else :to="item.url">{{ item.title }}</router-link>
						</div>
						<ul v-if="item.subMenus" class="header-nav-sub">
							<li v-for="(subItem, subIndex) in item.subMenus" :key="subIndex" :ref="subItem.url" @click.stop="saveMenu(item.url)">
								<router-link :to="subItem.url">{{ subItem.title }}</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import bus from "@u/bus";
	import { encrypt } from '@u/encrypt';
	export default {
		name: "Header",
		data() {
			return {
				menuCurrent: "/training",
				loginSuccess: false,
				inputValue: "",
				select: "",
				menus: [{
						title: "首页",
						url: "/home"
					},
					{
						title: "政策资讯",
						url: "/javascript:;"
					},
					{
						title: "招聘平台",
						url: "/recruitment",
						subMenus: [{
								title: "我的简历",
								url: "/resume"
							},
							{
								title: "职位查询",
								url: "/javascript:;"
							},
							{
								title: "应聘进度",
								url: "/javascript:;"
							},
							{
								title: "招聘会",
								url: "/javascript:;"
							}
						]
					},
					{
						title: "教育培训",
						url: "/training",
						subMenus: [{
								title: "学历教育",
								url: "/javascript:;"
							},
							{
								title: "培训",
								url: "/javascript:;"
							},
							{
								title: "网络学院",
								url: "/college"
							}
						]
					},
					{
						title: "我的空间",
						url: "/mine",
						subMenus: [{
								title: "个人信息",
								url: "/mine/userInfo"
							},
							{
								title: "我的积分",
								url: "/mine/accumulatePoints"
							},
							{
								title: "我的学习",
								url: "/mine/mineStudy"
							},
							{
								title: "就业状态确认",
								url: "/mine/javascript:;"
							},
							{
								title: "零就业家庭申请",
								url: "/mine/javascript:;"
							}
						]
					}
				]
			};
		},
		created() {
			if (localStorage.getItem(encrypt('token'))) {
				this.loginSuccess = true;
			}
			// 通过bus获取登录状态
			bus.$on("sendLoginState", value => {
				this.loginSuccess = value;
			});
			// window.addEventListener("visibilitychange", () => {
			// 	if (document.hidden) {
			// 		console.log("隐藏");
			// 	} else {
			// 		if (localStorage.getItem('token')) {
			// 			this.loginSuccess = true
			// 		} else {
			// 			this.loginSuccess = false
			// 		}
			// 	}
			// });
		},
		mounted() {
			// 页面直达模拟点击选中导航：如分享的地址、浏览器地址栏直接输入、外链输入等……
			let refName = window.location.pathname;
			// console.log(refName);
			// console.log(this.$refs);
			let _ref = this.$refs[refName];
			if (_ref) _ref[0].click();
		},
		// watch: {
		// 	'$route': function(newVal) {
		// 		console.log(newVal);
		// 		let menus = newVal.path.split('/');
		// 		let menu = menus[1];
		// 		console.log(menu);
		// 		this.menuCurrent = `/${menu}`;
		// 	}
		// },
		methods: {
			// 选中一级导航
			saveMenu(menu) {
				this.menuCurrent = menu;
			},
			logout() {
				this.$api.login
					.logout({})
					.then(res => {
						console.log(res);
						// 登出成功，清除token
						localStorage.removeItem(encrypt('loginTime'));
						localStorage.removeItem(encrypt('token'));
						localStorage.removeItem(encrypt('saveTime'));
						localStorage.removeItem(encrypt('loginName'));
						localStorage.removeItem(encrypt('loginPassword'));
						sessionStorage.setItem("url", "/mine/mineStudy");
						this.loginSuccess = false;
						// 跳转到登录页
						this.$router.push({
							name: "login"
						});
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.ivu-btn {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.bg-gray {
		background: #505050;
	}

	.header {
		margin-bottom: 45px;
	}

	.header-top {
		height: 30px;

		span {
			color: #fff;
			line-height: 30px;
			font-size: 14px;
		}

		&-right {
			text-align: center;
			float: right;
			width: 130px;
			height: 30px;
			border-left: 1px solid #3b3b3b;
		}

		.header-border-right {
			border-right: 1px solid #3b3b3b;
		}
	}

	.header-middle {
		height: 100px;
		width: 1200px;
		display: table-cell;
		vertical-align: middle;

		&-dropdown {
			width: 120px;
		}

		.input-with-select {
			width: 550px;
			margin-top: 10px;
		}

		&-title {
			font-size: 35px;
			line-height: 60px;
		}

		&-left {
			float: left;
		}

		&-right {
			float: right;

			/deep/ .el-input-group__append {
				background: #0090f5;
				color: #fff;
				border: 0;
			}
		}

		&-logo {
			float: left;
		}
	}

	.header-nav {
		position: absolute;
		z-index: 999;
		background: #0044c2;
		height: 45px;

		&-list {
			.router-link-exact-active {
				background: #0090f5;
			}

			li {
				float: left;
				width: 20%;
				text-align: center;

				a,
				.a {
					color: #fff;
					line-height: 45px;
					display: inline-block;
					width: 100%;
					height: 100%;
					cursor: pointer;

					&:hover {
						background: #0090f5;
					}

					&:before {
						display: inline-block;
						content: "";
						width: 17px;
						height: 20px;
						background: url(~@a/icon/applyinfo.png) no-repeat 0 0;
						background-size: 100%;
						margin-right: 5px;
						margin-top: -2px;
						vertical-align: middle;
					}

					&.home:before {
						width: 20px;
						height: 16px;
						background-image: url(~@a/icon/home.png);
						margin-top: -5px;
					}

					&.mine:before {
						width: 20px;
						height: 20px;
						background-image: url(~@a/icon/user.png);
					}
				}
			}

			& li:hover {
				.header-nav-sub li {
					display: block;
				}
			}
		}

		&-sub li {
			display: none;
			color: #000;
			width: 100%;
			height: 45px;
			background: #0044c2;
			border-top: 1px solid #699eff;

			a:before {
				display: none;
			}
		}
	}
</style>
