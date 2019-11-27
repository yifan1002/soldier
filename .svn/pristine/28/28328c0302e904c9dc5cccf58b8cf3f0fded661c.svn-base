<template>
	<div>
		<div class="college-banner outer-box">
			<div class="inner-box">
				<el-carousel :interval="4000" :autoplay="false" type="card" height="370px" indicator-position="none" arrow="always">
					<el-carousel-item v-for="item in 6" :key="item" :style="{'background-image' : 'url(' + require('../../assets/img/banner4.jpg') + ')'}">
						<h3 class="medium">{{ item }} - 文章标题</h3>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>

		<div class="inner-box">
			<div class="college-column">
				<div class="college-column-header">
					<router-link to="newsList" class="college-column-more">更多</router-link>
					<span class="college-column-title">阅读文章</span>
				</div>
				<div class="college-column-body">
					<ul class="news-list clearfix">
						<li v-for="item in 10" :key="item">
							<a href="#">
								<span class="time">2019-11-08</span>
								<span>坚持和完善我国新型政党制度坚持和完善我国新型政党制度坚持和完善我国新型政党制度坚持和完善我国新型政党制度</span>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="college-column">
				<div class="college-column-header">
					<router-link to="videosList" class="college-column-more">更多</router-link>
					<span class="college-column-title">视频课</span>
				</div>
				<div class="college-column-body">
					<div class="mine-video-list">
						<mineVideo v-for="item in 8" :key="item" :msg="msg" size="mine-video-lg"></mineVideo>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mineVideo from "../../components/card/mineVideoCard";
	import {
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				msg: {
					title: "电焊基础手焊基础手法指法指法指法指导",
					nums: 550,
					times: 3,
					date: "2019-11-11",
					src: require("../../../src/assets/img/class2.png")
				}
			}
		},
		computed: {

		},
		methods: {
			...mapMutations(['changeMenu', 'changeSubMenu'])
		},
		created() {
			this.changeMenu('training');
			this.changeSubMenu('college');
		},
		components: {
			mineVideo
		}
	}
</script>

<style lang="scss">
	@import "./src/var.scss";

	.college-banner {
		height: 370px;
		background-color: #0053c3;
		padding: 15px 0;
	}

	.college-column {
		&-header {
			padding: 30px 0 15px;
			border-bottom: 2px solid $c-darken;
			line-height: 1;
		}

		&-title {
			font-size: 26px;
			color: $c-darken;
		}

		&-more {
			float: right;
			margin-top: 15px;
			color: $c-dark;

			&:hover {
				text-decoration: none;
				color: $c-primary;
			}
		}

		&-body {
			padding-top: 15px;
		}

		.news-list {
			margin-right: -44px;

			li {
				float: left;
				width: 578px;
				margin-right: 44px;
				height: 35px;
				line-height: 35px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 16px;
				color: #333;

				a {
					color: $c-darken;

					&:hover {
						color: $c-primary;

						span.time {
							color: $c-primary;
						}
					}
				}

				span.time {
					float: right;
					margin-left: 10px;
					color: $c-light;
				}
			}
		}
	}
	
	.mine-video-list {
		margin-right: -20px;
	}

	.el-carousel {
		&__item {
			position: relative;
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;

			h3 {
				position: absolute;
				right: 0;
				bottom: 0;
				left: 0;
				height: 40px;
				line-height: 40px;
				padding: 0 20px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				*background-color: #000;
				background-color: rgba(0, 0, 0, .5);
				text-align: center;
				font-size: 16px;
				color: #fff;
			}
		}

		&__arrow {
			width: 46px !important;
			height: 60px !important;
			background: url(../../assets/img/left.png) no-repeat transparent;
			border-radius: 0 !important;

			i {
				display: none;
			}

			&--right {
				background-image: url(../../assets/img/right.png);
			}
		}
	}
</style>
