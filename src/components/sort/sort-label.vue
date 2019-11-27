<template>
	<ul class="sort-label">
		<li v-for="(label, index) in labels" :key="index" :class="label.title === value ? 'active': ''" @click="changeValue(label, index)">
		<router-link :to="label.url">{{ label.title }}</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			labels: {
				type: Array,
				default: function() {
					return []
				}
			},
			labelValue: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				value: ''
			}
		},
		methods: {
			changeValue(label, index) {
				this.value = label.title;
				this.$emit('change', label, index);
			}
		},
		created: function() {
			this.value = this.labelValue
		}
	}
</script>

<style lang="scss">
	@import './src/var.scss';
	
	.sort-label {
		float: left;
		display: inline-block;

		li {
			position: relative;
			float: left;
			display: inline-block;
			height: 28px;
			padding: 20px 10px 0;
			margin: 0 20px;
			font-size: 16px;
			cursor: pointer;

			&:before {
				position: absolute;
				right: 0;
				bottom: -1px;
				left: 0;
				display: block;
				content: " ";
				height: 2px;
				
			}

			&.active {
				color: $c-primary;
				
				&:before {
					background-color: $c-primary;
				}
			}
			
			a {
				color: $c-darken;
				
				&:hover {
					color: $c-primary;
				}
			}
		}
	}
</style>
