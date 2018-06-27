<template>
	<div class="app-container">
		<ul>
			<li>
				<div class="left">
					<p>
						<span>张三</span>
						<img src="../../assets/imgs/confirm.png"/>
					</p>
					<p>技术研发-东莞市万瀚塑胶有限公司</p>
				</div>
				<div class="right">
					<p>2018.3.16</p>
					<p>
						<a :href="'tel:' + thistel">
							<img src="../../assets/imgs/call.png"/>
							<span>一键拨号</span>
						</a>  
					</p>
				</div>
			</li>
			<li>
				<div class="left">
					<p>
						<span>张三</span>
						<img src="../../assets/imgs/confirm.png"/>
					</p>
					<p>技术研发-东莞市万瀚塑胶有限公司</p>
				</div>
				<div class="right">
					<p>2018.3.16</p>
					<p>
						<a :href="'tel:' + thistel">
							<img src="../../assets/imgs/call.png"/>
							<span>一键拨号</span>
						</a>  
					</p>
				</div>
			</li>
			<li>
				<div class="left">
					<p>
						<span>张三</span>
						<img src="../../assets/imgs/confirm.png"/>
					</p>
					<p>技术研发-东莞市万瀚塑胶有限公司</p>
				</div>
				<div class="right">
					<p>2018.3.16</p>
					<p>
						<a :href="'tel:' + thistel">
							<img src="../../assets/imgs/call.png"/>
							<span>一键拨号</span>
						</a>  
					</p>
				</div>
			</li>
			<li>
				<div class="left">
					<p>
						<span>张三</span>
						<img src="../../assets/imgs/confirm.png"/>
					</p>
					<p>技术研发-东莞市万瀚塑胶有限公司</p>
				</div>
				<div class="right">
					<p>2018.3.16</p>
					<p>
						<a :href="'tel:' + thistel">
							<img src="../../assets/imgs/call.png"/>
							<span>一键拨号</span>
						</a>  
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				thistel:"15652898912"
			}
		},
		mounted() {
			this.$store.dispatch('hideFooter');
		}
	}
</script>

<style lang="less" scoped>
	.app-container{
		ul{
			width: 100%;
			overflow: hidden;
			li{
				width: 100%;
				height: 68px;
				margin-bottom: 10px;
				background-color: #fff;
				padding: 10px 15px;
				.left, .right{
					height: 100%;
					float: left;
					p{
						height: 24px;
						width: 100%;
						line-height: 24px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						a{
							display: block;
							height: 100%;
							width: 100%;
						}
						span{
							margin-right: 10px;
						}
						img{
							display: inline-block;
							vertical-align: middle;
						}
					}
				}
				.left{
					width: 80%;
				}
				.right{
					width: 20%;
				}
			}
		}
	}
</style>