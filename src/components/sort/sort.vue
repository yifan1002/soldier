<template>
	<div class="sort">
		<sort-label :labels="labels" :labelValue="labelValue"></sort-label>
		<sort-cut :labels="labelsCut" :labelValue="labelValueCut"></sort-cut>
	</div>
</template>

<script>
	import sortLabel from '../../components/sort/sort-label';
	import sortCut from '../../components/sort/sort-cut';
	
	export default {
		props: {
			
		},
		data() {
			return {
				labels: [{
					title: '文章（23）',
					url: 'newsList'
				},
				{
					title: '视频课（150）',
					url: 'videoList'
				}],
				labelValue: '文章（23）',
				labelsCut: ['时间倒序', '浏览量倒序'],
				labelValueCut: '时间倒序'
			}
		},
		methods: {
			
		},
		components: {
			sortLabel,
			sortCut
		}
	}
</script>

<style lang="scss">
	.sort {
		height: 48px;
		background-color: #fff;
		border: 1px solid #e8e8e8;

		.filter+& {
			margin-top: 15px;
		}

	}
</style>
