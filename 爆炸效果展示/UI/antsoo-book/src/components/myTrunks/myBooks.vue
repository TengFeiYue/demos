<template>
	<div class="app-container">
		<h1>我的通讯录</h1>
	</div>
</template>

<script>
	export default {
		name: 'myBooks',
		data() {
			return {
//				thisMsg: this.msg,
			}
		},
		mounted() {
			this.$store.dispatch('hideFooter');
		}
	}
</script>

<style>
	
</style>