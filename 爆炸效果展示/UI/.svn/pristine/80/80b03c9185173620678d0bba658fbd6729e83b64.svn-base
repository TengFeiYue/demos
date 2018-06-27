<template>
	<div class="app-container">
		<textarea class="edit" name="" rows="" cols="" placeholder="请输入你要找的信息"></textarea>
		<p>{{msg}}</p>
		<button>提交</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '18202112896'
			}
		},
		mounted() {
			this.$store.dispatch('hideFooter');
		}
	}
</script>

<style lang="less" scoped>
	@bgColor: #fff;
	.app-container{
		.edit{
			display: block;
			height: 150px;
			width: 100%;
			background: @bgColor;
			resize: none;
			padding: 15px;
		}
		p{
			margin-top: 10px;
			line-height: 44px;
			padding: 0 15px;
			background-color: @bgColor;
		}
		button{
			display: block;
			background-color: #0092ff;
			height: 50px;
			width: 100%;
			position: fixed;
			bottom: 0;
			color: @bgColor;
		}
	}
</style>