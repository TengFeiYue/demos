<template>
	<div class="my">
		<img class="head-bg" src="../assets/imgs/bg.png" />
		<div class="mybanner" ref="mybanner">
			<img class="userlogo" src="../assets/imgs/headImg.png">
			<div class="userName">
				<span>这只Baymax不太冷</span>
				<img src="../assets/imgs/confirm.png" />
			</div>
		</div>
		<div class="myFunction" ref="myFun">
			<router-link tag='div' class="fun-card" :to="{ name: 'myElecCard', params: {} }">
				<span class="fun-left">我的电子名片</span>
				<div class="fun-rigth">
					<img src="../assets/imgs/than.png">
					<span>电子社交更便捷</span>
				</div>
			</router-link>
			<router-link tag='div' class="fun-card" :to="{ name: 'collect', params: {} }">
				<span class="fun-left">我的收藏</span>
				<div class="fun-rigth">
					<img src="../assets/imgs/than.png">
					<span>5</span>
				</div>
			</router-link>
			<router-link tag='div' class="fun-card" :to="{ name: 'myConnections', params: {} }">
				<span class="fun-left">我解锁的人脉</span>
				<div class="fun-rigth">
					<img src="../assets/imgs/than.png">
					<span>3</span>
				</div>
			</router-link>
			<router-link tag='div' class="fun-card"  :to="{ name: 'myBooks', params: {} }">
				<span class="fun-left">我的通讯录</span>
				<div class="fun-rigth">
					<img src="../assets/imgs/than.png">
					<span>3</span>
				</div>
			</router-link>
		</div>
		<div class="myFunction" :style="{height: lastHeight}">
			<router-link tag='div' class="fun-card" :to="{ name: 'confirmChange', params: {} }">
				<span class="fun-left">俺搜认证</span>
				<div class="fun-rigth">
					<img src="../assets/imgs/than.png">
					<span>身份认证，权限升级</span>
				</div>
			</router-link>
			<router-link tag='div' class="fun-card" :to="{ name: 'feedBack', params: {} }">
				<span class="fun-left">意见反馈</span>
				<div class="fun-rigth">
					<img src="../assets/imgs/than.png">
				</div>
			</router-link>
			<div class="fun-card" style="border-bottom: 1px solid #ECECEC;" @click="exit" >
				<span class="fun-left">退出登录</span>
				<div class="fun-rigth">
					<img src="../assets/imgs/than.png">
				</div>
			</div>
		</div>
		<div class="telUs">
			<a href="tel:13764567708">
					<img src="../assets/imgs/tel.png" />
					<span>人工热线</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				headImg: '',
				find: true,
				refsOne: '',
				refsTwo: ''
			}
		},
		mounted() {
			const het = this.$refs.mybanner.getBoundingClientRect().height;
			const hetTwo = this.$refs.myFun.getBoundingClientRect().height;
			this.refsOne = het;
			this.refsTwo = hetTwo;
		},
		methods: {
			getHeadImg() {
				this.$http({
					method: 'get',
					url: 'https://open.weixin.qq.com/connect/oauth2/authorize',
					data: {
						appid: 'wx4c238a1fb60f5357',
						redirect_uri: 'http://antsoo.com',
						response_type: 'code',
						scope: 'snsapi_userinfo',
						state: '1#wechat_redirect',
					}
				}).then(function(res) {
					console.log(res)
				}).catch(function(err) {
					console.log(err)
				})
			},
			exit(){
				this.$router.replace({path:'/',params:{userId:-1}})
			}
		},
		computed: {
			lastHeight: function(){
				return document.documentElement.clientHeight - this.refsOne - this.refsTwo - 90 + 'px';
			}
		}
	}
</script>
<!-- https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4c238a1fb60f5357&redirect_uri=http%3A%2F%2Fantsoo.vicp.io%3A31400%2Findex.html&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.head-bg{
		display: block;
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 126px;
	}

	.mybanner{
		width: 100%;
		padding-top: 1px;
		height: 126px;
		.userlogo{
			width: 66px;
			height: 66px;
			border-radius: 50%;
			display: block;
			margin: 0 auto;
			margin-top: 14px;
		}
		.userName{
			display: table;
			min-width: 10px;
			height: 25px;
			line-height: 25px;
			text-align: center;
			margin: 0 auto;
			margin-top: 7px;
			span,img{
				display: block;
				float: left;
			}
			span{
				max-width: 150px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow:ellipsis;
				color: #FFFFFF;
				font-size: 14px;
			}
			img{
				height: 13px;
				margin-left: 5px;
				margin-top: 6px;
			}
		}
	}

	.myFunction{
		background-color: #FFFFFF;
		margin-top: 15px;
		height: 180px;
		.fun-card{
			width: 90%;
			height: 45px;
			float: right;
			line-height: 45px;
			.fun-left{
				display: block;
				float: left;
				font-size: 14px;
				color: #333333;
			}
			.fun-rigth{
				float: right;
				margin-right: 15px;
				font-size: 12px;
				color: #999999;
				span,img{
					display: block;
					float: right;
				}
				span{
					margin-right: 10px;
				}
				img{
					height: 14px;
					margin-top: 15px;
				}
			}
		}
		div:not(:last-child){
			border-bottom: 1px solid #ECECEC;
		}
	}

	.telUs{
		position: fixed;
		z-index: 3;
		bottom: 77px;
		right: 15px;
		img,span{
			display: block;
		}
		img{
			width: 60px;
			border-radius: 50%;
		}
		span{
			text-align: center;
			color: #0092FF;
			opacity: .5;
			font-weight: bold;
			font-size: 15px;
		}
	}
</style>
