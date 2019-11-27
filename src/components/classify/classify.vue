<template>
	<el-form-item :label="label">
		<el-radio-group size="mini" v-model="value" @change="changeClassify">
			<el-radio-button v-for="(btn, index) in btns" :label="btn" :key="index"></el-radio-button>
		</el-radio-group>
	</el-form-item>
</template>

<script>
	export default {
		props: {
			// value: {
			// 	type: [String, Number]
			// },
			label: {
				type: String,
				default: '标题头'
			},
			btns: {
				type: Array,
				default: function() {
					return ['全部']
				}
			}
		},
		data() {
			return {
				value: '全部'
			}
		},
		methods: {
			changeClassify() {
				this.$emit('changeClassify', this.value);
			}
		}
	}
</script>

<style lang="scss">
	.el-radio-button {
		margin: 5px 8px 5px 0;
		
		&__inner {
			border: 0 !important;
			border-radius: 4px !important;
		}
	}
	
	.el-radio-button__orig-radio:checked+.el-radio-button__inner {
		border-left-color: #409EFF !important;
	}
</style>
