<template>
	<div class="app-container">
		<!-- <ul>
			<li>
				<div class="left">
					<p>
						<span>张三</span>
						<img src="../../assets/imgs/confirm.png" />
					</p>
					<p>技术研发-东莞市万瀚塑胶有限公司</p>
				</div>
				<div class="right">
					<p>2018.3.16</p>
					<p>
						<a :href="'tel:' + thistel">
							<img src="../../assets/imgs/call.png" />
							<span>一键拨号</span>
						</a>
					</p>
				</div>
			</li>
			<li>
				<div class="left">
					<p>
						<span>张三</span>
						<img src="../../assets/imgs/confirm.png" />
					</p>
					<p>技术研发-东莞市万瀚塑胶有限公司</p>
				</div>
				<div class="right">
					<p>2018.3.16</p>
					<p>
						<a :href="'tel:' + thistel">
							<img src="../../assets/imgs/call.png" />
							<span>一键拨号</span>
						</a>
					</p>
				</div>
			</li>
		</ul> -->
		<div v-for="(item,index) in collectionList" class="collectlists">
			<left-slider :index="index" @deleteItem="deleteItem">
				<span>{{item}}</span>
			</left-slider>
		</div>
	</div>
</template>

<script>
	import LeftSlider from '../delete.vue';
	export default {
		components: {
			LeftSlider
		},
		data() {
			return {
				thistel: "15652898912",
				collectionList: ['aa', 'bb', 'gg', 'hh', 'pp']
			}
		},
		methods: {
			// 删除
			deleteItem: function(index) {
				this.collectionList.splice(index, 1);
			}
		},
		mounted() {
			this.$store.dispatch('hideFooter');
		}
	}
</script>

<style lang="css" scoped>
	.collectlists {
		line-height: 30px;
	}
</style>