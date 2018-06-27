<template>
	<div class="app-container">
		<div class="header">
			我的电子名片
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			this.$store.dispatch('hideFooter');
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.app-container{
		background-color: #f2f2f2;
		.header{
			width: 100%;
			height: 140px;
			background-color: #0092ff;
		}
	}
</style>