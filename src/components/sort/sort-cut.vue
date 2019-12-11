<template>
	<ul class="sort-cut">
		<li v-for="(label, index) in labels" :key="index" :class="label === value ? 'active': ''" @click="changeValue(label, index)">{{ label }}</li>
	</ul>
</template>

<script>
	export default {
		props: {
			labels: {
				type: Array,
				default: function() {
					return ['时间倒序', '浏览量倒序']
				}
			},
			labelValue: {
				type: String,
				default: '时间倒序'
			}
		},
		data() {
			return {
				value: '时间倒序'
			}
		},
		methods: {
			changeValue(label, index) {
				this.value = label;
				this.$emit('change', label, index);
			}
		},
		created: function() {
			this.value = this.labelValue
		}
	}
</script>

<style lang="scss">
	.sort-cut {
		float: right;
		display: inline-block;
		margin: 15px 15px 0 0;

		li {
			display: inline-block;
			height: 15px;
			line-height: 15px;
			margin-left: 15px;
			color: #353535;
			cursor: pointer;

			&:before {
				display: inline-block;
				content: '';
				width: 17px;
				height: 15px;
				background: url(../../assets/icon/sort.png) no-repeat 0 0;
				margin: 0 3px -2px 0;
			}

			&:hover {
				text-decoration: none;
				color: $c-primary;

				&:before {
					background-position: 0 -15px;
				}
			}

			&.active {
				color: $c-primary;

				&:before {
					background-position: 0 -30px;
				}
			}
		}
	}
</style>
