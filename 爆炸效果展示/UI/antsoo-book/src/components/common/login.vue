<template>
	<div class="app-container">
		<div class="logo">
			<img src="../../assets/imgs/login.png" />
		</div>
		<p class="title">找客户 找人脉 找供应商 找塑价</p>
		<ul class="op">
			<li>
				<span>手机号：</span>
				<input type="tel" name="" id="" value="" v-model="phoneNum" />
			</li>
			<li>
				<span>验证码：</span>
				<input type="tel" name="" id="" value="" />
				<em @click="getConfirmCode" :class="{'active': codeTimes != 60}">{{confirmCode}}</em>
			</li>
		</ul>
		<button>登录</button>
	</div>
</template>

<script>
	import api from '../../config/index';
	export default {
		data() {
			return {
				confirmCode: '获取验证码',
				codeTimes: 60,
				phoneNum: '', //用户输入的手机号码
			}
		},
		methods: {
			getConfirmCode: function() {
				var _this = this;
				var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(_this.codeTimes != 60) {
					return;
				}
				if(_this.phoneNum == '' || !reg.test(_this.phoneNum)) {
					alert('你输入的电话号码格式错误，请重新输入');
					return false;
				}

				var t = setInterval(function() {
					_this.codeTimes--;
					if(_this.codeTimes < 10) {
						_this.codeTimes = '0' + _this.codeTimes;
					}
					_this.confirmCode = '(' + _this.codeTimes + ')获取验证码';
					if(_this.codeTimes <= 0) {
						_this.confirmCode = '获取验证码';
						_this.codeTimes = 60;
						clearInterval(t);
					}
				}, 1000);

				_this.$http({
					method: api.common.getCode.method,
					url: api.common.getCode.url,
					data: {
						username: _this.phoneNum,
					}
				}).then(function(res) {
					console.log(res)
				}).catch(function(err) {
					console.log(err)
				})
			}
		},
		mounted() {
			this.$store.dispatch('hideFooter');
		}
	}
</script>

<style lang="less" scoped>
	.app-container {
		.logo {
			height: 36px;
			text-align: center;
			margin-top: 30px;
			img {
				display: inline-block;
				height: 36rpx;
			}
		}
		.title {
			text-align: center;
			line-height: 3;
		}
		.op {
			padding: 0 15px;
			margin-top: 30px;
			li {
				width: 100%;
				height: 40px;
				border-bottom: 1px solid #ececec;
				position: relative;
				span {
					display: inline-block;
					height: 40px;
					width: 20%;
					line-height: 40px;
					float: left;
				}
				input {
					display: inline-block;
					height: 40px;
					width: 80%;
					float: right;
					background-color: transparent;
					-webkit-tap-highlight-color: transparent;
				}
				em {
					color: #0092ff;
					height: 24px;
					width: 100px;
					line-height: 22px;
					text-align: center;
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					margin: auto;
					&.active {
						color: #999;
						border: 1px solid #999;
						border-radius: 4px;
					}
				}
			}
		}
		button {
			display: block;
			background-color: #0092ff;
			width: 80%;
			height: 48px;
			margin: 50px auto;
			border-radius: 4px;
			color: #fff;
			-webkit-tap-highlight-color: transparent;
		}
	}
</style>