<template>
	<div class="inner-box content">
		<el-form class="filter" label-width="80px">
			<classify label="课程分类:" :btns="btns0" @changeClassify="changeClassify1"></classify>
			<classify label="子类:" :btns="btns1"></classify>
		</el-form>

		<sort></sort>

		<div class="clearfix">
			<div class="news-content">
				<ul class="news-list clearfix">
					<li v-for="item in 10" :key="item">
						<a href="#">
							<span class="time">2019-11-08</span>
							<span>坚持和完善我国新型政党制度坚持和完善我国新型政党制度坚持和完善我国新型政党制度坚持和完善我国新型政党制度</span>
						</a>
					</li>
				</ul>
				<el-pagination class="pagination" layout="prev, pager, next" hide-on-single-page :page-size="12" :total="100"></el-pagination>
			</div>

			<div class="news-sidebar">
				<div class="cards-news">
					<newsCard :msg="msg" v-for="item in 3" :key="item"></newsCard>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	import classify from '../../components/classify/classify';
	import sort from '../../components/sort/sort';
	import newsCard from '../../components/card/newsCard';
	export default {
		data() {
			return {
				activeName: 'article',
				btns: [{
						name: '全部',
						children: ['全部', '管理类', '销售类', '技工类']
					},
					{
						name: '思想政治',
						children: ['全部', '管理类0', '销售类0', '技工类0']
					},
					{
						name: '国防教育',
						children: ['全部', '管理类1', '销售类1', '技工类1']
					},
					{
						name: '就业技能',
						children: ['全部', '管理类2', '销售类2', '技工类2']
					}
				],
				btns1: [],
				msg: {
					img: require('../../assets/img/banner4.jpg'),
					title: '习近平出席庆祝空军成立70周年活动'
				}
			}
		},
		computed: {
			btns0() {
				let btns0 = [];
				for (let i = 0; i < this.btns.length; i++) {
					btns0.push(this.btns[i].name);
				}
				return btns0;
			}
		},
		methods: {
			...mapMutations(['changeMenu', 'changeSubMenu']),
			changeClassify1(e) {
				for (var i = 0; i < this.btns.length; i++) {
					if (this.btns[i].name === e) break;
				}
				this.btns1 = this.btns[i].children;
			},
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		created() {
			this.changeMenu('training');
			this.changeSubMenu('college');
			this.btns1 = this.btns[0].children;
		},
		components: {
			classify,
			sort,
			newsCard
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 20px 0 30px;
	}

	.el-form {
		background-color: #fff;
		border: 1px solid #e8e8e8;
		padding: 0 20px;

		&-item {
			border-bottom: 1px dashed #e8e8e8;
			padding: 10px 0;
			margin-bottom: 0 !important;

			&:last-child {
				border-bottom: 0;
			}
		}
	}

	.news-content {
		float: left;
		width: 920px;
		margin-top: 15px;
	}

	.news-list {
		li {
			height: 35px;
			line-height: 35px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size: 16px;
			color: $c-darken;

			a {
				color: $c-darken;

				&:hover {
					text-decoration: none;
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

	.news-sidebar {
		float: right;
		width: 240px;
		margin-top: 20px;
	}
</style>
